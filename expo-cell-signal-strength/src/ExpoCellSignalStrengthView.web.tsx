import * as React from 'react';

import { ExpoCellSignalStrengthViewProps } from './ExpoCellSignalStrength.types';

export default function ExpoCellSignalStrengthView(props: ExpoCellSignalStrengthViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
