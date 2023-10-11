import React from "react";
import {
    Text,
    View,
    Image
} from "react-native"
import {styles} from "./styles";

const Splash = () => {
    return (
        <View>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>
            <Text>You'll Find All you need Here!</Text>
        </View>
    )
}
export default Splash