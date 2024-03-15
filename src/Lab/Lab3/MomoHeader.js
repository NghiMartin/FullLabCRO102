import React, { useRef } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,View, TextInput, Animated } from "react-native";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
export default function MomoHeader() {
    const animatedValue = useRef(new Animated.Value(0)).current; // space scroll follow column

    const searchInputAnimation = {
        transform: [
            {
                scaleX: animatedValue.interpolate({
                    inputRange: [0,50],
                    outputRange: [1,0],
                    extrapolate: 'clamp',
                })
            },
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0,25],
                    outputRange: [0,-100],
                    extrapolate: 'clamp',
                })
            },
        ],  
            opacity: animatedValue.interpolate({
                inputRange: [0,25],
                outputRange: [1,0],
                extrapolate: 'clamp',
            }),      
    }
    const fetureNameAnimation = {
        transform: [
            {
                scaleX: animatedValue.interpolate({
                    inputRange: [0,50],
                    outputRange: [1,0],
                    extrapolate: 'clamp',
                })
            },
          
        ],  
            opacity: animatedValue.interpolate({
                inputRange: [0,30],
                outputRange: [1,0],
                extrapolate: 'clamp',
            }),      
    }
    const depositViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0,80],
                    outputRange: [0,40],
                    extrapolate: 'clamp',
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0,80],
                    outputRange: [0,-65],
                    extrapolate: 'clamp',
                })
            },
        ],   
    }
    const withdrawViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0,80],
                    outputRange: [0,-20],
                    extrapolate: 'clamp',
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0,80],
                    outputRange: [0,-65],
                    extrapolate: 'clamp',
                })
            },
        ],   
    }
    const qrViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0,80],
                    outputRange: [0,-55],
                    extrapolate: 'clamp',
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0,80],
                    outputRange: [0,-66],
                    extrapolate: 'clamp',
                })
            },
        ],   
    }
    const scanViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0,80],
                    outputRange: [0,-96],
                    extrapolate: 'clamp',
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0,80],
                    outputRange: [0,-65],
                    extrapolate: 'clamp',
                })
            },
        ],   
    }
    const fetureIconCircleAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 30],
            outputRange: [1,0],
            extrapolate: 'clamp',
        })
    }
    return (
        <View style= {styles.container}>

            <StatusBar barStyle="light-content" />

            <SafeAreaView>
            <View style={styles.upperHeaderPlaceholder} />
            </SafeAreaView>

            <View style = {styles.header} >
         <View style={styles.upperHeader}>
         <View style={styles.searchContainer}>
                    <Image
                    source={require('../../assets/images/momo/search.png')}
                    style={styles.searchIcon}
                    />
                    <AnimatedTextInput
                    placeholder="Tìm kiếm"
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    style={[styles.searchInput,searchInputAnimation]}
                    />
                </View>
                <Image
                source={require('../../assets/images/momo/bell.png')}
                style={styles.bellIcon}
                />
                <Image
                source={require('../../assets/images/momo/avatar.png')}
                style={styles.avatar}
                />
         </View>
         <View style={styles.lowerHeader} >
            <View style={styles.feture}> 
                <Animated.Image 
                source={require("../../assets/images/momo/deposit-circle.png")}
                style={[styles.fetureIconCircle,fetureIconCircleAnimation]}
                />
                   <Animated.Image 
                source={require("../../assets/images/momo/deposit.png")}
                style={[styles.fetureIcon,depositViewAnimation]}
                />
                 <Animated.Text style={[styles.fetureName,fetureNameAnimation]}>NẠP TIỀN</Animated.Text>
            </View>
            <View style={styles.feture}> 
                <Animated.Image 
                source={require("../../assets/images/momo/withdraw-circle.png")}
                style={[styles.fetureIconCircle,fetureIconCircleAnimation]}
                />
                <Animated.Image 
                source={require("../../assets/images/momo/withdraw.png")}
                style={[styles.fetureIcon,withdrawViewAnimation]}
                />
                 <Animated.Text style={[styles.fetureName,fetureNameAnimation]}>RÚT TIỀN</Animated.Text>
            </View>
            <View style={styles.feture}> 
                <Animated.Image 
                source={require("../../assets/images/momo/qr-circle.png")}
                style={[styles.fetureIconCircle,fetureIconCircleAnimation]}
                />
                <Animated.Image 
                source={require("../../assets/images/momo/qr.png")}
                style={[styles.fetureIcon,qrViewAnimation]}
                />
                 <Animated.Text style={[styles.fetureName,fetureNameAnimation]}>MÃ QR</Animated.Text>
            </View>
            <View style={styles.feture}> 
                <Animated.Image 
                source={require("../../assets/images/momo/scan-circle.png")}
                style={[styles.fetureIconCircle,fetureIconCircleAnimation]}
                />
                 <Animated.Image 
                source={require("../../assets/images/momo/scan.png")}
                style={[styles.fetureIcon,scanViewAnimation]}
                />
                 <Animated.Text style={[styles.fetureName,fetureNameAnimation]}>QUÉT MÃ</Animated.Text>
            </View>
         </View>
            </View>
            <ScrollView
            onScroll={e => {
                const offsetY = e.nativeEvent.contentOffset.y;
                animatedValue.setValue(offsetY);
            }}
            scrollEventThrottle={16} //sau 16ms goi lai onscroll
            >
                <View style ={styles.paddingForHeader} />
                <View style={styles.scrollViewContent} />
            </ScrollView>
        </View>
        )
 
}
const UPPER_HEADER_HEIGHT = 60;
const LOWER_HEADER_HEIGHT = 96;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperHeaderPlaceholder: {
        height: UPPER_HEADER_HEIGHT,
    },
    header: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#AF0C6E',
    },
    upperHeader: {
        flexDirection: 'row',
        alignItems:'center' ,
        paddingHorizontal:16,
        paddingVertical: 16
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginLeft:8
    },
    searchInput: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 32
    },
    bellIcon: {
        width: 16,
        height: 16,
        marginHorizontal: 32
    },
    avatar: {
        width: 28,
        height: 28
    },
    lowerHeader: {
        height: LOWER_HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    feture: {
        alignItems: 'center'
    },
    fetureIconCircle: {
        width: 32,
        height: 32,
        zIndex :1
    },
    fetureIcon: {
        width: 16,
        height: 16,
        position: 'absolute',
        top: 8
    },
    fetureName: {
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        color: 'white',
        marginTop: 12
    },
    paddingForHeader: {
        height: LOWER_HEADER_HEIGHT,
    },
    scrollViewContent: {
        height: 1000,
        backgroundColor: 'white'
    }
})