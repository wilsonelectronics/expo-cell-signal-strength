import * as ExpoCellSignalStrength from "expo-cell-signal-strength";
import { Fragment, useState } from "react";
import { SafeAreaView, Text, TouchableHighlight, View } from "react-native";

export default function App() {
  const [signalStrength, setSignalStrength] = useState<number | null>(null);
  const [signalStrengthInterval, setSignalStrengthInterval] =
    useState<NodeJS.Timeout | null>(null);

  const startReadingSignalStrength = () => {
    ExpoCellSignalStrength.listenToSignalStrength();
    setSignalStrengthInterval(
      setInterval(() => {
        setSignalStrength(
          (current) => ExpoCellSignalStrength.getSignalStrength() || current
        );
      }, 1000)
    );
  };

  const stopReadingSignalStrength = () => {
    ExpoCellSignalStrength.stopListeningToSignalStrength();
    clearInterval(signalStrengthInterval!);
    setSignalStrengthInterval(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableHighlight
          style={styles.button}
          onPress={startReadingSignalStrength}
        >
          <Text>Start Reading</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={stopReadingSignalStrength}
        >
          <Text>Stop Reading</Text>
        </TouchableHighlight>
        <Text>Signal Strength:</Text>
        <Text>{signalStrength} dB</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  content: {},
  button: {
    padding: 8,
    backgroundColor: "white",
    borderWidth: 2,
  },
};
