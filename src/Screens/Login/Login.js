//import liraries
import React, { useState } from 'react';
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationStings from '../../constants/navgiationStrings'


const Login = ({ navigation }) => {
    const [isVisible, setVisible] = useState(true)
    return (
        <View style={styles.container}>

            <View>
            <ImageBackground
                source={{ uri: 'https://cdn.mos.cms.futurecdn.net/3qpVahdh69fiUrJdswtfUn.jpg' }}
                style={styles.imgStyle}
            >
                <Text style={styles.loginTextStyle}>LOGIN</Text>
            </ImageBackground>

            <View style={styles.mainStyle}>
                <TextInputWithLabel
                    label="Email Address"
                    placeHolder='Enter your email'
                    inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                    keyboardType='email-address'
                />
                <TextInputWithLabel
                    label="Password"
                    placeHolder='Enter your password'
                    secureTextEntry={isVisible}
                    rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                    onPressRight={() => setVisible(!isVisible)}
                />

                <TouchableOpacity 
                activeOpacity={0.7} style={styles.forgotView}
                onPress={()=>navigation.navigate(navigationStings.FORGOT_PASSWORD)}
                >
                    <Text style={styles.forgotText} >Forgot Password ?</Text>
                </TouchableOpacity>

                <ButtonComp
                    btnText={'Login'}
                />
            </View>
            </View>
            
            <View style={styles.bottomView}>
                <Text>Not a member</Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStings.CHOOSE_ACCOUNT)}>
                    <Text>Join Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


export default Login;
