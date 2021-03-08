import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {captureImage, chooseFile} from './ImagePickerFunction';

/**
 * @description Note this use your own style
 */

export default ImagePicker = ({visible, onHide}) => {
  const onCamera = async () => {
    captureImage().then((a) => console.log('A : ', a));
  };

  const onGallary = async () => {
    let a = await chooseFile();
    console.log('B : ', a);
  };
  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      transparent={true}
      onRequestClose={() => {
        console.log();
      }}>
      <TouchableOpacity style={{flex: 1}} onPress={onHide} />
      <View style={[styles.modal]}>
        <Text style={styles.modalTitle}>Select Image</Text>
        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={onCamera} style={styles.touchView}>
            <Text style={styles.modalText}>Take Photo{'...'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onGallary} style={styles.touchView}>
            <Text style={styles.modalText}>Choose from Libary{'...'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: '80%',
    height: '40%', //vh(44.5)
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#d2d2d2',
    bottom: '35%',
    left: '10%',
    position: 'absolute',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  modalTitle: {
    color: '#1252ff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 29,
  },
  modalText: {
    color: '#565656',

    fontSize: 18,
    // marginTop: 30,
  },
  touchView: {
    backgroundColor: '#fff',
    width: 200,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});
