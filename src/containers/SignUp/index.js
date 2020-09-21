import React, {useContext, useState} from 'react';
import Firebase from '../../firebase/config';
import {Text, SafeAreaView, View, StyleSheet, Alert} from 'react-native';
import {color, globalStyle} from '../../utility';
import {CLogo, CInput, CRoundButton} from '../../components';
import {loadingStart, loadingStop} from '../../context/actions/loader';
import {Store} from '../../context/store';
import {RAddUser, RSignUp} from '../../network';
const SignUp = ({navigation}) => {
  const {dispatchLoaderAction} = useContext(Store);
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {name, email, password, confirmPassword} = credentials;

  const handleOnChange = (stateName, changedValue) => {
    setCredentials({
      ...credentials,
      [stateName]: changedValue,
    });
  };
  const onSignUpPress = () => {
    if (!name) {
      Alert.alert('İsim alanı boş bırakılamaz');
    } else if (!email) {
      Alert.alert('Email alanı boş bırakılamaz');
    } else if (!password) {
      Alert.alert('Şifre alanı boş bırakılamaz');
    } else if (password !== confirmPassword) {
      Alert.alert(
        'Şifre eşleşmesi sağlanamadı.Lütfen şifre alanlarını aynı giriniz.',
      );
    } else {
      dispatchLoaderAction(loadingStart());
      RSignUp(email, password)
        .then(() => {
          let uid = Firebase.auth().currentUser.uid;
          let profileImg = ' ';
          RAddUser(uid, name, email, profileImg)
            .then()
            .catch((err) => {
              dispatchLoaderAction(loadingStop());
              console.log(err);
            });
        })
        .catch((err) => {
          dispatchLoaderAction(loadingStop());
          console.log(err);
        });
    }
  };
  return (
    <SafeAreaView style={[globalStyle.flex1, {backgroundColor: color.BLACK}]}>
      <View style={[globalStyle.containerCentered]}>
        <CLogo />
      </View>
      <View style={[globalStyle.flex2, globalStyle.centerSection]}>
        <CInput
          placeholder={'isim giriniz.'}
          value={name}
          onChangeText={(text) => handleOnChange('name', text)}
        />
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
        <CInput
          placeholder={'Şifre tekrarı giriniz.'}
          value={confirmPassword}
          onChangeText={(text) => handleOnChange('confirmPassword', text)}
          secureTextEntry={true}
        />
        <CRoundButton title={'Kayıt Ol'} onPress={() => onSignUpPress()} />
        <Text
          style={pageStyle.girisTextStyle}
          onPress={() => navigation.navigate('Login')}>
          Giriş Yap
        </Text>
      </View>
    </SafeAreaView>
  );
};
const pageStyle = StyleSheet.create({
  girisTextStyle: {fontSize: 22, fontWeight: 'bold', color: color.LIGHT_GREEN},
});
export default SignUp;
