import React from "react";
type ButtonVariant = "plus" | "minus";
interface ButtonProps {
    onPress: () => void;
    variant: ButtonVariant;
}
export declare const Button: React.FC<ButtonProps>;
export {};
