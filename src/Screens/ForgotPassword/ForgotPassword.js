//import liraries
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import navgiationStrings from '../../constants/navgiationStrings';
import styles from './styles';

// create a component
const ForgotPassword = ({ navigation }) => {

const [keybaordHeight, setKeyboardHeight] = useState(0)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
            console.log("event trigger on show keyboard", event)
            setKeyboardHeight(event.endCoordinates.height - 20)
        })

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (event) => {
            console.log("event trigger on hide keyboard", event)
            setKeyboardHeight(0)
        });
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        }
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp
                />

                <View style={{ flex: 1 }}>

                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Lock ICON</Text>
                    </View>

                    <View style={{ flex: 0.4 }}>
                        <Text style={styles.headingText}>Forgot Password</Text>
                        <Text style={styles.descText}>Enter the email address associated with your account.</Text>
                    </View>


                    <View style={{ flex: 0.4, marginBottom: keybaordHeight }}>
                        <TextInputWithLabel
                            label="Email"
                            placeHolder='Enter your email'
                            inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                            keyboardType='email-address'
                        />
                        <ButtonComp
                            btnText={'Send'}
                            onPress={() => navigation.navigate(navgiationStrings.SET_PASSWORD)}
                            btnStyle={{}}
                        />
                    </View>

                </View>
            </View>

        </SafeAreaView>

    );
};

export default ForgotPassword;
