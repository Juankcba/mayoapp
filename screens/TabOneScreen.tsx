import * as React from "react";
import {  StyleSheet, ImageBackground } from "react-native";
import { Input, Button } from "react-native-elements";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";


export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>

<ImageBackground source={require('../assets/images/especialista.png')} style={styles.button}/>
<ImageBackground source={require('../assets/images/beauty.png')} style={styles.button}/>
<ImageBackground source={require('../assets/images/mensajes.png')} style={styles.button}/>
<ImageBackground source={require('../assets/images/derma.png')} style={styles.button}/>
<ImageBackground source={require('../assets/images/catalogo.png')} style={styles.button}/>
<ImageBackground source={require('../assets/images/notificaciones.png')} style={styles.button}/> 

  
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: 'normal',
    color: '#000',
    fontFamily: 'dosis',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button:{
    backgroundColor: '#F5F5F5',
    color: '#000',
    width: 164,
    height: 131,
    margin: 8,
    padding: 20,
    
    
  }
});
