import { Button,View, Text } from 'react-native'
import React from 'react'

const FindRoute = ({navigation}: {navigation: any}) => {
  function goToListRoutePage(){
    navigation.navigate("ListRoute")
}
  return (
    <View>
      <Text>FindRoute</Text>
      <Button
        title="Search"
        onPress={goToListRoutePage}
      />
    </View>
  )
}

export default FindRoute