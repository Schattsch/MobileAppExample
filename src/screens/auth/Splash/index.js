import React from "react";
import {
    Text,
    View,
    Image
} from "react-native"
import Button from "../../../components/Button";
import Pressable from "../../../components/Pressable";
import {styles} from "./styles";

const handleSignIn = () => {
    console.log("Signed in.");
}


const Splash = () => {
    return (
        <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>

        <View style={styles.titleContainer}>
            <Text style={styles.title}>You’ll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
        </View>

            <Button title="Sign Up" />
            <Pressable style={styles.footerText} title="Sign In" onPress={handleSignIn}></Pressable>
        </View>
    )
}
export default Splash