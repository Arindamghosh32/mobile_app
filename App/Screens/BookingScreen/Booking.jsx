import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import GlobalApi from './../../Utils/GlobalApi';
import { useQuery, gql } from '@apollo/client';


const BOOKING_DATA = gql`
query Getuserbooking {
  bookings(orderBy: updatedAt_DESC) {
    time
    date
    bookingStatus
    id
    businessList {
      id
      images {
        url
      }
      name
      address
      contactperson
      email
    }
  }
}
`;

export default function Booking() {

  const{loading,error,data,refetch} = useQuery(BOOKING_DATA,{client:GlobalApi,pollInterval:1000});
  if(loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Booking</Text>
      <FlatList
      data = {data.bookings}
      
      renderItem={({ item,index }) => (
        <View style={styles.data}> 
          
          {item.businessList && (  
            <>
            <View style={styles.document}>
              <View style={styles.image}>
              <Image source={{uri:item.businessList.images[0].url}} style={{width:150,height:100,borderRadius:10}}/>
              </View>
              <View style={styles.text}>
              <Text style={{color:'white'}}>{item.businessList.name}</Text>
              <Text style={{color:'white'}}>{item.businessList.address}</Text>
              <Text style={{color:'white'}}>{item.businessList.contactperson}</Text>
              <Text style={{color:'white'}}>{item.businessList.email}</Text>
              <Text style={{color:'white'}}>{item.date}</Text>
              </View>
              </View>
            </>
          )}
        </View>
      )}
      
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  data:{
    padding:10,
    
    backgroundColor:'#f0f0f0'
  },
  image:{

  },
  document:{
    flexDirection:'row',
    padding:5,
    gap:20,
    backgroundColor:'#c166f2',
    borderRadius:20,
    marginTop:10,
    
  },
   
}); 