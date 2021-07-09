import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Icon, Badge} from "react-native-elements"

export default class Wednesday extends React.Component {
  render(){
    return (
     <View style={styles.container}>
     <Header
      leftComponent={<Icon name="arrow-left" type="feather" color="black" onPress={()=>{
        this.props.navigation.navigate("FoodScreen")
      }}/>}

     centerComponent={{text:"Wednesday",style:{color:"blue",fontSize:20,fontWeight:"bold"}}}
     backgroundColor={"green"}

     rightComponent={<Icon name="home" type="fontawesome5" color="black" onPress={()=>{
      this.props.navigation.navigate("HomeScreen")
    }}/>}
    /> 

     <Text style={styles.foodText}>
      Breakfast(9:00):Tea, Tofu Curry, Aloo Paratha
    </Text>
 
    <Text style={styles.foodText}>
      Lunch(12:45):Jeera Rice, Chana Curry
    </Text>

    <Text style={styles.foodText}>
      Snack(4:30):Bread And Jam
    </Text>
     
    <Text style={styles.foodText}>
      Dinner(7:30):Vegetable Sandwich
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