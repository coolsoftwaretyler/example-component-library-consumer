import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export const Button = ({ onPress, variant }) => {
    const buttonStyle = {
        backgroundColor: variant === "plus" ? "#2ecc71" : "#e74c3c",
    };
    return (React.createElement(TouchableOpacity, { style: [styles.button, buttonStyle], onPress: onPress },
        React.createElement(Text, { style: styles.buttonText }, variant === "plus" ? "+" : "-")));
};
const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
});
//# sourceMappingURL=Button.js.map