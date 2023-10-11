import React, {useState} from "react";
import {View, Text, Image} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";

const SignUp = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.agreeText}>I agree with <Text style={styles.boldText}>Terms</Text> & <Text style={styles.boldText}>Privacy</Text></Text>
            </View>
            </View>
    )
}

export default SignUp;