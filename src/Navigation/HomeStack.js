
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import navgiationStrings from '../constants/navgiationStrings';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navgiationStrings.TAB_ROUTES} component={TabRoutes} />
        </Stack.Navigator>

    )
}