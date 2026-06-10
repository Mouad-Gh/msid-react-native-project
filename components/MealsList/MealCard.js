import { StyleSheet, Text, Pressable, Image, View, Dimensions, } from 'react-native';
import { useAppContext } from '../../libs/useAppContext';

import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const ITEM_WIDTH = (screenWidth - 30) / 2;
export default function MealCard({ meal }) {
  const navigation = useNavigation();
  const { state, dispatch } = useAppContext();
  // console.log('meal', meal)
  const handlePress = ()=> {
    console.log('meal selected', meal)
    dispatch({
      type: 'SELECT_MEAL',
      payload: meal.idMeal,
    })
    navigation.navigate('Recipe')
  }
  return (
    <Pressable onPress={handlePress} style={styles.card} >
      <View style={{backgroundColor: '#ecf0f1', flex: 1, borderRadius: 10, alignItems: 'center',  }}>
        <Image source= {{uri: meal.strMealThumb}} style={styles.img} />
      <Text style={styles.title}>
        {meal.strMeal}
      </Text>
      </View>
      
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    // height: 300,
    // backgroundColor: 'red',
    // marginRight: 10,
    elevation: 3,
    overflow: "hidden",
    marginTop: 10,
    
  },
  img:{
    width: "100%",
    height: 150,  
    borderRadius: 10,
    objectFit: 'fit',
    // marginBottom: 10,

  },
  title: {
    // marginTop: 5,
    fontSize: 14,
    // fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontWeight: "bold",
  },
});
