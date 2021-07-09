import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Header, Icon, Badge} from "react-native-elements"

export default class FoodScreen extends React.Component {
render(){
  return (
    <View style={styles.container}>
     <Header
     leftComponent={<Icon name="home" type="fontawesome5" color="blue" onPress={()=>{
       this.props.navigation.navigate("HomeScreen")
     }}/>}

     centerComponent={{text:"FoodScreen",style:{color:"blue",fontSize:20,fontWeight:"bold"}}}
     backgroundColor={"green"}
     /> 

     <TouchableOpacity style={styles.weekdays} onPress={()=>{
       this.props.navigation.navigate("Monday")
     }}>
       <Text>
         Monday
       </Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.weekdays} onPress={()=>{
       this.props.navigation.navigate("Tuesday")
     }}>
       <Text>
         Tuesday
       </Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.weekdays} onPress={()=>{
       this.props.navigation.navigate("Wednesday")
     }}>
       <Text>
         Wednesday
       </Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.weekdays} onPress={()=>{
       this.props.navigation.navigate("Thursday")
     }}>
       <Text>
         Thursday
       </Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.weekdays} onPress={()=>{
       this.props.navigation.navigate("Friday")
     }}>
       <Text>
         Friday
       </Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.weekdays} onPress={()=>{
       this.props.navigation.navigate("Saturday")
     }}>
       <Text>
         Saturday
       </Text>
     </TouchableOpacity >

     <TouchableOpacity style={styles.weekdays} onPress={()=>{
       this.props.navigation.navigate("Sunday")
     }}>
       <Text>
         Sunday
       </Text>
     </TouchableOpacity>

     <Text>
       After The Weekdays Are Over Please Shuffle the Foods. 
     </Text>

     

     

    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:25
  },
  weekdays: {
    height:30,
    width:90,
    marginTop:20,
    padding:5,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"skyblue",
    alignSelf:"center"
  }
});