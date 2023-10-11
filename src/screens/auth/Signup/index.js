import React from "react";
import {View, Text, Image} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import Input from "../../../components/Input";

const SignUp = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/>
        </View>
    )
}

export default SignUp;