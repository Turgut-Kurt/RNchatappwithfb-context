import React, {useContext, useState} from 'react';

import {Text, SafeAreaView, View, StyleSheet, Alert} from 'react-native';
import {color, globalStyle} from '../../utility';
import {CLogo, CInput, CRoundButton} from '../../components';
import {Store} from '../../context/store';
import {loadingStart, loadingStop} from '../../context/actions/loader';
const Login = ({navigation}) => {
  const {dispatchLoaderAction, mapLoaderState} = useContext(Store);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const {email, password} = credentials;

  const handleOnChange = (stateName, changedValue) => {
    setCredentials({
      ...credentials,
      [stateName]: changedValue,
    });
  };
  const onLoginPress = () => {
    if (!email) {
      Alert.alert('Email alanı boş bırakılamaz');
    } else if (!password) {
      Alert.alert('Şifre alanı boş bırakılamaz');
    } else {
      dispatchLoaderAction(loadingStart());
      setTimeout(() => {
        dispatchLoaderAction(loadingStop());
      }, 2000);
    }
  };
  return (
    <SafeAreaView style={[globalStyle.flex1, {backgroundColor: color.BLACK}]}>
      <View style={[globalStyle.containerCentered]}>
        <CLogo />
      </View>
      <View style={[globalStyle.flex2, globalStyle.centerSection]}>
        <CInput
          placeholder={'Email giriniz.'}
          value={email}
          onChangeText={(text) => handleOnChange('email', text)}
        />
        <CInput
          placeholder={'Şifre giriniz.'}
          value={password}
          onChangeText={(text) => handleOnChange('password', text)}
          secureTextEntry={true}
        />
        <CRoundButton title={'Giriş Yap'} onPress={() => onLoginPress()} />
        <Text
          style={pageStyle.kayitTextStyle}
          onPress={() => navigation.navigate('SignUp')}>
          Kayıt Ol
        </Text>
      </View>
    </SafeAreaView>
  );
};
const pageStyle = StyleSheet.create({
  kayitTextStyle: {fontSize: 22, fontWeight: 'bold', color: color.LIGHT_GREEN},
});
export default Login;
