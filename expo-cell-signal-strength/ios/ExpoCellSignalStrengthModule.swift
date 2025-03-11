import ExpoModulesCore

public class ExpoCellSignalStrengthModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoCellSignalStrength")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      return "Hello world! 👋"
    }
  }
}
