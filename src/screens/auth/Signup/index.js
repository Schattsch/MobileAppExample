import React, {useContext, useState} from "react";
import {View, Text, Image, Alert} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../../../App";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const SignUp = ({navigation}) => {
    const [checked, setChecked] = useState(false)
    const [values, setValues] = useState({})
    const {user, setUser} = useContext(UserContext)

const onBack = () => {
    navigation.goBack()
}

const onSignin = () => {
    navigation.navigate('Signin');
}

const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
}

const onSubmit = () => {
    if (!values?.fullName || !values?.email || !values?.password) {
        Alert.alert('All fields are required!');
        return
    }
    if (!checked) {
        Alert.alert("Please agree with the terms");
        return
    }
    axios.post("http://192.168.18.4/api/user/register", values)
    .then(response => {
        console.log('signup => ', response);
        const {email, password} = values
            axios.post('http://192.168.18.4/api/user/login', values)
            .then(async (response) => {
                console.log('login => ', response)
                const accessToken = response?.data?.accessToken
                console.log(accessToken)
                setUser({accessToken})
                if (response?.data?.token) {
                    await AsyncStorage.setItem('auth_token', `${response?.data?.token}`)
                }
            })
            .catch(error => {
                console.log('login error => ', error.response.data)
            })
    })
    .catch(error => {
        console.error('signup error => ', error)
    })
}


    return (
        <SafeAreaView>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up"/>
            <Input value={values.fullName} onChangeText={(v) => onChange('fullName', v)} label="Name" placeholder="John Doe"/>
            <Input value={values.email} onChangeText={(v) => onChange('email', v)} label="Email" placeholder="example@gmail.com"/>
            <Input value={values.password} onChangeText={(v) => onChange('password', v)} isPassword label="Password" placeholder="******"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.agreeText}>I agree with <Text style={styles.boldText}>Terms</Text> & <Text style={styles.boldText}>Privacy</Text></Text>
            </View>
            <Button onPress={onSubmit} style={styles.button} title="Sign In" />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account? <Text onPress={onSignin} style={styles.footerLink}>Sign In</Text>
            </Text>
            </View>
            </SafeAreaView>
    )
}

export default SignUp;