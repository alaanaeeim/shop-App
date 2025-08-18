/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from 'react';
import { Button, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Config from 'react-native-config';
import SplashScreen from 'react-native-splash-screen';
import { getPaginatedPosts, getPosts } from './src/Apis/services/UserService';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'ComicNeue-Bold', fontSize: 22 }}>Welcome to the React Native App!</Text>
        <Button title="Get Posts" onPress={getPosts} />
        <Button title="Paginated Posts" onPress={() => getPaginatedPosts(10)} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
