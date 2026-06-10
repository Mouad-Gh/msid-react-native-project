import { StyleSheet, Text, Pressable, Image, View } from 'react-native';
import { useAppContext } from '../../libs/useAppContext';


export default function CategoryCard({ category }) {
  // console.log('acte', category)
  const { state, dispatch } = useAppContext();
  // console.log('press', state)
  const handlePress = ()=> {
    dispatch({
      type: 'SET_CATEGORY',
      payload: category.strCategory,
    })
  }
  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={[styles.viewContainer, state?.categoryName === category?.strCategory && styles.selectedCard,]}>
        <Image source= {{uri: category.strCategoryThumb}} style={styles.img} />
      </View>
      <Text style={styles.paragraph}>
        {category.strCategory}
      </Text>
      
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    // backgroundColor: 'red',
    marginRight: 10,
    
  },
  viewContainer: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 10,
  },
  selectedCard : {
    backgroundColor: "red",
  },
  img:{
    width: '100%',
    height: '100%',    
    borderRadius: 10,
    objectFit: 'fit',

  },
  paragraph: {
    marginTop: 5,
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});
