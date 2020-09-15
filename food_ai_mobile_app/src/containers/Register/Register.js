import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <StatusBar barStyle="dark-content" />

            <SafeAreaView style={{ padding: 40 }}>
                <Text>Register account</Text>
                <TextInput
                    mode='outlined'
                    label="Full name"
                    value={fullName}
                    onChangeText={text => setFullName(text)}
                />
                <TextInput
                    mode='outlined'
                    label="Phone Number"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                />
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
                    Create account
                </Button>

            </SafeAreaView>
        </>
    );
};

export default Register;