// import { ScrollView,TouchableHighlight,StyleSheet,View, Text} from 'react-native'
// import React from 'react'
// import MapView from 'react-native-maps';
// const Rating = ({navigation}: {navigation: any}) => {
//   var myObject = {

//    }

  

//   function goToStopSpotPage(){
//     navigation.navigate("StopSpot")
//   }
  
//   function goToDetailPage(){
//     navigation.navigate("RouteDetail")
//   }
//     return (
//     <View style={[styles.container]}>
//       <MapView initialRegion={{
//             latitude: 10.878770802642624, 
//             longitude: 106.80236881535804,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,

//           }}
//           showsUserLocation={true}
//           followsUserLocation={true}
//           style={{width:"100%",height:"30%"}} />
//         <View style={[styles.rowFlex,{width:'100%',height:'5%',marginVertical:10}]}>
//           <TouchableHighlight  style={[styles.button]} onPress={goToStopSpotPage}>
//             <Text style={{color:'#4C586F',fontWeight:'bold'}}>TRẠM DỪNG</Text>
//           </TouchableHighlight>
//           <TouchableHighlight onPress={goToDetailPage} style={[styles.button,{backgroundColor:'#FFF'}]}>
//             <Text style={{color:'#4C586F',fontWeight:'bold'}}>CHI TIẾT</Text>
//           </TouchableHighlight>
//           <TouchableHighlight  style={[styles.button,{backgroundColor:"#4C586F"}]}>
//             <Text style={{color:'#FFF',fontWeight:'bold'}}>ĐÁNH GIÁ</Text>
//           </TouchableHighlight>
//         </View>
//         <ScrollView style={{width:"100%"}}>
//           <View>
            
//           </View>
//           {Object.entries(myObject).map(([key,v])=>{
//             return <T detail={v} key={key}/>
//            })}

//           </ScrollView>
//           {/* <View style={{height:100}}></View> */}
//     </View>
//   )
// }
// const T=(props:any)=>{

//   return(
//     <View style={{maxWidth:"100%",flexWrap: 'wrap',justifyContent:'flex-start',marginHorizontal:15,marginVertical:3,alignItems:'flex-start',flexDirection:'row'}}>
//       <Text style={{marginRight:5,fontSize:16,color:"#4C586F",fontWeight:'bold'}}>{props.detail.title}:</Text>
//       <Text style={{fontSize:15,color:"#969EA3"}}>{props.detail.content}</Text>
//     </View>
//   )

// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

// button:{
//   width:"30%",
//   height:"100%",
//   marginHorizontal:5,
//   borderWidth:1,
//   borderColor:"#FFF",
//   backgroundColor:'#FFFFFF',
//   borderRadius:5,
//   flexDirection:'column',
//   justifyContent:'center',
//   alignItems:'center'
// },
// rowFlex:{
//   flexDirection:'row',
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// columnFlex:{
//   flexDirection:'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// }

// });
// export default Rating