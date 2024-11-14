import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Count } from "./Count";
import { Button } from "./Button";
export const Counter = ({ startingCount = 0, }) => {
    const [count, setCount] = useState(startingCount);
    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };
    const handleDecrement = () => {
        setCount((prev) => prev - 1);
    };
    return (React.createElement(View, { style: styles.container },
        React.createElement(Button, { variant: "minus", onPress: handleDecrement }),
        React.createElement(View, { style: styles.countContainer },
            React.createElement(Count, { count: count })),
        React.createElement(Button, { variant: "plus", onPress: handleIncrement })));
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    countContainer: {
        marginHorizontal: 20,
    },
});
//# sourceMappingURL=Counter.js.map