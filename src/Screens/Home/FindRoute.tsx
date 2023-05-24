import {TouchableHighlight, TextInput,StyleSheet,Button,View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { default as IoniconsIcon } from 'react-native-vector-icons/Ionicons'
import { Column } from 'native-base';
import { default as OcticonIcon } from 'react-native-vector-icons/Octicons'
const FindRoute = ({navigation}: {navigation: any}) => {
  function goToListRoutePage(){
    navigation.navigate('ListRoute', {
      routeId: RouteID,
  
    })
}
  const [RouteID,setRouteID] = React.useState("")
  const [startPoint,setStartPoint] = React.useState("")
  const [endPoint,setEndPoint] = React.useState("")
  return (
    <View style={styles.container}>
        <MapView initialRegion={{
            latitude: 10.878770802642624, 
            longitude: 106.80236881535804,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          style={styles.map} />
        <View style={{ flexDirection:'row',position: 'absolute', top: 10, width: '100%',justifyContent:'center',alignItems:'center' }}>
          <TextInput
            style={{
              borderRadius: 10,
              margin: 10,
              color: '#A2AAB0',
              borderColor: '#FFF',
              backgroundColor: '#FFF',
              borderWidth: 1,
              height: 45,
              paddingHorizontal: 10,
              fontSize: 16,
              width: '60%',
            }}
            placeholder={'Tìm theo mã chuyến'}
            onChangeText={text => setRouteID(text)}
            placeholderTextColor={'#A2AAB0'}
          />
         
            <TouchableHighlight style={{height:42,width:42,borderWidth:1,borderColor:"#FFF",backgroundColor:'#FFFFFF',borderRadius:15,flexDirection:'column',justifyContent:'center',alignItems:'center'}} 
            onPress={goToListRoutePage}
            underlayColor="#E8E8E8">
              <IoniconsIcon name='search' size={25} color={"black"}/>
            </TouchableHighlight>
        </View>
        
        <View style={[styles.columnFlex,{width:"100%",justifyContent:'flex-start'}]}>
            <Text style={{marginTop:20,marginBottom:5,fontWeight:'bold',color:"#4C586F"}}>TÌM THEO ĐƯỜNG ĐI</Text>
            <View style={[styles.rowFlex,{height:"12%",width:"100%",margin:5,justifyContent:'center'}]}>
               
                <TextInput  
                 style={{
                  borderRadius: 10, 
                  color: '#A2AAB0',
                  borderColor: '#FFF',
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  height: "100%",
                  paddingHorizontal: 5,
                  paddingVertical:0,
                  fontSize: 16,
                  width: '70%',
                }}
                value={startPoint}
                placeholder={'Chọn điểm xuất phát'}
                onChangeText={text => setStartPoint(text)}
                placeholderTextColor={'#A2AAB0'}
              />
            </View>
            <View style={[styles.rowFlex,{height:"12%",width:"100%",margin:5,justifyContent:'center'}]}>
                <TextInput
                 style={{
                  borderRadius: 10,
                  color: '#A2AAB0',
                  borderColor: '#FFF',
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  height: "100%",
                  paddingHorizontal: 5,
                  paddingVertical:0,
                  fontSize: 16,
                  width: '70%',
                }}
                value={endPoint}
                placeholder={'Chọn điểm kết thúc'}
                onChangeText={text => setEndPoint(text)}
                placeholderTextColor={'#A2AAB0'}
              />
            </View>
          <TouchableHighlight style={{height:"12%",width:"40%",borderWidth:1,borderColor:"#FFF",backgroundColor:'#4C586F',borderRadius:8,flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:10}} 
            onPress={goToListRoutePage}
              underlayColor="#E8E8E8">
                <Text style={{fontWeight:'bold',color:"white"}}>TÌM CHUYẾN</Text>
          </TouchableHighlight>
        </View>
     

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowFlex:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnFlex:{
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map:{
    height:"68%",

  },
  searchBox:{
    flex:1,
  }

});
export default FindRoute