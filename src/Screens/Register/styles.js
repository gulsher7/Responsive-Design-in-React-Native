import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24),

    },
    headingText: {
        fontSize: scale(24),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imgStyle: {
        width: moderateScale(160),
        height: moderateScale(160)
    },
    textStyle: {
        fontSize: scale(20),
        fontWeight: '400',
        marginTop: moderateVerticalScale(16)
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateVerticalScale(24)
    }

});

export default styles