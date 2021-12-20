import * as React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Input, Icon, Button, CheckBox } from "react-native-elements";
import { Text, View } from "../Themed";
import Login from "./Login";
import Home from "../../screens/Home"

export default function RegisterForm() {
  const [registro, setRegistro] = React.useState(true);
  const [user, setUser] = React.useState(false);
  if (user) {
    return <Home />;
  } else {
    if (registro) {
      return (
        <>
          <View style={styles.header}>
            <Image
              source={require("../../assets/images/detector-de-rostros.png")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <Image
                source={require("../../assets/images/user.png")}
                resizeMode="contain"
                style={styles.imageAcc}
              />
              <Text style={styles.title}>REGISTRO</Text>
              <Input
                placeholder="Nombre"
                containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
              />
              <Input
                placeholder="Apellido 1"
                containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
              />
              <Input
                placeholder="Apellido 2"
                containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
              />
              <Input
                placeholder="Email"
                containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
              />
              <Input
                placeholder="Teléfono"
                containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
              />
              <Input
                placeholder="Código identificación"
                containerStyle={styles.inputFormContainer}
                inputContainerStyle={styles.inputForm}
              />
              <CheckBox title="Acepto los términos y política de privacidad" />

              <Button
                title="Enviar"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
              />
              <Text style={styles.textRegister}>
                ¿Ya tienes una cuenta?{" "}
                <Text
                  style={styles.btnRegister}
                  onPress={() => setRegistro(false)}
                >
                  Ingresa
                </Text>
              </Text>
            </ScrollView>
          </SafeAreaView>
          <View style={styles.footer}>
            <Text style={styles.disclaimer}>
              IBSA DERMA no recopilará ningún dato personal que usted introduzca
              en la aplicación ni se hará responsables de ellos.
            </Text>
          </View>
        </>
      );
    } else {
      return <Login />;
    }
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    height: 60,
    alignItems: "flex-end",
    margin: 0,
    zIndex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  imageAcc: {
    width: 34,
    height: 34,
    alignSelf: "center",
  },
  image: {
    marginTop: 16,
    marginRight: 16,
    width: 30,
    height: 30,
  },
  inputFormContainer: {
    margin: 0,
    marginTop: -15,
    padding: 0,
  },
  inputForm: {
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
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
    paddingTop: 2,
  },
});
