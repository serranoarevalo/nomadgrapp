import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  CameraRoll,
  Image
} from "react-native";
import { Camera, Permissions, FileSystem } from "expo";
import FitImage from "react-native-fit-image";
import { MaterialIcons } from "@expo/vector-icons";
import uuidv1 from "uuid/v1";

class Container extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flash: Camera.Constants.FlashMode.off,
    pictureTaken: false,
    picture: null
  };

  async componentWillMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: camera.status === "granted"
    });
  }
  render() {
    const {
      hasCameraPermission,
      type,
      flash,
      pictureTaken,
      picture
    } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          {pictureTaken && picture ? (
            <View style={{ flex: 2 }}>
              <FitImage
                source={{ uri: picture }}
                style={{ flex: 1 }}
                onError={e => console.log(e)}
              />
            </View>
          ) : (
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
                    <MaterialIcons
                      name={"flash-auto"}
                      color="white"
                      size={40}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </Camera>
          )}

          <View style={styles.btnContainer}>
            {pictureTaken ? (
              <View style={styles.photoActions}>
                <TouchableOpacity onPressOut={this._retakePhoto}>
                  <MaterialIcons name={"cancel"} color="#353535" size={60} />
                </TouchableOpacity>
                <TouchableOpacity onPressOut={this._approvePhoto}>
                  <MaterialIcons
                    name={"check-circle"}
                    color="#353535"
                    size={60}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={this._takePhoto}>
                <View style={styles.btn} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    }
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
    const { pictureTaken } = this.state;

    if (!pictureTaken) {
      if (this.camera) {
        let result = await this.camera.takePictureAsync({
          quality: 0.5
        });
        this.setState({ pictureTaken: true, picture: result.uri });
      }
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
  _retakePhoto = () => {
    this.setState({
      picture: null,
      pictureTaken: false
    });
  };
  _approvePhoto = async () => {
    const { picture } = this.state;
    const { navigation: { navigate } } = this.props;
    let saveResult = await CameraRoll.saveToCameraRoll(picture, "photo");
    navigate("UploadPhotoModal", { photo: picture });
    this.setState({
      pictureTaken: false
    });
  };
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
  },
  photoActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
    width: 300
  }
});

export default Container;
