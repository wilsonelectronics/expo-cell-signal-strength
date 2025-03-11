import ExpoCellSignalStrengthModule from "./ExpoCellSignalStrengthModule";

export function getSignalStrength() {
    return ExpoCellSignalStrengthModule.signalStrength
}

export function listenToSignalStrength() {
  return ExpoCellSignalStrengthModule.startListeningToSignalStrength();
}

export function stopListeningToSignalStrength() {
  return ExpoCellSignalStrengthModule.stopListeningToSignalStrength();
}
