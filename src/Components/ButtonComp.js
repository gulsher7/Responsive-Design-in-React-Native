//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../styles/colors';


const ButtonComp = ({
    btnText,
    btnStyle = {},
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{ ...styles.btnStyle, ...btnStyle }}
        >
            <Text style={styles.btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(48),
        backgroundColor: colors.themeColor,
        borderRadius: moderateScale(4),
        alignItems:'center',
        justifyContent:'center'
    },
    btnTextStyle: {
        fontSize: scale(12),
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});

//make this component available to the app
export default ButtonComp;
