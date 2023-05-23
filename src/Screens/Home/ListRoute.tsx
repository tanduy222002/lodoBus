import { Button,View, Text } from 'react-native'
import React from 'react'

const ListRoute = ({navigation}: {navigation: any}) => {
  function goToDetailPage(){
    navigation.navigate("RouteDetail")
  }
  return (
    <View>
      <Text>ListRoute</Text>
      <Button title='Detil' onPress={goToDetailPage}></Button>
    </View>
  )
}

export default ListRoute