import { useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Root from './src/Navigations/Root';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Root />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
