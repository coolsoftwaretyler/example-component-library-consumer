import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

type ButtonVariant = "plus" | "minus";

interface ButtonProps {
  onPress: () => void;
  variant: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ onPress, variant }) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: variant === "plus" ? "#2ecc71" : "#e74c3c",
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{variant === "plus" ? "+" : "-"}</Text>
    </TouchableOpacity>
  );
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
