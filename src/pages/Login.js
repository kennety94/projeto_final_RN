import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity

} from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pets</Text>
            <TextInput
                placeholder="E-mail"
                underlineColorAndroid="transparent"
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Senha"
                underlineColorAndroid="transparent"
                textContentType="password"
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        alignItems: "center",
        backgroundColor: '#f5f9f7',
        height: '100%'
    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
        color: '#1d1108',
        marginTop: 60,
        marginBottom: 60
    },
    buttonStyle: {
        width: '70%',
        bottom: 0,
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: '#4da88d',
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: "uppercase",
        color: '#dce3e7'
    }

});

export default Login;
