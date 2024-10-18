import { Link, router } from "expo-router";
import React, { useState } from "react";
import {Image} from "expo-image"
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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onPress = () => {
    router.push("/(tabs)");
  };

  console.log(email, pass);
  console.log(typeof email, typeof pass);

  return (
    <>
      <SafeAreaView>
        {/* Logar com */}
        <View style={styles.viewIcons}>

            <View >

            <Text style={styles.textLogin}>Logar com</Text>
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
              onChangeText={setEmail}
              value={email}
              placeholder="Digite seu email"
              inputMode="email"
            />
          </View>

          <Switch
            trackColor={{ false: "#767577", true: "#21E721FF" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#C44747FF"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Link style={styles.btnText} href={"/register"}>Logar</Link>
          </TouchableOpacity>
            <Text>Não tem uma conta? <Link style={styles.textCreate} href={"/register"}>Crie uma nova aqui</Link></Text>
        </View>
      </SafeAreaView>

    </>
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
    marginBottom: 10,
    marginTop:25
  },
  textCreate:{
    fontWeight: "500",
    fontSize: 14,
    color: "#54E062FF"
  },
  button: {
    backgroundColor: "#50d15a",
    justifyContent: "center",
    height: 55,
    alignItems: "center"
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
  },
  textLogin:{
    width:150,
    marginHorizontal: 100,
    fontWeight: "700",
    fontSize: 22,
    marginBottom: 25,
    marginTop: 35
  },
  login: {
    paddingHorizontal: 25
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
