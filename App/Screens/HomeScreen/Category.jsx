import { useQuery, gql } from '@apollo/client';
import GlobalApi from './../../Utils/GlobalApi';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GET_CATEGORY = gql`
query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  
`;



export default function Category() {
      const navigation = useNavigation()

    const{loading,error,data} = useQuery(GET_CATEGORY,{client:GlobalApi});
    if(loading) return<Text>Loading...</Text>;
    if(error) return<Text>Error: {error.message}</Text>
  return (
    <View style={styles.maina}>
       <Text style={{fontSize:18}}>Categories</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data = {data.categories}
        renderItem={({ item }) => (
            <TouchableOpacity key={item.id} style={styles.main} onPress={()=>navigation.push('business-list',{category:item.name})}>
              <View style={styles.image}>
              <Image source={{ uri: item.icon.url }} style={styles.icon} />
              </View>
              <Text >{item.name}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    icon:{
        width:30,
        height:30,   
    },
    main:{
      padding: 10,
      marginRight: 20,
      alignItems:'center'
    },
    maina: {
      padding: 20,
      paddingTop:5
    },
    image:{
      padding:17,
      borderRadius:99,
      borderColor:'#8E3FFF',
      backgroundColor:'#D3D3D3'
    }
})