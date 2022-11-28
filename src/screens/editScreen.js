import { View, Text, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { Context } from "../context/BlogContext";

export default function editScreen({ navigation }) {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>editScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
