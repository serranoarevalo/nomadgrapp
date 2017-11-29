import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  CameraRoll
} from "react-native";
import { Camera, Permissions } from "expo";
import { MaterialIcons } from "@expo/vector-icons";

class Container extends Component {
  state = {
    hasCameraPermission: null,
    hasCameraRollPermission: null,
    type: Camera.Constants.Type.back,
    flash: Camera.Constants.FlashMode.off
  };

  async componentWillMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    // const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({
      hasCameraPermission: camera.status === "granted"
      // hasCameraRollPermission: cameraRoll.status === "granted"
    });
  }

  _toggleCameraType = () => {
    this.setState(prevState => {
      if (prevState.type === Camera.Constants.Type.back) {
        return { type: Camera.Constants.Type.front };
      } else {
        return { type: Camera.Constants.Type.back };
      }
    });
  };

  _takePhoto = async () => {
    if (this.camera) {
      let result = await this.camera.takePictureAsync({
        quality: 0.5
      });
      let saveResult = await CameraRoll.saveToCameraRoll(result.uri, "photo");
    }
  };

  _changeCameraFlash = () => {
    this.setState(prevState => {
      if (prevState.flash === Camera.Constants.FlashMode.off) {
        return { flash: Camera.Constants.FlashMode.on };
      } else if (prevState.flash === Camera.Constants.FlashMode.on) {
        return { flash: Camera.Constants.FlashMode.auto };
      } else if (prevState.flash == Camera.Constants.FlashMode.auto) {
        return { flash: Camera.Constants.FlashMode.off };
      }
    });
  };

  render() {
    const { hasCameraPermission, type, flash } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <Camera
            style={styles.camera}
            type={type}
            flashMode={flash}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <TouchableOpacity onPressOut={this._toggleCameraType}>
              <View style={styles.action}>
                <MaterialIcons
                  name={type === 0 ? "camera-front" : "camera-rear"}
                  color="white"
                  size={40}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={this._changeCameraFlash}>
              <View style={styles.action}>
                {flash === 0 && (
                  <MaterialIcons name={"flash-off"} color="white" size={40} />
                )}
                {flash === 1 && (
                  <MaterialIcons name={"flash-on"} color="white" size={40} />
                )}
                {flash === 2 && (
                  <MaterialIcons name={"flash-auto"} color="white" size={40} />
                )}
              </View>
            </TouchableOpacity>
          </Camera>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={this._takePhoto}>
              <View style={styles.btn} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: {
    flex: 2,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btnContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: "#bbb",
    backgroundColor: "white"
  },
  action: {
    width: 40,
    backgroundColor: "transparent",
    height: 40,
    margin: 10
  }
});

export default Container;
