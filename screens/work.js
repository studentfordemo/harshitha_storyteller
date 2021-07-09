import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Icon, Badge} from "react-native-elements"

export default class WorkoutScreen extends React.Component {
render(){
  return (
    <View style={styles.container}>
      <Header
     leftComponent={<Icon name="home" type="fontawesome5" color="blue" onPress={()=>{
       this.props.navigation.navigate("HomeScreen")
     }}/>}

     centerComponent={{text:"WorkoutScreen",style:{color:"blue",fontSize:20,fontWeight:"bold"}}}
     backgroundColor={"green"}
     />  
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});