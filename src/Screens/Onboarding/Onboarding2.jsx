import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import { default as IoniconsIcon } from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from "expo-linear-gradient";

export default function Onboarding2({ }) {
    return (
        <View style={{height: '100%', justifyContent: 'center'}}>
            <View style={{ padding: 20, backgroundColor: 'transparent' }}>
                <Text style={{ fontSize: 35, fontWeight: 900, color: '#cbc5c1', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 3, height: 3 }, textShadowRadius: 10 }}>Pave the way</Text>
                <Text style={{ fontSize: 35, fontWeight: 900, color: '#cbc5c1', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 3, height: 3 }, textShadowRadius: 10 }}>Save the day</Text>
            </View>
            <Image source={require('../../../assets/onboarding2.png')} style={{ width: '100%', height: '40%'}} />
            <View >
                <Text style={{alignSelf: 'flex-end', width: '50%', textAlign: 'right', margin: 20, fontSize: 16, fontWeight: 300 }}>
                    Dễ dàng lên kế hoạch cho chuyến đi của bạn và nhiều hơn thế nữa
                </Text>
                <TouchableHighlight style={{ alignSelf: 'flex-end', borderBottomStartRadius: 30, borderTopStartRadius: 30, width: '40%', marginRight: 20}}>
                    <Text style={{ fontSize: 20, fontWeight: 800, textAlign: 'right' }}>Tiếp tục
                        <IoniconsIcon name='chevron-forward-outline' size={20} />
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}