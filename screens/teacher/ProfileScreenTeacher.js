import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Button,
} from "react-native";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView
          style={{
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        />
        <View>
          <Text>Grades</Text>
          <Button
            title="register"
            onPress={() => {
              this.props.navigation.navigate("RegisterScreen");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
