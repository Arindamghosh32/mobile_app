import { View, Text,Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{alignItems:'center'}}>
      <Image source={require('./../../../assets/images/login.png')}
       style={styles.loginimage}
      />
      <View style={styles.subcontainer}>
      <Text style={{fontSize: 27, color: '#ffffff', textAlign: 'center'}}>
  Let's Find&nbsp;<Text style={{fontWeight: 'bold'}}>Professional Cleaning and Repair</Text>&nbsp;Services
</Text>
      
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
            <Text style={{textAlign:'center',justifyContent:'center',marginTop:12,fontSize:17,fontWeight:'bold'}}>Let's get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loginimage: {
    width: 230,
    height: 430,
    marginTop: 10,
    marginRight: 50,
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 10,
  },
  subcontainer: {
    backgroundColor: "#8E3FFF",
    width: 410,
    height: "70%",
    marginTop: -30,
    marginRight: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding:20,
    
  },
  button:{
    marginTop: 80,
    marginLeft: 90,
    width: 200,
    height: 60,
    backgroundColor: "#fff",
    borderRadius:10
  }
});

