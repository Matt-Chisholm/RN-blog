import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState, useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function createScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
}

const styles = StyleSheet.create({});
