import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import logo from '../../assets/logo-white.png';

import Colors from '../../styles/Colors';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.conatiner}>
      <Image source={logo} />
      <TextInput
        style={styles.input}
        placeholder="Seu E-mail"
        placeholderTextColor={Colors.carbon}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Sua Senha"
        placeholderTextColor={Colors.carbon}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />

      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}
        style={styles.buttonSignUp}>
        <Text style={styles.buttonSignUpText}>Criar uma Conta</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.champagne,
    borderRadius: 2,
    width: '80%',
    paddingHorizontal: 20,
    fontSize: 16,
    color: Colors.white,
    height: 44,
    marginTop: 20,
  },
  button: {
    height: 44,
    width: '80%',
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSignUp: {
    marginTop: 10,
  },
  buttonSignUpText: {
    color: Colors.blueDark,
    textDecorationLine: 'underline',
  },
});

export default SignIn;
