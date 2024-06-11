import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native"


import TabNavigation from './App/Navigations/tabnavigation';

const AppContainer = ({ children }) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      {children}
    </View>
    </SafeAreaView>
  );
};


export default function App() {
  return (
   <>
    <NavigationContainer>
      <AppContainer>
        <TabNavigation/>
      </AppContainer>
    </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30,
    paddingLeft:6
  },
});
/*<View style={styles.container}>
<Login/>
<StatusBar style="auto" />
</View> */
