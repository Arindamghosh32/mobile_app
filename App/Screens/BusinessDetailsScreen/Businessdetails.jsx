import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import Bookingmodal from './Bookingmodal';

export default function Businessdetails() {
  const [showModal, setshowModal] = useState(false);
  const handleClosemodel = () => {
    setshowModal(false);
  };
  const route = useRoute();
  const { item } = route.params;

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <View>
      <ScrollView style={{ height: '93%' }}>
        <LinearGradient colors={['#A770EF', '#CF8BF3', '#FDB99B']} style={styles.main}>
          <View>
            <Image
              source={{ uri: item.images[0].url }}
              style={{ width: 400, height: 300 }}
            />
            <Text style={{ color: 'white', fontSize: 40, margin: 20 }}>{item.name}</Text>
            <Text style={{ color: 'white', marginLeft: 20, marginBottom: 10 }}>{item.contactperson}</Text>
            <Text style={{ color: 'white', marginLeft: 20 }}>{item.about}</Text>
            <View style={{ borderWidth: 1, borderColor: '#fff', marginHorizontal: 20, marginTop: 40, marginBottom: 10 }} />
            <View style={styles.mia}>
              <Text style={{ color: 'white', marginLeft: 20, alignItems: 'center' }}>
                <Fontisto name="email" size={24} color="black" style={styles.email} />
              </Text>
              <Text style={{ color: 'white', marginLeft: 20, alignItems: 'center' }}>{item.email}</Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
      <LinearGradient colors={['#ee9ca7', '#ffdde1']} style={styles.buttons}>
        <TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 15 }}>Message me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setshowModal(true)}>
          <Text style={{ color: 'white' }}>Book Now</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Modal
        animationType='slide'
        visible={showModal}
      >
        <Bookingmodal onclose={handleClosemodel} businessId={item.id} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    padding: 0,
    height: 800
  },
  email: {
    color: 'white',
    alignItems: 'center'
  },
  mia: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
});
