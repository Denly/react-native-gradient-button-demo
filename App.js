import { StatusBar } from 'expo-status-bar';
import { Alert, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from 'expo-blur';

export default function App() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={{ margin: 10 }} activeOpacity={0.1} onPress={() => Alert.alert("Hi Button 1~")}>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.7, y: 1 }}
          colors={['#76F287', '#8D3EDA']}
          style={{ borderRadius: 5 }}>
          <View style={styles.gradient}>
            <Text style={styles.text}>Button 1</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={{
        margin: 10,
        shadowColor: '#8DBCB8',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 10
      }} onPress={() => Alert.alert("Hi Button 2~")}>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.7, y: 1 }}
          colors={['rgba(142,220,184,1)', 'rgba(96,168,221,1)']}
          style={{ borderRadius: 5 }}>

          <View style={styles.gradientWarp}>
              <LinearGradient
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.7, y: 1 }}
                colors={['rgba(142,220,184,0.3)', 'rgba(96,168,221,0.3)']}
                style={{ borderRadius: 5 }}>
                <View style={styles.gradientInner}>
                  <Text style={styles.text}>Button 2</Text>
                </View>
              </LinearGradient>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <Text>Yoo Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    margin: 2,
    backgroundColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  gradientInner: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  gradientWarp: {
    margin: 2,
    backgroundColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    margin: 8,
    paddingHorizontal: 12,
    textAlign: "center",
    color: 'white',
    fontSize: 18
  }
});
