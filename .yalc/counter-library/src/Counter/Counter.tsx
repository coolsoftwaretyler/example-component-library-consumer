import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Count } from "./Count";
import { Button } from "./Button";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <View style={styles.container}>
      <Button variant="minus" onPress={handleDecrement} />
      <View style={styles.countContainer}>
        <Count count={count} />
      </View>
      <Button variant="plus" onPress={handleIncrement} />
    </View>
  );
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
