import React, { useContext } from "react";
import {View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "../../../../App";

const Profile = ({ navigation }) => {
    const num = 10;
    const {user, setUser} = useContext(UserContext);

    const onLogout = async () => {
        await AsyncStorage.removeItem("accessToken");
        setUser(null);
    }

    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }

    const onNewListingPress = () => {
        navigation.navigate('CreateListing')
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                <Header title="Profile" showLogout onLogout={onLogout}></Header>
                <Text style={styles.name}>User name</Text>
                <Text style={styles.email}>User email</Text>
                <ListItem title="My Listings" subtitle={`Already have ${num} listings`}/>
                <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress}/>
                </View>
                <Button onPress={onNewListingPress} style={styles.button} title="Add New Listing" />
            </View>
        </SafeAreaView>
    )
}

export default Profile;