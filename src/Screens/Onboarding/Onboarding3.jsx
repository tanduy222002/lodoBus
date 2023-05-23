import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import { default as IoniconsIcon } from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from "expo-linear-gradient";

export default function Onboarding3({ }) {
    return (
        <View style={{ height: '100%' }}>
            <Image source={require('../../../assets/onboarding3.png')} style={{ width: '100%', height: '70%' }} />
            <View style={{ padding: 20, backgroundColor: '#a2aab0', height: '30%', alignItems: 'center', textAlign: 'center', justifyContent: 'space-evenly' }}>
                <View style={{ width: '60%' }}>
                    <Text style={{ fontSize: 24, fontWeight: 800, textAlign: 'center' }}>lodoBUS</Text>
                    <Text style={{ fontSize: 14, fontWeight: 300, textAlign: 'center' }}>lodo giúp chuyến đi của bạn chở nên dễ dàng hơn.</Text>
                </View>
                <TouchableHighlight style={{ borderRadius: 30, width: '80%', backgroundColor: '#ffffff', padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 800, textAlign: 'center' }}>BẮT ĐẦU</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}