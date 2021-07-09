import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform,Image,FlatList,TouchableOpacity} from 'react-native';
import * as Font from 'expo-font'
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading'


import Ionicons from 'react-native-vector-icons/Ionicons'

let costumFonts={'Bubblegum-Sans':require('../assets/fonts/BubblegumSans-Regular.ttf')}
let stories=require('./temp_stories.json')

export default class StoryCard extends React.Component {
    constructor(props){
        super(props)

        this.state={
            fontsLoded:false
          }
        }
        async loadFonts(){
          await Font.loadAsync(costumFonts)
          this.setState({
            fontsLoded:true
          })
        }
        componentDidMount(){
          this.loadFonts()
        }
        render(){
            if(!this.state.fontsLoded){
              return( 
                <AppLoading/>
              )
            }
          else{
            return(
              <TouchableOpacity style={{flex:1,backgroundColor:'2072d6'}}
              onPress={()=>{
                this.props.navigation.navigate('StoryScreen',{story:this.props.story})
              }}
              >
                
               
                  <View style={styles.cardContainer}>
       <Image source={require('../assets/story_image_1.png')} style={styles.storyImage}/>
         <View style={styles.titleContainer}>
                        <Text style={styles.titleText} >
                            {this.props.story.title}

                        </Text>
                        <Text style={styles.authorText} >
                            {this.props.story.author}

                        </Text>
                        <Text style={styles.descriptionText} >
                            {this.props.story.description}

                        </Text>

                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                         <Ionicons name={'heart'} size={RFValue(25)} color={'white'} />
                         <Text style={styles.likeText}>
                         12k
                         </Text>
                        </View>

                    </View>
                    </View>
                    </TouchableOpacity>
                    
                    )
                    }
                    }
                    }
                    
const styles=StyleSheet.create({
    cardContainer:{
        margin:RFValue(13),
        backgroundColor:'#254377',
        borderRadius:15

    },
    storyImage:{
     resizeMode:'contain',
     width:'95%',
     alignSelf:'center',
     height:RFValue(250)   
    },
    titleContainer:{
        paddingLeft:20,
        justifyContent:'center'
    },
    titleText:{
        fontSize:RFValue(25),
         fontFamily:'Bubblegum-Sans',
         color:'white'
    },
    authorText:{
        fontSize:RFValue(18),
         fontFamily:'Bubblegum-Sans',
         color:'white'
    },
    descriptionText:{
        fontSize:RFValue(13),
         fontFamily:'Bubblegum-Sans',
         color:'white'
    },
    actionContainer:{
        padding:RFValue(10),
        justifyContent:'center',
        alignItems:'center'
    },
    likeButton:{
        width:RFValue(160),
        height:RFValue(40),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e51247',
        flexDirection:'row',
        borderRadius:RFValue(30),

    },
    likeText:{
      color:'white',
      fontFamily:'Bubblegum-Sans',
      fontSize:RFValue(25),
      marginLeft:RFValue(5)
    }

})