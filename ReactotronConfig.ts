import Reactotron from "reactotron-react-native";

// Create a configuration for Reactotron
const reactotron = Reactotron
  .configure({ name: "React Native Demo" }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = reactotron;

export default reactotron;
