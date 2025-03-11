import { registerWebModule, NativeModule } from 'expo';

import { ExpoCellSignalStrengthModuleEvents } from './ExpoCellSignalStrength.types';

class ExpoCellSignalStrengthModule extends NativeModule<ExpoCellSignalStrengthModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoCellSignalStrengthModule);
