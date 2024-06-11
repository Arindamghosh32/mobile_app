import { useQuery, gql } from '@apollo/client';
import GlobalApi from './../../Utils/GlobalApi';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const GET_SLIDERS = gql`
  query Sliders {
    sliders {
      id
      name
      image {
        url
      }
    }
  }
`;

export default function Slider() {
  const { loading, error, data } = useQuery(GET_SLIDERS, { client: GlobalApi });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  // Render the sliders using the data from the query
  return (
    <View style={styles.maina}>
      <Text style={{ fontSize: 18 }}>Offers for you</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.sliders}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.main}>
            <Text>{item.name}</Text>
            <Image source={{ uri: item.image.url }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );

  
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  main: {
    padding: 10,
    marginRight: 20, // Add marginRight for spacing between sliders
  },
  maina: {
    padding: 20,
  },
});