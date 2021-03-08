import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from './src/packages/ImagePicker/index';

export default () => {
  const [isModal, openModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="get picture" onPress={() => openModal(!isModal)}></Button>
      <ImagePicker visible={isModal} onHide={() => openModal(!isModal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    // flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `rgba(0,0,0,0.8)`,
    height: 200,
    width: '80%',
  },
});
