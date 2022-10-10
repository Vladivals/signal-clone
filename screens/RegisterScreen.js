import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button, Image, Text } from "react-native-elements";
import { Input } from "react-native-elements/dist/input/Input";
import { auth } from "../firebase";
import userImg from "../Utils/Images/user.png";


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  useLayoutEffect (() => {
      navigation.setOptions({
          headerBackTitle: "Back to Login",
      });
  }, [navigation]);

  const register = () => {
    auth 
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
              displayName: name,
              photoURL:
                imageURL || userImg
            })
        })
        .catch((error) => alert(error.message))
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          autofocus
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autofocus
          type="text"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile PictureURL (optional)"
          autofocus
          type="text"
          value={imageURL}
          onChangeText={(text) => setImageURL(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
            <View style={{ height: 100 }} />

    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
      width: 200,
      marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
});
