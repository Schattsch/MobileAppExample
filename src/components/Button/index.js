import React from "react";
import {  Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({title, onPress}) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;