import { CellSignalStrength } from "expo-cell-signal-strength";
import { useEffect, useRef, useState } from "react";
import { SafeAreaView, Text, TouchableHighlight, View } from "react-native";

export default function App() {
  const [signalStrength, setSignalStrength] = useState<number | null>(null);
  const SignalStrength = useRef<CellSignalStrength>(new CellSignalStrength());

  const startReadingSignalStrength = () => {
    SignalStrength.current.monitorCellSignalStrength(setSignalStrength);
  };

  const stopReadingSignalStrength = () => {
    SignalStrength.current.stopMonitoringCellSignalStrength();
  };

  useEffect(() => {
    return () => {
      SignalStrength.current.stopMonitoringCellSignalStrength();
    };
  }, []);

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
