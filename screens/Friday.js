import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Icon, Badge} from "react-native-elements"

export default class Friday extends React.Component {
  render(){
    return (
     <View style={styles.container}>
      <Header
      leftComponent={<Icon name="arrow-left" type="feather" color="black" onPress={()=>{
        this.props.navigation.navigate("FoodScreen")
      }}/>}

     centerComponent={{text:"Friday",style:{color:"blue",fontSize:20,fontWeight:"bold"}}}
     backgroundColor={"green"}

     rightComponent={<Icon name="home" type="fontawesome5" color="black" onPress={()=>{
      this.props.navigation.navigate("HomeScreen")
    }}/>}
    />  

<Text style={styles.foodText}>
      Breakfast(9:00):Idli, Sambar, Chutney
    </Text>
 
    <Text style={styles.foodText}>
      Lunch(12:45):Biryani, Raitha
    </Text>

    <Text style={styles.foodText}>
      Snack(4:30):Vegetable Soup
    </Text>
     
    <Text style={styles.foodText}>
      Dinner(7:30):Garlic Mushroom, Roti
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