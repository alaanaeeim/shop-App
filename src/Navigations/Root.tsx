import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Screens/ProfileScreen';
import MoreMenu from '../Screens/MoreScreen';
import Home from '../Screens/HomeScreen';
import Posts from '../Screens/Posts';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createNativeStackNavigator();

const client = new QueryClient()

const Root = () => {
    return (
        <QueryClientProvider client={client}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#f2b'
                    }
                }}>
                    <Stack.Screen name="Home" component={Home} options={({ route }) => ({
                        headerShown: true,
                        title: "Home"
                    })} />
                    <Stack.Screen name="Profile" component={Profile} options={({ route }) => ({
                        headerShown: true,
                        headerTitle: route?.params?.title || "Profile",
                        headerBackTitleStyle: {
                            fontSize: 18
                        },
                        headerBackVisible: true,
                        headerBackTitle: "Home",
                    })} />
                    <Stack.Screen name="More" component={MoreMenu} />
                    <Stack.Screen name="Posts" component={Posts} />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
};

export default Root;
