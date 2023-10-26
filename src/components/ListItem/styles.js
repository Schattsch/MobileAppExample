import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 16,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4,
    },

    title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: colors.grey,
        fontSize: 12,
        marginTop: 6
    },
    arrow: {
        height: 16,
        width: 8,
    }
})