import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

export const styles = StyleSheet.create( {
    container: {
        display: "flex",
        flexDirection: "column",
        padding: 24,
    },

    agreeRow: {
        flexDirection: 'row',
        alignItems: "center",

    },

    agreeText: {
        color: colors.blue,
        marginHorizontal: 14,
    },

    boldText: {
        fontWeight: "bold",
    },

    button: {
        marginVertical: 20,
    },
    footerText: {
        color: colors.blue,
        marginBottom: 56,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
})