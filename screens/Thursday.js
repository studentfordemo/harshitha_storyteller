import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Icon, Badge} from "react-native-elements"

export default class Thursday extends React.Component {
  render(){
    return (
     <View style={styles.container}>
     <Header
      leftComponent={<Icon name="arrow-left" type="feather" color="black" onPress={()=>{
        this.props.navigation.navigate("FoodScreen")
      }}/>}

     centerComponent={{text:"Thursday",style:{color:"blue",fontSize:20,fontWeight:"bold"}}}
     backgroundColor={"green"}

     rightComponent={<Icon name="home" type="fontawesome5" color="black" onPress={()=>{
      this.props.navigation.navigate("HomeScreen")
    }}/>}
    /> 

<Text style={styles.foodText}>
      Breakfast(9:00):Fruit Salad
    </Text>
 
    <Text style={styles.foodText}>
      Lunch(12:45):Lemon Rice, Coconut Rice
    </Text>

    <Text style={styles.foodText}>
      Snack(4:30):Sesame Balls(Only 2)
    </Text>
     
    <Text style={styles.foodText}>
      Dinner(7:30):Broccoli Curry With Roti
    </Text>

   </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  foodText: {
    fontWeight:"bold",
    margin:5,
    alignSelf:"center"
  }
});