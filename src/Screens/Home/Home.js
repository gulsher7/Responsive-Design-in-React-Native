//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import dummyData from './dummyData';
import styles from './styles';



// create a component
const Home = () => {

    const renderItem = ({ item }) => {
        console.log("item_+++",item)
        return (
            <View style={styles.flatStyle}>
                <View style={styles.flexView}>
                    <View>
                        <Text style={{
                            fontSize: scale(12),
                            color: colors.blackOpacity80
                        }}>{!!item?.date? item.date.date: 'date not found'}</Text>
                        <Text style={{
                          fontSize: scale(12),
                            color: colors.black,
                            fontWeight: 'bold',
                            marginTop: moderateVerticalScale(8)
                        }}>{item?.name}</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image style={{
                                width: moderateScale(14),
                                height: moderateScale(14),
                                tintColor: colors.blackOpacity50
                            }} source={imagePath.Location} />
                            <Text style={{
                                 fontSize: scale(12),
                                color: colors.blackOpacity50,
                            }}> {item?.address}</Text>
                        </View>
                    </View>
                    <Image source={{
                        uri: 'https://cdn.dribbble.com/users/1162077/screenshots/7475318/media/8837a0ae1265548e27a2b2bb3ab1f366.png?compress=1&resize=400x300'
                    }}
                        style={{
                            width: moderateScale(64),
                            height: moderateScale(64),
                            borderRadius: moderateScale(32)
                        }}
                    />
                </View>
                <View style={{ ...styles.flexView, marginVertical: moderateVerticalScale(8) }}>
                    <Text style={{
                        fontSize: moderateScale(14),
                        color: colors.blackOpacity50,
                        textTransform: 'uppercase'

                    }}>Price</Text>
                    <Text style={{
                        fontSize: scale(14),
                        color: colors.black,
                        fontWeight: 'bold',
                    }}>{item?.price}</Text>
                </View>

                <View style={styles.flexView}>
                    <View style={{ flex: 1 }}>
                        <ButtonComp
                            btnText={'Reject'}
                            btnStyle={{
                                backgroundColor: colors.white,
                                borderWidth: 1,
                                borderColor: colors.themeColor,
                            }}
                            btnTextStyle={{ color: colors.themeColor }}

                        />
                    </View>
                    <View style={{ marginHorizontal: moderateScale(8) }} />
                    <View style={{ flex: 1 }}>
                        <ButtonComp
                            btnText={'Accept'}
                        />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1, backgroundColor: colors.white }}>
                <View style={styles.headerStyle}>
                    <Text />
                    <Text style={styles.headerText}>Nanny Line</Text>
                    <Image source={imagePath.notification} />
                </View>

                <View style={{
                    marginTop: moderateVerticalScale(14),
                    marginHorizontal: moderateScale(16),
                    flex:1
                }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dummyData}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => <View style={{ marginBottom: moderateVerticalScale(16) }} />}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};
export default Home;
