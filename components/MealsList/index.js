import { StyleSheet, Text, FlatList, View } from 'react-native';
import useFetch from '../../libs/useFetch';
import { useAppContext } from '../../libs/useAppContext';
import MealCard from './MealCard';

export default function MealsList() {
  const { state, dispatch } = useAppContext();
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(state?.categoryName)}`) ;//Chicken
  console.log("---",data, loading, error)

  return (
    <View style={{height: '100%'}}>
      {loading && <Text>Loading...</Text> }
      {error && <Text>{error}</Text> }
      <Text style={styles.title}>Plats de la catégorie: {state.categoryName}</Text>
      <FlatList style={styles.container}
          data={data.meals} numColumns={2} showsVerticalScrollIndicator={false}
          renderItem = {item => <MealCard meal= {item.item} />}
          keyExtractor= {(item) => item.idMeal}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          columnWrapperStyle={{
            justifyContent: 'flex-start',
            gap: 10,
          }}
        />
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    // padding: 8,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
