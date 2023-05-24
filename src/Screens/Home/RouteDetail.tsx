import { ScrollView, TouchableHighlight, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { default as FontIcon } from 'react-native-vector-icons/FontAwesome'
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialCommunityIcons'

const RouteDetail = ({ navigation }: { navigation: any }) => {
  var myObject = {
    name: { title: "Tên chuyến", content: "Chuyến số 8" },
    start: { title: "Bến đầu", content: "Bến xe bus quận 8" },
    end: { title: "Bến cuối", content: "Bến xe bus Đại học Quốc gia" },
    distance: { title: "Độ dài chuyến", content: "33 km" },
    time: { title: "Thời gian di chuyển", content: "80-90 phút" },
    time_between: { title: "Giãn cách chuyến", content: "5 phút/chuyến" },
    unit: { title: "Số chuyến", content: "280/ngày" },
    res: { title: "Đơn vị phụ trách", content: "Hợp tác xã vận tải xe buýt Quyết Thắng, ĐT: (028)38.642.712" },
    startRoute: { title: "Lượt đi", content: "Bến xe buýt Quận 8 -> Bùi Minh Trực -> Cầu Nhị Thiên Đường -> Tùng Thiện Vương -> Chợ Xóm Củi -> Bưu điện Quận 5 -> Rạp Đại Quang -> Bệnh viện Chợ Rẫy -> Bệnh viện Hùng Vương -> CoopMart Lý Thường Kiệt -> Điện lực Phú Thọ -> Nhà thi đấu Phú Thọ -> Bệnh viện Trưng Vương -> Đại học Bách Khoa -> Bưu Điện Phú Thọ -> Ngã ba Thành Thái -> Siêu thị Nguyễn Kim -> CMC Tân Bình -> Cây xăng Đôi -> Chợ Tân Bình -> Bệnh viện chỉnh hình và Phục hồi chức năng -> Bệnh viện Thống Nhất -> Bệnh viện Quận Tân Bình -> Nhà hàng Đông Phương -> Công viên Hoàng Văn Thụ -> Bảo Tàng Miền Đông -> Siêu Thị Big C -> Khách Sạn Tân Sơn Nhất -> Công an Phú Nhuận -> Ngã tư Phú Nhuận -> Ngã tư Phan Xích Long -> Ngã Tư Thích Quảng Đức -> Trường Đại học Văn Hiến -> Bệnh Viện Phước An -> Công viên Văn hóa Phú Nhuận -> UBND Quận Bình Thạnh -> Lăng Ông Bà Chiểu -> Chợ Bà Chiểu -> Tòa Án nhân dân Quận Bình Thạnh -> Chùa Bồ Đề -> Nhà thờ Hàng Xanh -> Chợ Hàng Xanh -> Ngã Ba Hàng Xanh -> Đài Liệt sĩ -> Siêu thị Coop Mart -> Cổng ra - Bến xe Miền Đông 3 -> Ngã tư Bình Triệu -> Đường số 20 -> Chùa Ưu Đàm -> Cá sấu Hoa cà -> THCS Ngô Chí Quốc -> Chùa An Lạc -> Cầu Gò Dưa -> Đường 30 -> Chùa Quan Âm -> Ngã tư Tô Ngọc Vân - Phạm Văn Đồng -> Bồn nước -> Chợ Thủ Đức -> Ngã ba Chương Dương -> Cao đẳng xây dựng 2 -> Siêu thị Nguyễn Kim -> Trường ĐHSP Kỹ Thuật -> Công an Quận 9 -> Chợ chiều -> Trạm Hutech - Khu Công nghệ cao -> Khu Công nghệ cao quận 9 -> Cầu Vượt Trạm 2 -> Suối Tiên -> Nghĩa trang liệt sĩ TP.HCM -> Vành đại ĐHQG TPHCM -> KTX Khu A ĐH Quốc Gia TPHCM -> Đại học Quốc tế -> Đại học Quốc gia" },
    retRoute: { title: "Lượt về", content: "Đại học Quốc gia -> Đại học Quốc tế -> KTX Khu A ĐH Quốc Gia TPHCM -> ĐH Khoa học tự nhiên -> Khu DL Suối Tiên -> Câu vượt Trạm 2 -> Khu Công nghệ cao Q9 -> Công ty Cocacola -> Trường Đại học Sư phạm Kỹ thuật -> Siêu thị Nguyễn Kim -> Nhà thiếu nhi Thủ Đức -> Cao đẳng xây dựng 2 -> Ngã ba Chương Dương -> Nhà Sách Thủ Đức -> Đình thần Bình Quới Đông -> Nút giao Linh Đông -PVĐ -> Chùa An Lạc -> Cá sấu Hoa Cà -> Đường số 20 -> Ngã tư Bình Triệu -> Cổng vào-Bến xe Miền Đông -> Ngã Tư Nguyễn Xí -> Ngã Tư Chu Văn An -> Cầu Đinh Bộ Lĩnh -> Trạm xăng dầu -> Nhà thờ Hàng Xanh -> Chùa Bồ Đề -> Tòa Án nhân dân Quận Bình Thạnh -> Chợ Bà Chiểu -> UBND Quận Bình Thạnh -> Bệnh Viện Gia Định -> PCCC quận Bình Thạnh -> Bệnh viện Phước An -> Đại học Văn Hiến -> Ngã Tư Thích Quảng Đức -> Ngã tư Phan Xích Long -> Ngã tư Phú Nhuận -> Công An Phú Nhuận -> Siêu thị Big C -> Cổng trước SVĐ Quân Khu 7 -> Công viên Hoàng Văn Thụ -> Vòng xoay Lăng Cha Cả -> Vòng xoay Lăng Cha Cả -> Công an Quận Tân Bình -> Hội Chợ Triển lãm Tân Bình -> Trường Phạm Ngũ Lão -> Cây xăng Đôi -> Bệnh viện Thống Nhất -> Bệnh viện chỉnh hình và phục hồi chức năng -> Chợ Tân Bình -> Siêu thị Nguyễn Kim - CMC Tân Bình -> Trường Nguyễn Thái Bình -> Bưu Điện Phú Thọ -> Đại Học Bách Khoa(cổng trước) -> Bệnh viện Trưng Vương -> Điện Lực Phú Thọ (Nhà hàng phong lan) -> Chợ Nhật Tảo -> Bệnh viện Hùng Vương -> Hùng Vương Plaza -> Bệnh viện Chợ Rẫy -> Rạp Đại Quang -> Bưu điện Quận 5 -> Tùng Thiện Vương -> Chùa Pháp Quang -> Bùi Minh Trực -> Bến xe buýt Quận 8" },
  }
  var myObject1 = {

  }

  const [spot, setSpot] = React.useState(["Bến xe buýt Quận 8",
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
  const [startSpot, setStartSpot] = React.useState("Bến xe buýt Quận 8")
  const [endSpot, setEndSpot] = React.useState("Đại học quốc gia")

  const DT = (props: any) => {
    return (
      <View style={[styles.rowFlex, { justifyContent: 'flex-start', marginLeft: 15, marginVertical: 10, alignItems: 'center' }]}>
        <FontIcon name='minus' size={12} color={"black"} />
        <Text style={{ marginLeft: 5, fontSize: 16, color: "#4C586F" }}>{props.spot}</Text>
      </View>
    )
  }

  const [isActive, setIsActive] = React.useState('detail')

  function handleDetail() {
    setIsActive('detail')
  }
  function handleStopSpot() {
    setIsActive('stopspot')
  }
  function handleRating() {
    setIsActive('rating')
  }

  function reverseSpot() {
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
        style={{ width: "100%", height: "30%" }} />
      <View style={[styles.rowFlex, { width: '100%', height: '5%', marginVertical: 10 }]}>
        <TouchableHighlight onPress={handleStopSpot} style={[styles.button, isActive === 'stopspot' && {backgroundColor: '#4C586F'}]}>
          <Text style={{ color: isActive === 'stopspot' ? '#FFFFFF' : '#4C586F', fontWeight: 'bold' }}>TRẠM DỪNG</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleDetail} style={[styles.button, isActive === 'detail' && {backgroundColor: '#4C586F'}]}>
          <Text style={{ color: isActive === 'detail' ? '#FFFFFF' : '#4C586F', fontWeight: 'bold' }}>CHI TIẾT</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleRating} style={[styles.button, isActive === 'rating' && {backgroundColor: '#4C586F'}]}>
          <Text style={{ color: isActive === 'rating' ? '#FFFFFF' : '#4C586F', fontWeight: 'bold' }}>ĐÁNH GIÁ</Text>
        </TouchableHighlight>
      </View>
      { isActive === 'detail' &&
        <ScrollView style={{ width: "100%" }}>
        {Object.entries(myObject).map(([key, v]) => {
          return <T detail={v} key={key} />
        })}
      </ScrollView>}
      { isActive === 'rating' &&
        <ScrollView style={{ width: "100%" }}>
        <View>
        </View>
        {Object.entries(myObject1).map(([key, v]) => {
          return <T detail={v} key={key} />
        })}
      </ScrollView>}
      { isActive === 'stopspot' &&
        <View style={{flex: 1}}>
          <View style={[styles.rowFlex, { width: '100%', height: '10%', marginVertical: 0, justifyContent: 'space-between', paddingHorizontal: 15, backgroundColor: "#EBECED" }]}>
            <Text style={{ color: '#4C586F', fontSize: 16, width: '40%', fontWeight: 'bold' }}>{startSpot}</Text>
            <TouchableHighlight onPress={reverseSpot} style={{ borderRadius: 15, height: 25, width: 50, borderWidth: 1, borderColor: "#FFF", backgroundColor: '#FFFFFF', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
              underlayColor="#E8E8E8">
              <MaterialIcon name='swap-horizontal-bold' size={22} color={"#4C586F"} />
            </TouchableHighlight>
            <Text style={{ color: '#4C586F', fontSize: 16, width: '40%', fontWeight: 'bold' }}>{endSpot}</Text>
          </View>
          <ScrollView>
            {spot?.map((location, index) => {
              return (
                <DT spot={location} key={index} />
              )
            })
            }
          </ScrollView>
        </View>}
    </View>
  )
}
const T = (props: any) => {

  return (
    <View style={{ maxWidth: "100%", flexWrap: 'wrap', justifyContent: 'flex-start', marginHorizontal: 15, marginVertical: 3, alignItems: 'flex-start', flexDirection: 'row' }}>
      <Text style={{ marginRight: 5, fontSize: 15, color: "#4C586F", fontWeight: 'bold' }}>{props.detail.title}:</Text>
      <Text style={{ fontSize: 15, color: "#969EA3" }}>{props.detail.content}</Text>
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    width: "30%",
    height: "100%",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnFlex: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
export default RouteDetail