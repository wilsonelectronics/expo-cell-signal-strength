import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoCellSignalStrengthViewProps } from './ExpoCellSignalStrength.types';

const NativeView: React.ComponentType<ExpoCellSignalStrengthViewProps> =
  requireNativeView('ExpoCellSignalStrength');

export default function ExpoCellSignalStrengthView(props: ExpoCellSignalStrengthViewProps) {
  return <NativeView {...props} />;
}
