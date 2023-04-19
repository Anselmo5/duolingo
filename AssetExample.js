import * as React from 'react';
import { Text, View, StyleSheet, Image ,TouchableOpacity} from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/giphy.gif')} />
      <Text style={styles.texte}> Learn a language for free. forever</Text>

      <TouchableOpacity style={styles.botton}> 
        <View> 
            <Text style={styles.texto}> GET STARTED</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botton2}> 
        <View> 
            <Text style={styles.texto2}> A ALREADY HAVE AN ACCOUNT</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 130,
    width: 130,
    bottom:2,
  },
  texte:{
    margin: 24,
    padding:10,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom:40,
    color:'#a0a0a0',
},

botton:{
 width:300,
 height:50,
 backgroundColor:'#237e18',
  borderRadius:5,
  borderBottom:"4px solid #0009!important",
},
botton2:{
width:300,
 height:60,
 backgroundColor:'#fff',
  borderRadius:5,
  marginTop:19,
  borderBottom:"4px solid #0009!important",
  
},
texto:{
  textAlign: 'center',
  margin:15,
  fontSize: 15,
  color:'#fff',
  fontWeight: 'bold',
},
texto2:{
  textAlign: 'center',
  margin:20,
  fontSize: 16,
  color:'#5db74c',
  fontWeight: 'bold',
}
});
