import { Button, View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { default as IoniconsIcon } from 'react-native-vector-icons/Ionicons'

const ListRoute = ({navigation}: {navigation: any}) => {
  function goToDetailPage(){
    navigation.navigate("StopSpot")
  }
  return (
    <ScrollView style={{ paddingLeft: 20, paddingRight: 20, marginTop: 10 }}>
      <TouchableHighlight style={styles.container} onPress={goToDetailPage} underlayColor={'#ffffff'}>
        <View>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.busNum]}>
                08
              </Text>
              <IoniconsIcon name='analytics-outline' style={{ paddingLeft: 10, paddingRight: 10 }} />
              <Text style={[styles.busNum, { backgroundColor: '#297516' }]}>
                08
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <IoniconsIcon name='walk' color={'#000000'} style={{ paddingRight: 5 }} />
              <Text style={{ color: '#4C586F', fontSize: 12 }}>
                468m
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[styles.distance, { paddingRight: 15 }]}>Khoảng cách</Text>
            <Text style={[styles.distance, { paddingRight: 0 }]}>Thời gian: </Text>
            <Text style={[styles.distance, { color: '#4C586F' }]}>80 phút</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={[styles.distance, { color: '#4C586F', fontSize: 25 }]}>26,5
                <Text style={[styles.distance, { color: '#4C586F' }]}>km</Text>
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <IoniconsIcon name='bus' color={'#000000'} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#4C586F' }]}>
                  5, 12, 18 phút
                </Text>
              </View>
            </View>
            <TouchableHighlight underlayColor={'#ffffff'}>
              <View style={[styles.busNum, { backgroundColor: '#4C586F', padding: 10, flexDirection: 'row', alignItems: 'center' }]}>
                <IoniconsIcon name='cart-outline' color={'#ffffff'} size={12} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#ffffff', paddingRight: 0 }]}>
                  7000
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={styles.busStop}>Lên xe tại: KTX Khu A - DH Quốc gia TP HCM</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.container} onPress={goToDetailPage} underlayColor={'#ffffff'}>
        <View>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.busNum]}>
                08
              </Text>
              <IoniconsIcon name='analytics-outline' style={{ paddingLeft: 10, paddingRight: 10 }} />
              <Text style={[styles.busNum, { backgroundColor: '#297516' }]}>
                08
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <IoniconsIcon name='walk' color={'#000000'} style={{ paddingRight: 5 }} />
              <Text style={{ color: '#4C586F', fontSize: 12 }}>
                468m
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[styles.distance, { paddingRight: 15 }]}>Khoảng cách</Text>
            <Text style={[styles.distance, { paddingRight: 0 }]}>Thời gian: </Text>
            <Text style={[styles.distance, { color: '#4C586F' }]}>80 phút</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={[styles.distance, { color: '#4C586F', fontSize: 25 }]}>26,5
                <Text style={[styles.distance, { color: '#4C586F' }]}>km</Text>
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <IoniconsIcon name='bus' color={'#000000'} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#4C586F' }]}>
                  5, 12, 18 phút
                </Text>
              </View>
            </View>
            <TouchableHighlight underlayColor={'#ffffff'}>
              <View style={[styles.busNum, { backgroundColor: '#4C586F', padding: 10, flexDirection: 'row', alignItems: 'center' }]}>
                <IoniconsIcon name='cart-outline' color={'#ffffff'} size={12} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#ffffff', paddingRight: 0 }]}>
                  7000
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={styles.busStop}>Lên xe tại: KTX Khu A - DH Quốc gia TP HCM</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.container} onPress={goToDetailPage} underlayColor={'#ffffff'}>
        <View>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.busNum]}>
                08
              </Text>
              <IoniconsIcon name='analytics-outline' style={{ paddingLeft: 10, paddingRight: 10 }} />
              <Text style={[styles.busNum, { backgroundColor: '#297516' }]}>
                08
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <IoniconsIcon name='walk' color={'#000000'} style={{ paddingRight: 5 }} />
              <Text style={{ color: '#4C586F', fontSize: 12 }}>
                468m
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[styles.distance, { paddingRight: 15 }]}>Khoảng cách</Text>
            <Text style={[styles.distance, { paddingRight: 0 }]}>Thời gian: </Text>
            <Text style={[styles.distance, { color: '#4C586F' }]}>80 phút</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={[styles.distance, { color: '#4C586F', fontSize: 25 }]}>26,5
                <Text style={[styles.distance, { color: '#4C586F' }]}>km</Text>
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <IoniconsIcon name='bus' color={'#000000'} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#4C586F' }]}>
                  5, 12, 18 phút
                </Text>
              </View>
            </View>
            <TouchableHighlight underlayColor={'#ffffff'}>
              <View style={[styles.busNum, { backgroundColor: '#4C586F', padding: 10, flexDirection: 'row', alignItems: 'center' }]}>
                <IoniconsIcon name='cart-outline' color={'#ffffff'} size={12} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#ffffff', paddingRight: 0 }]}>
                  7000
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={styles.busStop}>Lên xe tại: KTX Khu A - DH Quốc gia TP HCM</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.container} onPress={goToDetailPage} underlayColor={'#ffffff'}>
        <View>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.busNum]}>
                08
              </Text>
              <IoniconsIcon name='analytics-outline' style={{ paddingLeft: 10, paddingRight: 10 }} />
              <Text style={[styles.busNum, { backgroundColor: '#297516' }]}>
                08
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <IoniconsIcon name='walk' color={'#000000'} style={{ paddingRight: 5 }} />
              <Text style={{ color: '#4C586F', fontSize: 12 }}>
                468m
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[styles.distance, { paddingRight: 15 }]}>Khoảng cách</Text>
            <Text style={[styles.distance, { paddingRight: 0 }]}>Thời gian: </Text>
            <Text style={[styles.distance, { color: '#4C586F' }]}>80 phút</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={[styles.distance, { color: '#4C586F', fontSize: 25 }]}>26,5
                <Text style={[styles.distance, { color: '#4C586F' }]}>km</Text>
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <IoniconsIcon name='bus' color={'#000000'} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#4C586F' }]}>
                  5, 12, 18 phút
                </Text>
              </View>
            </View>
            <TouchableHighlight underlayColor={'#ffffff'}>
              <View style={[styles.busNum, { backgroundColor: '#4C586F', padding: 10, flexDirection: 'row', alignItems: 'center' }]}>
                <IoniconsIcon name='cart-outline' color={'#ffffff'} size={12} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#ffffff', paddingRight: 0 }]}>
                  7000
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={styles.busStop}>Lên xe tại: KTX Khu A - DH Quốc gia TP HCM</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.container} onPress={goToDetailPage} underlayColor={'#ffffff'}>
        <View>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.busNum]}>
                08
              </Text>
              <IoniconsIcon name='analytics-outline' style={{ paddingLeft: 10, paddingRight: 10 }} />
              <Text style={[styles.busNum, { backgroundColor: '#297516' }]}>
                08
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <IoniconsIcon name='walk' color={'#000000'} style={{ paddingRight: 5 }} />
              <Text style={{ color: '#4C586F', fontSize: 12 }}>
                468m
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[styles.distance, { paddingRight: 15 }]}>Khoảng cách</Text>
            <Text style={[styles.distance, { paddingRight: 0 }]}>Thời gian: </Text>
            <Text style={[styles.distance, { color: '#4C586F' }]}>80 phút</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={[styles.distance, { color: '#4C586F', fontSize: 25 }]}>26,5
                <Text style={[styles.distance, { color: '#4C586F' }]}>km</Text>
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <IoniconsIcon name='bus' color={'#000000'} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#4C586F' }]}>
                  5, 12, 18 phút
                </Text>
              </View>
            </View>
            <TouchableHighlight underlayColor={'#ffffff'}>
              <View style={[styles.busNum, { backgroundColor: '#4C586F', padding: 10, flexDirection: 'row', alignItems: 'center' }]}>
                <IoniconsIcon name='cart-outline' color={'#ffffff'} size={12} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#ffffff', paddingRight: 0 }]}>
                  7000
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={styles.busStop}>Lên xe tại: KTX Khu A - DH Quốc gia TP HCM</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.container} onPress={goToDetailPage} underlayColor={'#ffffff'}>
        <View>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.busNum]}>
                08
              </Text>
              <IoniconsIcon name='analytics-outline' style={{ paddingLeft: 10, paddingRight: 10 }} />
              <Text style={[styles.busNum, { backgroundColor: '#297516' }]}>
                08
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <IoniconsIcon name='walk' color={'#000000'} style={{ paddingRight: 5 }} />
              <Text style={{ color: '#4C586F', fontSize: 12 }}>
                468m
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={[styles.distance, { paddingRight: 15 }]}>Khoảng cách</Text>
            <Text style={[styles.distance, { paddingRight: 0 }]}>Thời gian: </Text>
            <Text style={[styles.distance, { color: '#4C586F' }]}>80 phút</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={[styles.distance, { color: '#4C586F', fontSize: 25 }]}>26,5
                <Text style={[styles.distance, { color: '#4C586F' }]}>km</Text>
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <IoniconsIcon name='bus' color={'#000000'} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#4C586F' }]}>
                  5, 12, 18 phút
                </Text>
              </View>
            </View>
            <TouchableHighlight underlayColor={'#ffffff'}>
              <View style={[styles.busNum, { backgroundColor: '#4C586F', padding: 10, flexDirection: 'row', alignItems: 'center' }]}>
                <IoniconsIcon name='cart-outline' color={'#ffffff'} size={12} style={{ paddingRight: 5 }} />
                <Text style={[styles.distance, { color: '#ffffff', paddingRight: 0 }]}>
                  7000
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={styles.busStop}>Lên xe tại: KTX Khu A - DH Quốc gia TP HCM</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#A2AAB0',
    backgroundColor: '#EBECED',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10
  },

  busNum: {
    color: '#ffffff',
    fontSize: 12,
    backgroundColor: '#192579',
    borderRadius: 7,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: '600'
  },

  distance: {
    color: '#A2AAB0',
    fontSize: 12,
    fontWeight: '700',
    paddingRight: 15
  },

  busStop: {
    color: '#454242',
    fontSize: 10,
    fontWeight: '300',
  }

})

export default ListRoute
