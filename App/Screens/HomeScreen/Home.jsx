import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Slider from './Slider';
import Category from './Category';
import Business from './Business';
export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.slider}>
      <Slider/>
      <Category/>
      <Business/>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  slider:{
    
  }
});