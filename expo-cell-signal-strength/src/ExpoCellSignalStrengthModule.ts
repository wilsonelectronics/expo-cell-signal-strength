import { NativeModule, requireNativeModule } from 'expo';

import { ExpoCellSignalStrengthModuleEvents } from './ExpoCellSignalStrength.types';

declare class ExpoCellSignalStrengthModule extends NativeModule<ExpoCellSignalStrengthModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoCellSignalStrengthModule>('ExpoCellSignalStrength');
