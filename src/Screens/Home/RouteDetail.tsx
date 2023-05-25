import { ScrollView, TouchableHighlight, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { default as FontIcon } from 'react-native-vector-icons/FontAwesome'
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialCommunityIcons'

const RouteDetail = ({ detailRoute, navigation }) => {
  // const { detailRoutes } = route.params;
  var myObject = {
    name: { title: "Tên chuyến", content: detailRoute.RouteNo },
    start: { title: "Bến đầu", content: detailRoute.InBoundName },
    end: { title: "Bến cuối", content: detailRoute.OutBoundName },
    distance: { title: "Độ dài chuyến", content: detailRoute.Distance/1000 },
    time: { title: "Thời gian di chuyển", content: detailRoute.TimeOfTrip },
    time_between: { title: "Giãn cách chuyến", content: detailRoute.Headway },
    unit: { title: "Số chuyến", content: detailRoute.TotalTrip },
    res: { title: "Đơn vị phụ trách", content: detailRoute.Orgs },
    startRoute: { title: "Lượt đi", content: detailRoute.InBoundDescription },
    retRoute: { title: "Lượt về", content: detailRoute.OutBoundDescription },
  }
  var myObject1 = {

  }

  const [spot, setSpot] = React.useState([])
  const [startSpot, setStartSpot] = React.useState(detailRoute.InBoundName)
  const [endSpot, setEndSpot] = React.useState(detailRoute.OutBoundName)

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