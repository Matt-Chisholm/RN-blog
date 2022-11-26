import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

export default function indexScreen() {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>indexScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
