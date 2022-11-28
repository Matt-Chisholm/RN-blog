import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function createScreen() {
  return (
    <View>
      <Text>Create new blog : </Text>
      <Text>Enter Title:</Text>
      <TextInput style={styles.input} />
      <Text>Enter Content:</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
});
