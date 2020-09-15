import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <StatusBar barStyle="dark-content" />

            <SafeAreaView style={{ padding: 40 }}>

                <TextInput
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={{ marginBottom: 20 }}
                    mode='outlined'
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <Button
                    mode="contained"
                    onPress={() => console.log('Pressed')}>
                    Log in
                </Button>

            </SafeAreaView>
        </>
    );
};

export default Login;