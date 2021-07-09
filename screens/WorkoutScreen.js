import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {Header, Icon, Badge} from "react-native-elements"


export default class WorkoutScreen extends React.Component {
render(){
  return (
    

    
    <View style={styles.container}>
      <ScrollView>
      <Header
     leftComponent={<Icon name="home" type="fontawesome5" color="blue" onPress={()=>{
       this.props.navigation.navigate("HomeScreen")
     }}/>}

     centerComponent={{text:"WorkoutScreen",style:{color:"blue",fontSize:20,fontWeight:"bold"}}}
     backgroundColor={"green"}
     />  
    
     <Image
     source={require("../assets/Vrikrasana.gif")}
     style={{width:60,height:60,alignSelf:"center"}}
     />
     


     <Image
     source={require("../assets/Chakrasana.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Chakrasana
     </Text>

     <Text style={{marginTop:23}}>
     The chest expands and the lungs get more oxygen.
     </Text>

     <Text style={{marginTop:5}}>
     It reduces the stress and tension in the body.
     </Text>

     <Text style={{marginTop:5}}>
     Sharpens eyesight.
     </Text>


      
     <Image
     source={require("../assets/Bakasana.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Bakasana
     </Text>

     <Text style={{marginTop:23}}>
     Strengthens arms so they can hold your body weight.
     </Text>

     <Text style={{marginTop:5}}>
     Strengthens core to help hold you up.
     </Text>

     <Text style={{marginTop:5}}>
     Strengthens glutes and adductors.
     </Text>



       
     <Image
     source={require("../assets/Bhujanga.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Bhujangasana
     </Text>

     <Text style={{marginTop:23}}>
     Strengthens the spine.
     </Text>

     <Text style={{marginTop:5}}>
     Stretches chest and lungs, shoulders, and abdomen.
     </Text>

     <Text style={{marginTop:5}}>
     Tones the buttocks.
     </Text>



     <Image
     source={require("../assets/Mandukasana.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Mandukasana
     </Text>

     <Text style={{marginTop:23}}>
     Prevent Diabetes.
     </Text>

     <Text style={{marginTop:5}}>
     Improve Digestive System.
     </Text>

     <Text style={{marginTop:5}}>
     Relieve Stress and Anxiety.
     </Text>



     <Image
     source={require("../assets/Nataraja.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Natarajasana
     </Text>

     <Text style={{marginTop:23}}>
     Gives strength to your chest, ankles, hips, and legs.
     </Text>

     <Text style={{marginTop:5}}>
     Increases your metabolism and helps in weight loss.
     </Text>

     <Text style={{marginTop:5}}>
     It gives your groin, abdominal organs a good Stretch
     </Text>



     <Image
     source={require("../assets/Sarvanga.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Sarvangasana
     </Text>

     <Text style={{marginTop:23}}>
     Calms the brain and helps relieve stress and mild depression.
     </Text>

     <Text style={{marginTop:5}}>
     Stimulates the thyroid and prostate glands and abdominal organs.
     </Text>

     <Text style={{marginTop:5}}>
     Stretches the shoulders and neck.
     </Text>



     <Image
     source={require("../assets/SuptaVajrasana.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Supta Vajrasana
     </Text>

     <Text style={{marginTop:23}}>
     Makes the spine flexible and tones spinal nerves.
     </Text>

     <Text style={{marginTop:5}}>
     Correct rounded shoulders consequently improving body posture.
     </Text>

     <Text style={{marginTop:5}}>
     Divert energy to the brain therefore helps to achieve spiritual gains.
     </Text>



     <Image
     source={require("../assets/Trikonasa.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Trikonasana
     </Text>

     <Text style={{marginTop:23}}>
     Stimulates the abdominal organs.
     </Text>

     <Text style={{marginTop:5}}>
     Helps relieve stress.
     </Text>

     <Text style={{marginTop:5}}>
     Improves digestion.
     </Text>



     <Image
     source={require("../assets/Vajrasana.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Vajrasana
     </Text>

     <Text style={{marginTop:23}}>
     Stimulates the abdominal organs.
     </Text>

     <Text style={{marginTop:5}}>
     Helps relieve stress.
     </Text>

     <Text style={{marginTop:5}}>
     Improves digestion.
     </Text>



     <Image
     source={require("../assets/Dhanurasana.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Dhanurasana
     </Text>

     <Text style={{marginTop:23}}>
     Strengthens the back muscles.
     </Text>

     <Text style={{marginTop:5}}>
     Improves posture.
     </Text>

     <Text style={{marginTop:5}}>
     Stimulates the organs of the abdomen and neck.
     </Text>



     <Image
     source={require("../assets/Halasana.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Halasana
     </Text>

     <Text style={{marginTop:23}}>
     Calms the brain.
     </Text>

     <Text style={{marginTop:5}}>
     Stimulates the abdominal organs and the thyroid gland.
     </Text>

     <Text style={{marginTop:5}}>
     Stretches the shoulders and spine.
     </Text>



     <Image
     source={require("../assets/Uttanasana.gif")}
     style={{width:70,height:70,marginTop:20}}
     />
      <Text style={{marginLeft:90,marginTop:-50,fontWeight:"bold"}}>
      Uttanasana
     </Text>

     <Text style={{marginTop:23}}>
     Stretches the hips, hamstrings, and calves.
     </Text>

     <Text style={{marginTop:5}}>
     Strengthens the thighs and knees.
     </Text>

     <Text style={{marginTop:5}}>
     Reduces stress, anxiety, depression, and fatigue.
     </Text>






     </ScrollView>
    </View>
    
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});