/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        accent: 'yellow',
    },
};

const FoodApp = () => {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => FoodApp);
