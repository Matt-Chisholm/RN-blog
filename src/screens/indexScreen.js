import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function indexScreen() {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
