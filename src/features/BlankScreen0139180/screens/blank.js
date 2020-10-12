import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/download_1_44ze5kE.png"
      }}
      style={styles.ImageBackground_1}
    >
      <Button
        title="menu"
        color="#3366FF"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Image resizeMode="cover" style={styles.Image_11} />
      <Button
        title="start button "
        color="#3366FF"
        style={styles.Button_7}
        onPress={() => alert("Pressed!")}
      />
    </ImageBackground>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
