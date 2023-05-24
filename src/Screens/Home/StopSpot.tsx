import { ScrollView, TouchableHighlight,StyleSheet,View, Text} from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { default as IoniconsIcon } from 'react-native-vector-icons/Octicons'
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { default as FontIcon } from 'react-native-vector-icons/FontAwesome'
const StopSpot = ({navigation}: {navigation: any}) => {
 
  const [spot,setSpot] = React.useState(["Bến xe buýt Quận 8",
  "Bùi Minh Trực",
  "Cầu Nhị Thiên Đường",
  "Tùng Thiện Vương",
  "Chợ Xóm Củi",
  "Bưu điện Quận 5",
  "Rạp Đại Quang",
  "Bệnh viện Chợ Rẫy",
  "Bệnh viện Hùng Vương",
  "CoopMart Lý Thường Kiệt",
  "Điện lực Phú Thọ",
  "Nhà thi đấu Phú Thọ",
  "Bệnh viện Trưng Vương",
  "Đại học Bách Khoa",
  "Bưu Điện Phú Thọ",
  "Ngã ba Thành Thái",
  "Siêu thị Nguyễn Kim - CMC Tân Bình",
  "Cây xăng Đôi",
  "Chợ Tân Bình",
  "Bệnh viện chỉnh hình và Phục hồi chức năng",
  "Bệnh viện Thống Nhất",
  "Bệnh viện Quận Tân Bình",
  "Nhà hàng Đông Phương",
  "Công viên Hoàng Văn Thụ",
  "Bảo Tàng Miền Đông",
  "Siêu Thị Big C",
  "Khách Sạn Tân Sơn Nhất",
  "Công an Phú Nhuận",
  "Ngã tư Phú Nhuận",
  "Ngã tư Phan Xích Long",
  "Ngã Tư Thích Quảng Đức",
  "Trường Đại học Văn Hiến",
  "Bệnh Viện Phước An",
  "Công viên Văn hóa Phú Nhuận",
  "UBND Quận Bình Thạnh",
  "Lăng Ông Bà Chiểu",
  "Chợ Bà Chiểu",
  "Tòa Án nhân dân Quận Bình Thạnh",
  "Chùa Bồ Đề",
  "Nhà thờ Hàng Xanh",
  "Chợ Hàng Xanh",
  "Ngã Ba Hàng Xanh",
  "Đài Liệt sĩ",
  "Siêu thị Coop Mart",
  "Cổng ra - Bến xe Miền Đông 3",
  "Ngã tư Bình Triệu",
  "Đường số 20",
  "Chùa Ưu Đàm",
  "Cá sấu Hoa cà",
  "THCS Ngô Chí Quốc",
  "Chùa An Lạc",
  "Cầu Gò Dưa",
  "Đường 30",
  "Chùa Quan Âm",
  "Ngã tư Tô Ngọc Vân - Phạm Văn Đồng",
  "Bồn nước",
  "Chợ Thủ Đức",
  "Ngã ba Chương Dương",
  "Cao đẳng xây dựng 2",
  "Siêu thị Nguyễn Kim",
  "Trường ĐHSP Kỹ Thuật",
  "Công an Quận 9",
  "Chợ chiều",
  "Trạm Hutech - Khu Công nghệ cao",
  "Khu Công nghệ cao quận 9",
  "Cầu Vượt Trạm 2",
  "Suối Tiên",
  "Nghĩa trang liệt sĩ TP.HCM",
  "Vành đại ĐHQG TPHCM",
  "KTX Khu A ĐH Quốc Gia TPHCM",
  "Đại học Quốc tế",
  "Đại học Quốc gia"])
  const [startSpot,setStartSpot] = React.useState("Bến xe buýt Quận 8")
  const [endSpot,setEndSpot] = React.useState("Đại học quốc gia")
  function goToDetailPage(){
    navigation.navigate("RouteDetail")
  }
  function goToRatingPage(){
    navigation.navigate("Rating")
  }
  function reverseSpot(){
    var temp = startSpot;
    setStartSpot(endSpot);
    setEndSpot(temp);
    setSpot(spot.reverse());
  }
 
 
    return (
    <View style={[styles.container]}>
       <MapView initialRegion={{
            latitude: 10.878770802642624, 
            longitude: 106.80236881535804,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

          }}
          showsUserLocation={true}
          followsUserLocation={true}
          style={{width:"100%",height:"30%"}} />
        <View style={[styles.rowFlex,{width:'100%',height:'5%',marginVertical:10}]}>
          <TouchableHighlight style={[styles.button,{backgroundColor:'#4C586F'}]}>
            <Text style={{color:'#FFF',fontWeight:'bold'}}>TRẠM DỪNG</Text>
          </TouchableHighlight>
          <TouchableHighlight  style={[styles.button]} onPress={goToDetailPage}>
            <Text style={{color:'#4C586F',fontWeight:'bold'}}>CHI TIẾT</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={goToRatingPage} style={[styles.button]}>
            <Text style={{color:'#4C586F',fontWeight:'bold'}}>ĐÁNH GIÁ</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.rowFlex,{width:'100%',height:'5%',marginVertical:0,justifyContent:'space-between',paddingHorizontal:15,backgroundColor:"#EBECED"}]}>
            <Text style={{color:'#4C586F',fontSize:16,width:'40%',fontWeight:'bold'}}>{startSpot}</Text>
            <TouchableHighlight onPress={reverseSpot} style={{borderRadius:15,height:25,width:50,borderWidth:1,borderColor:"#FFF",backgroundColor:'#FFFFFF',flexDirection:'column',justifyContent:'center',alignItems:'center'}} 
                underlayColor="#E8E8E8">
                <MaterialIcon name='swap-horizontal-bold' size={22} color={"#4C586F"}/>
            </TouchableHighlight>
            <Text style={{color:'#4C586F',fontSize:16,width:'40%',fontWeight:'bold'}}>{endSpot}</Text>
        </View>
        <ScrollView>
        {spot?.map((location,index) => {
            return (
              <T spot={location} key={index}/>
            )
          })
        }
     
        </ScrollView>

    </View>
  )
}
const T=(props:any)=>{

  return(
    <View style={[styles.rowFlex,{justifyContent:'flex-start',marginLeft:15,marginVertical:10,alignItems:'center'}]}>
      {/* <IoniconsIcon name='dot' size={18} color={"black"}/> */}
      <FontIcon name='minus' size={12} color={"black"}/>
      <Text style={{marginLeft:5,fontSize:16,color:"#4C586F"}}>{props.spot}</Text>
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    flex:4,

  },
button:{
  width:"30%",
  height:"100%",
  marginHorizontal:5,
  borderWidth:1,
  borderColor:"#FFF",
  backgroundColor:'#FFFFFF',
  borderRadius:5,
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
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
}

});
export default StopSpot