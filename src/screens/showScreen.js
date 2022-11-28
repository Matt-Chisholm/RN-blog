import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function showScreen({ navigation }) {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
