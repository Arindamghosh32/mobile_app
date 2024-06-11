import { useQuery, gql } from '@apollo/client';
import GlobalApi from './../../Utils/GlobalApi';
import { View, Text,FlatList,StyleSheet,Image } from 'react-native'
import React from 'react'

const GET_BUSINESS = gql`
    query Business {
        businessLists {
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
export default function Business() {
    
    const {loading,error,data} = useQuery(GET_BUSINESS,{client:GlobalApi});
    if(loading) return <Text>Loading...</Text>
    if(error) return <Text>Error:{error.message}</Text>
    return (
        <View style={styles.maina}>
           <Text style={{fontSize:18}}>Business</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data = {data.businessLists}
            renderItem={({ item }) => (
                <View key={item.id} style={styles.main}>
                  <View style={styles.image}>
                  <Image source={{ uri: item.images[0].url }} style={styles.icon} />
                  </View>
                  <Text >{item.name}</Text>
                </View>
              )}
            />
        </View>
      );

    }

const styles = StyleSheet.create({
    icon:{
        width:200,
        height:120,   
        borderRadius:99,
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
      padding:9,
      
      
    }
})
