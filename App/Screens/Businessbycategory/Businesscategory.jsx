import { useQuery, gql } from '@apollo/client';
import GlobalApi from './../../Utils/GlobalApi';
import { View, Text,FlatList,Image,StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const BUSINESS_BY_CATEGORY = gql`
  query Business($category: String!) {
    businessLists(where: { category: { name: $category } }) {
      id
      name
      email
      contactperson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
`;

export default function Businesscategory() {
  const navigation = useNavigation()
  const route = useRoute();
  const { category } = route.params;

  // Correct usage of useEffect
  useEffect(() => {
    console.log("category", category);
  }, [category]);

  const { loading, error, data } = useQuery(BUSINESS_BY_CATEGORY, {
    variables: { category },
    client: GlobalApi,
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  
  return (
    <View>
      <Text style={{margin:10,fontSize:25}}>Businesscategory</Text>
      <FlatList
      data = {data.businessLists}
      renderItem = {({item})=>(
        <TouchableOpacity key={item.id} style={styles.main} onPress={()=>navigation.push('business-details',{item:item})}>
          <View>
            <Image source={{uri:item.images[0].url}} style={{width:200, height:100, borderRadius:24}}/>
          </View>
          <View>
          <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding:20,
    backgroundColor:'white',
    margin:10,
    marginTop:20,
    borderRadius:20,
    flexDirection:'row',
    gap:10
  }
})
