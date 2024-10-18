import { Link, router } from "expo-router";
import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [count, setCount] = useState(0);

    const onPress = () => {
        router.push("/(tabs)")
    }


  console.log(email, pass);
  console.log(typeof email, typeof pass);

  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu email"
          inputMode="email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={pass}
          placeholder="Digite sua senha"
          inputMode="numeric"
          secureTextEntry={true}
        />

        <View>
            {/* <View >
                <Text>Count: {count}</Text>
            </View> */}

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View>

        <Link href={"/register"}>Cadastrar novo Usuario</Link>
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#252525",
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#252525",
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "aaa"
  }
});
