import React from 'react';
import { ActivityIndicator, View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, FlatList, } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { useAppContext } from './../libs/useAppContext';
import useFetch from './../libs/useFetch';


export default function RecipeScreen({ navigation }) {
  const { state, dispatch } = useAppContext();
  
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(state.selectedMeal)}`);

  console.log("---recipe",data, loading, error)
  const meal = data?.meals?.[0];
  const ingredients = React.useMemo(() => {
    if (!meal) return [];

    const list = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]?.trim();
      const measure = meal[`strMeasure${i}`]?.trim();

      if (ingredient) {
        list.push({
          name: ingredient,
          amount: measure || '',
        });
      }
    }
    return list;
  }, [meal]);
  const instructions = React.useMemo(() => {
    if (!meal?.strInstructions) return [];

    if (meal.strInstructions.includes('STEP')) {
      return meal.strInstructions
        .split(/STEP\s+\d+/)
        .filter(Boolean)
        .map(step => step.trim());
    }

    return meal.strInstructions
      .split('\n')
      .filter(Boolean)
      .map(step => step.trim());
  }, [meal]);
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error loading recipe.</Text>;
  }

  if (!meal) {
    return <Text>No recipe found.</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-back" size={18} color="#000" />
        <Text style={styles.backText}>Go back</Text>
      </TouchableOpacity>
      
      {/* rest of your UI */}
      {/* Video Thumbnail */}
      <View style={styles.videoContainer}>
        <Image
          source={{ uri: meal.strMealThumb }}
          style={styles.videoImage}
        />

        <View style={styles.playOverlay}>
          <Icon name="play" size={40} color="#fff" />
        </View>
      </View>

      {/* Recipe Title */}
      <Text style={styles.title}>{meal.strMeal}</Text>

      {/* Ingredients */}
      <Text style={styles.sectionTitle}>Ingredients</Text>

      <View style={styles.card}>
        <FlatList
          data={ingredients}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false} // keeps it behaving like a regular mapped list
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.ingredientRow,
                index !== ingredients.length - 1 && styles.rowBorder,
              ]}
            >
              <Text style={styles.ingredientName}>{item.name}</Text>
              <Text style={styles.ingredientAmount}>{item.amount}</Text>
            </View>
          )}
        />
      </View>

      {/* Instructions */}
      <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
        Instructions
      </Text>

      <FlatList
        data={instructions}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <View style={styles.stepRow}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepNumber}>{index + 1}</Text>
            </View>

            <Text style={styles.stepText}>{item}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginHorizontal: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: '#F3F4F6',
  },

  backText: {
    marginLeft: 4,
    fontSize: 15,
    fontWeight: '500',
  },

  videoContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },

  videoImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },

  playOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -25,
    marginLeft: -25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    marginHorizontal: 20,
    color: '#111827',
  },

  sectionTitle: {
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  card: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },

  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  ingredientName: {
    fontSize: 16,
    color: '#111827',
  },

  ingredientAmount: {
    fontSize: 16,
    color: '#6B7280',
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 16,
    marginBottom: 18,
  },

  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1F2937',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },

  stepNumber: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },

  stepText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
  },
});