import { Link, router } from "expo-router";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  const auth = FIREBASE_AUTH;

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((dadosUsuario) => {
        if (dadosUsuario.user.email === "admin@adm.adm") {
          router.push("/(adm)"); // Redireciona para a página de CRUD do admin
        } else {
          router.push('/(users)'); // Redireciona para o mostruário de roupas
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>Email Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
      />
      <Text style={styles.textLabel}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPass}
        value={pass}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.btnText}>Logar</Text>
      </TouchableOpacity>
      <Text>Não tem uma conta? <Link href="/register">Crie uma nova aqui</Link></Text>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    color: "#7C7979FF",
    borderColor: "#ADA5A5FF",
    borderWidth: 2,
    borderRadius: 6,
    height: 45
  },
  textLabel:{
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 18,
    marginTop:35
  },
  textCreate:{
    fontWeight: "500",
    fontSize: 18,
    color: "#54E062FF",
  },
  button: {
    backgroundColor: "#50d15a",
    justifyContent: "center",
    height: 55,
    alignItems: "center",
    marginTop: 50
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600"
  },
  imageIcon: {
    width:28,
    height:28
  },
  boxIcon: {
    borderRadius: 6,
    borderColor: "#C2BABAFF",
    borderWidth: 2,
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center"
  },

  boxContentIcons: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center"
  },
  viewIcons: {
    paddingHorizontal: 50,
    paddingVertical: 25,
    flex:1
  },
  textLogin:{
    width:150,
    marginHorizontal: 150,
    fontWeight: "700",
    fontSize: 22,
    marginBottom: 45,
    marginTop: 45
  },
  login: {
    paddingHorizontal: 25,
    flex:2
  }, 
  RememberButton:{
    flexDirection: "row",
    marginVertical:15
  },
  container:{
    flex:1
  },
  textNewAccount:{
    marginLeft: 65,
    marginTop: 65,
    fontSize:18
  },
  line: {
    width: 400,
    height: 2,
    color: "#ADA5A5FF",
    marginTop: 65,
  },
  textLine: {
    color: "#ADA5A5FF",
  }
});

{
  /* <TextInput
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


  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.btnText}>Entrar</Text>
  </TouchableOpacity>
</View>
<View>

<Link href={"/register"}>Cadastrar novo Usuario</Link>
</View> */
}
