import React, {useLayoutEffect} from 'react';

import {Text, View, StyleSheet, Alert} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import {color} from '../../utility';

const Main = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SimpleLineIcon
          name="logout"
          size={20}
          color={color.WHITE}
          style={{right: 10}}
          onPress={() =>
            Alert.alert(
              'Cıkıs',
              'çıkıs yapmak istediğinden emin misin?',
              [
                {
                  text: 'Evet',
                  onPress: () => alert('çıkış yapıldı'),
                },
                {
                  text: 'Hayır',
                },
              ],
              {
                cancelable: false,
              },
            )
          }
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Main;
