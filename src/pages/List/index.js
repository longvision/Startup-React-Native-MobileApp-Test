import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button
} from 'react-native';

// import { Container } from './styles';

export default function List({ item }) {
  return (
    <View>
      <Text>{item.title}</Text>
      <Image
        source={{
          uri: `${item.logo}`
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text>{item.address}</Text>
      <Text>{item.rating}</Text>
      <Button title="Atividades" />
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    height: Dimensions.get('window').height * 0.2,
    marginVertical: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').height * 0.2 * (1950 / 662)
  }
});
