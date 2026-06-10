import { StyleSheet, Text, FlatList, View } from 'react-native';
import useFetch from '../../libs/useFetch';
import CategoryCard from './CategoryCard'


export default function CategoriesList() {
  const { data, loading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php") ;
  // console.log(data)

  return (
    <View style={styles.container} >
      {loading && <Text>Loading...</Text> }
      {error && <Text>{error}</Text> }
      <Text style={styles.title}>Categories</Text>
      <FlatList horizontal showsHorizontalScrollIndicator={false}
          data={data.categories}
          renderItem = {item => <CategoryCard category= {item.item} />}
          keyExtractor= {(item) => item.idCategory.toString()}
        />
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    minHeight: 10,
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
