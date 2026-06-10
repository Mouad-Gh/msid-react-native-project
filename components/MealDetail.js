import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

const ingredients = [
  { name: 'Ground Beef', amount: '1 lb' },
  { name: 'Garlic', amount: '4 Cloves Crushed' },
  { name: 'Onion', amount: '1/2 cup' },
  { name: 'Salt', amount: 'To taste' },
  { name: 'Pepper', amount: 'To taste' },
  { name: 'Plum Tomatoes', amount: '3' },
  { name: 'Parsley', amount: '1 tsp' },
  { name: 'Water', amount: '1/2 cup' },
];

const instructions = [
  'Combine ground beef with 1/2 of the minced garlic and 1 tablespoon chopped onion in a large bowl.',
  'Mix with your hands until fully incorporated.',
  'Shape meat mixture into 1 1/2-inch oblong patties; you should have 12 to 14 meatballs.',
  'Heat a large skillet over medium-high heat.',
  'Brown patties in batches in the hot skillet until crispy on both sides and no longer pink in the center, about 10 minutes.',
  'Set meatballs aside in a rimmed serving dish.',
  'Reduce heat to medium and stir remaining chopped onion into drippings in the skillet.',
  'Season with salt and pepper.',
  'Cook, stirring constantly, until onion has softened and turned translucent, about 5 minutes.',
];

export default function RecipeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Icon name="chevron-back" size={18} color="#000" />
        <Text style={styles.backText}>Go back</Text>
      </TouchableOpacity>

      {/* Video Thumbnail */}
      <View style={styles.videoContainer}>
        <Image
          source={{
            uri: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          }}
          style={styles.videoImage}
        />

        <View style={styles.playOverlay}>
          <Icon name="play" size={40} color="#fff" />
        </View>
      </View>

      {/* Recipe Title */}
      <Text style={styles.title}>Algerian Kefta (Meatballs)</Text>

      {/* Ingredients */}
      <Text style={styles.sectionTitle}>Ingredients</Text>

      <View style={styles.card}>
        {ingredients.map((item, index) => (
          <View
            key={index}
            style={[
              styles.ingredientRow,
              index !== ingredients.length - 1 && styles.rowBorder,
            ]}
          >
            <Text style={styles.ingredientName}>{item.name}</Text>
            <Text style={styles.ingredientAmount}>{item.amount}</Text>
          </View>
        ))}
      </View>

      {/* Instructions */}
      <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
        Instructions
      </Text>

      {instructions.map((step, index) => (
        <View key={index} style={styles.stepRow}>
          <View style={styles.stepCircle}>
            <Text style={styles.stepNumber}>{index + 1}</Text>
          </View>

          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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