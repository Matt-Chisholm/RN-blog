import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState, useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function editScreen({ navigation }) {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
  );
}

const styles = StyleSheet.create({});
