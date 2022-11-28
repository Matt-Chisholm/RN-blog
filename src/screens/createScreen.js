import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState, useContext } from "react";
import { Context } from "../context/BlogContext";

export default function createScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new blog : </Text>
      <Text>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title='Add Blog Post'
        onPress={() => addBlogPost(title, content)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    margin: 10,
    padding: 5,
  },
  container: {
    flex: 1,
    display: "flex",
    alignitems: "center",
    justifyContent: "center",
    marginBottom: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
