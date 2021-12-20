import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { Text, View } from "../Themed";
import RegisterForm from "./RegisterForm";
import Home from "../../screens/Home"


export default function Login() {
  const [registro, setRegistro] = React.useState(false);
  const [user, setUser] = React.useState(false);
  if (user) {
    return <Home />;
  } else {
    if (registro == false) {
      return (
        <>
          <View style={styles.header}>
            <Image
              source={require("../../assets/images/detector-de-rostros.png")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.container}>
            <Image
              source={require("../../assets/images/user.png")}
              resizeMode="contain"
            />
            <Text style={styles.title}>INGRESO</Text>
            <Input
              placeholder="Correo electronico"
              inputContainerStyle={styles.inputForm}
            />
            <Input
              placeholder="Contraseña"
              inputContainerStyle={styles.inputForm}
            />
            <Button
              title="Iniciar sesión"
              containerStyle={styles.btnContainerLogin}
              buttonStyle={styles.btnLogin}
              onPress={() => setUser(true)}
            />
            <Text style={styles.textRegister}>
              ¿Aún no tienes una cuenta?{" "}
              <Text
                style={styles.btnRegister}
                onPress={() => setRegistro(true)}
              >
                Regístrate
              </Text>
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.disclaimer}>
              IBSA DERMA no recopilará ningún dato personal que usted introduzca
              en la aplicación ni se hará responsables de ellos.
            </Text>
          </View>
        </>
      );
    } else {
      return <RegisterForm />;
    }
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    height: 60,
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 12,
  },
  image: {
    marginTop: 16,
    marginRight: 16,
    width: 30,
    height: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
    borderColor: "#DCDCDC",
    borderWidth: 1,
    height: 50,

    paddingHorizontal: 10,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#0000ff",
    fontWeight: "bold",
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#000",
  },
  disclaimer: {
    color: "#9F9F9F",
    fontSize: 13,
    marginBottom: 4,
  },
  footer: {
    paddingLeft: 33,
    paddingRight: 33,
    paddingBottom: 11,
    paddingTop: 32,
  },
});
