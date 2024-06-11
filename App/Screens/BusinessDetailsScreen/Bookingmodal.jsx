import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { gql, useMutation } from '@apollo/client';
import GlobalApi from './../../Utils/GlobalApi'; // Ensure this import is correct

const CREATE_BOOKING = gql`
  mutation CreateBooking($bookingStatus: ProgressStatus!, $businessId: ID!, $date: String!, $time: String!) {
    createBooking(data: {
      bookingStatus: $bookingStatus,
      businessList: { connect: { id: $businessId }},
      date: $date,
      time: $time
    }) {
      id
    }
    publishManyBookings {
      count
    }
  }
`;

export default function Bookingmodal({ onclose, businessId }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const [createBooking] = useMutation(CREATE_BOOKING, { client: GlobalApi });

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({ time: i + ":00 AM" });
    }
    for (let i = 8; i <= 12; i++) {
      timeList.push({ time: i + ":30 AM" });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({ time: i + ":00 PM" });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({ time: i + ":30 PM" });
    }
    setTimeList(timeList);
  };

  useEffect(() => {
    getTime();
  }, []);

  const onTimePress = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert('Error', 'Please select date and time.');
      return;
    }

    if (!businessId) {
      Alert.alert('Error', 'Business ID is missing.');
      return;
    }

    const data = {
      time: selectedTime,
      date: selectedDate,
      businessId: businessId,
      bookingStatus: 'Booked'
    };

    try {
      console.log('Sending booking data:', data);
      const response = await createBooking({ variables: data });
      console.log('Response from server:', response);
      if (response.data) {
        Alert.alert('Success', 'Booking confirmed!');
        onclose();
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      if (error.networkError) {
        console.error('Network Error:', error.networkError.result);
      }
      if (error.graphQLErrors) {
        error.graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`GraphQL error: ${message}, Location: ${locations}, Path: ${path}`)
        );
      }
      Alert.alert('Error', `Failed to confirm booking. ${error.message}`);
    }
  };

  return (
    <LinearGradient colors={['#FFEFBA', '#FFFFFF']}>
      <TouchableOpacity onPress={onclose}>
        <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 24, padding: 10 }}>Calendar</Text>
      </View>
      <View>
        <Calendar
          style={{ borderRadius: 10, elevation: 18, margin: 20 }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: '#FFEFBA',
              selectedTextColor: 'white',
            },
          }}
          onDayPress={onDayPress}
        />
      </View>
      <View>
        <Text style={{ padding: 10 }}>Time Slots</Text>
        <FlatList
          data={timeList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.main,
                item.time === selectedTime && styles.active
              ]}
              onPress={() => onTimePress(item.time)}
            >
              <Text style={[
                styles.text,
                item.time === selectedTime && styles.textActive
              ]}>{item.time}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.buttons}
        onPress={handleConfirmBooking}
      >
        <Text style={{ paddingLeft: 10, color: 'white', fontSize: 18, elevation: 10 }}>Confirm & Book</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    borderColor: 'purple',
  },
  main: {
    margin: 10,
    padding: 5
  },
  active: {
    margin: 10,
    padding: 5,
    backgroundColor: '#ccab04',
    borderRadius: 10
  },
  textActive: {
    color: 'white',
  },
  buttons: {
    backgroundColor: '#ccab04',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    margin: 40,
    marginTop: 50
  },
});
