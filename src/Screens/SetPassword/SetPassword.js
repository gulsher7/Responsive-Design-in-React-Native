//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import navgiationStrings from '../../constants/navgiationStrings';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// create a component
const SetPassword = ({ navigation }) => {
    const [isTrue, setTrue] = useState(false)
    const [isVisible, setVisible] = useState(true)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp
                />

                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.headingText}>Set Password</Text>
                    <Text style={styles.descText}>Set a password for your new account  <Text style={{ fontWeight: 'bold' }}>(+33) 34 56 78 901</Text></Text>
                    <TextInputWithLabel
                        label="Password"
                        placeHolder='Enter your password'
                        secureTextEntry={isVisible}
                        rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                        onPressRight={() => setVisible(!isVisible)}
                        inputStyle={{ marginVertical: moderateVerticalScale(76) }}
                    />
            
                    <ButtonComp
                        onPress={() => navigation.navigate(navgiationStrings.SET_PASSWORD)}
                        btnStyle={styles.btnStyle}
                        img={imagePath.icForward}
                    />
                </KeyboardAwareScrollView>
            </View>

        </SafeAreaView>

    );
};

export default SetPassword;
