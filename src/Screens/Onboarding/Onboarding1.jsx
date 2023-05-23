import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import { default as IoniconsIcon } from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from "expo-linear-gradient";

export default function Onboarding1({ }) {
    return (
        <View>
            <LinearGradient
                colors={['#a2aab0', '#ffffff', '#a2aab0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ height: '100%', justifyContent: 'center' }}>
                <View style={{ padding: 20, backgroundColor: 'transparent' }}>
                    <Text style={{ fontSize: 30, fontWeight: 900 }}>lodo đây</Text>
                    <Text style={{ fontSize: 35, fontWeight: 900, color: '#ffffff', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -3, height: 3 }, textShadowRadius: 20 }}>ĐI KHÔNG</Text>
                    <Text style={{ fontSize: 35, fontWeight: 900, color: '#ffffff', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -3, height: 3 }, textShadowRadius: 20 }}>LOAY HOAY</Text>
                </View>
                <Image source={require('../../../assets/onboarding1.png')} style={{ width: '100%', height: '40%' }} />
                <View >
                    <TouchableHighlight style={{ backgroundColor: '#3e3e3b', alignSelf: 'flex-end', borderBottomStartRadius: 30, borderTopStartRadius: 30, width: '40%', marginTop: 20 }}>
                        <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 800, padding: 10, textAlign: 'center' }}>ĐI NÀO
                            <IoniconsIcon name='chevron-forward-outline' size={20} color={'#ffffff'} />
                        </Text>
                    </TouchableHighlight>
                </View>
            </LinearGradient>
        </View>
    )
}