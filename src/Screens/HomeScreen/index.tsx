import React from 'react'
import { View, Text, Button } from 'react-native'
import { getPaginatedPosts, getPosts } from '../../Apis/services/UserService'

const Home = ({ navigation }: any) => {
    return (
        <View>
            <Button title='Profile' onPress={() => navigation.navigate('Profile', { title: "Profile Screen" })} />
            <Button title='Posts' onPress={() => navigation.navigate('Posts')} />
            <Button title='More' onPress={() => navigation.navigate('More')} />

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'ComicNeue-Bold', fontSize: 22 }}>Welcome to the React Native App!</Text>
            </View>
        </View>
    )
}

export default Home