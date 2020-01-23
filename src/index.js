import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MapView from 'react-native-maps';

import '~/config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d2d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalWrapper: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 200,
    backgroundColor: '#FFF',
    marginTop: Dimensions.get('window').height / 2 - 100,
    borderRadius: 10,
  },
  modalContentWrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    width: 100,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#d2d2d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    width: 100,
    height: 40,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: '#9dc98e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d2d2d2',
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -27.2177659,
          longitude: -49.6451598,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031,
        }}
        onLongPress={(event) => {
          console.tron.log(event);
          setVisible(true);
        }}
      />
      {/* <TouchableHighlight onPress={() => setVisible(!visible)}>
        <Text>Toggle modal</Text>
      </TouchableHighlight> */}
      <Modal animationType="slide" visible={visible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalWrapper}>
            <View style={styles.modalContentWrapper}>
              <Text style={styles.modalTitle}>Add new location</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter a github username"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setVisible(!visible)}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => setVisible(!visible)}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
