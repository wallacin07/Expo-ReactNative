import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import {Image} from "expo-image";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseConfig"
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const auth = FIREBASE_AUTH;

  useEffect(() =>{
      console.log(auth.currentUser)
  }, [auth.currentUser]);
  useEffect(() => {
      console.log(email, pass)
  }, [email, pass]);

  const Cadastrar = () => {
    if(pass === confirmPass){
        createUserWithEmailAndPassword(auth, email, pass)
        .then((dadosUsuario) =>{
            console.log(dadosUsuario);
        }).catch((error) =>{
            alert(error.message);
        })
}
  }
  console.log(email, pass);
  console.log(typeof email, typeof pass);

  return (

      <View style={styles.container}>
        {/* Logar com */}
        <View style={styles.viewIcons}>

            <View >

            <Text style={styles.textLogin}>Registrar com</Text>
                <View  style={styles.boxContentIcons}>
                    <View style={styles.boxIcon}>
                        <Image style={styles.imageIcon} source={"../assets/apple.png"}></Image>
                    </View>

                    <View style={styles.boxIcon}> 
                        <Image style={styles.imageIcon} source={"../assets/face.png"}></Image>
                    </View>

                    <View style={styles.boxIcon}>
                    <Image style={styles.imageIcon} source={"../assets/x.png"}></Image>
                    </View>
                    
                </View>

            <View style={styles.line} >
              <Text style={styles.textLine}>- - - - - - - - - - - - - - - - - - -    OR    - - - - - - - - - - - - - - - - - -
              </Text>
            </View>

            </View>

        </View>

        {/* Cadastro normal */}

        <View style={styles.login}>
          {/* Inputs */}
          <View>
            <Text style={styles.textLabel}>Email Adress</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Digite seu email"
              inputMode="email"
            />
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPass}
              value={pass}
              placeholder="Digite seu email"
              inputMode="email"
            />


        <Text style={styles.textLabel}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={setConfirmPass}
              value={confirmPass}
              placeholder="Digite seu email"
              inputMode="email"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={Cadastrar}>
            <Link style={styles.btnText} href={"/"}>Registrar</Link>
          </TouchableOpacity>
        </View>
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
    marginHorizontal: 95,
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
    color: "#ADA5A5FF"
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
