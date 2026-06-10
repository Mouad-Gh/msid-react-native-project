import { StyleSheet, Text, View, ScrollView } from 'react-native';

import CategoriesList from '../components/CategoriesList/index'
import MealsList from '../components/MealsList/index'


export default function App() {
  return (
    <View style={styles.container}>
        <CategoriesList />
        <MealsList />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
    padding: 10,
    paddingTop: 110,
    // overflow: 'visible',
  },
  
});