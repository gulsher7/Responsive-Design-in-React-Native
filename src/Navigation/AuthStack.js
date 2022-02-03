
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navgiationStrings from '../constants/navgiationStrings';
import {
    Login,
    Register,
    ChooseAccount,
    ForgotPassword,
    SetPassword
} from '../Screens';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navgiationStrings.LOGIN} component={Login} />
            <Stack.Screen name={navgiationStrings.REGISTER} component={Register} />
            <Stack.Screen name={navgiationStrings.CHOOSE_ACCOUNT} component={ChooseAccount} />
            <Stack.Screen name={navgiationStrings.FORGOT_PASSWORD} component={ForgotPassword} />
            <Stack.Screen name={navgiationStrings.SET_PASSWORD} component={SetPassword} />
        </Stack.Navigator>

    )
}