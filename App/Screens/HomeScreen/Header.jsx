import { View, Text,Image,StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.main}>
        <Image source={require("./../../../assets/images/PROFILE.png") } style={styles.image}/>
      <Text style={{paddingTop:5,color: '#f0ffff'}}>Arindam Ghosh{'\n'}Welcome to our services</Text>
      </View>
      <View style={styles.searchbar}>
          <TextInput placeholder='Search...' style={styles.textinput}></TextInput>
          <EvilIcons style={styles.search} name="search" size={27} color="black" />
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  image:{
    width: 50,
    height: 50,
    
    marginRight: 50,
    borderRadius: 25
  },
  header:{
    
    marginTop: 0,
    paddingTop: 20,
    paddingBottom: 50,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'space-around',
    backgroundColor: "#8E3FFF",
    
  },
  textinput:{
    backgroundColor:"#f0ffff",
    color:'black',
    width:300,
    height:30,
    borderRadius:10,
    paddingLeft:10,
    paddingRight: 10
  },
  main:{
  flexDirection:'row',
  justifyContent:'space-around',
  },
  searchbar:{
    alignItems:'center',
    paddingTop:40,
    flexDirection:'row',
    paddingLeft:35,
    gap:5
    
  },
  search:{
    backgroundColor:"#f0ffff",
    borderRadius:8,
    height:30,
    padding:3

  }
});