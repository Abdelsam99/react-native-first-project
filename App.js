import { ImageBackground, Text, View } from "react-native";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import hot from "./assets/hot.png";
import cold from "./assets/cold.png";
import InputTemperature from "./components/InputTemperature";
import Temperature from "./components/Temperature";
import { useEffect, useState } from "react";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS } from "./constance";
import {
  getOpposite,
  converTemperatureTo,
  isIceTemperature,
} from "./services/Temperature-service";
import { BoutonConverge } from "./components/BoutonConverge";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [background, setBackground] = useState();
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oposite = getOpposite(currentUnit);

  const getConvertedTemperature = () => {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : converTemperatureTo(oposite, valueAsFloat).toFixed(1);
  };
  useEffect(() => {
    const temperatuAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatuAsFloat)) {
      const isColBackground = isIceTemperature(inputValue, currentUnit);
      setBackground(isColBackground ? cold : hot);
    }
  }, [inputValue,currentUnit]);

  return (
    <ImageBackground source={background} style={s.container}>
      <View style={s.workspace}>
        <View>
          <Temperature value={getConvertedTemperature()} unit={oposite} />
        </View>
        <InputTemperature
          defaultValue={DEFAULT_TEMPERATURE}
          onChangeText={setInputValue}
          unit={currentUnit}
        />
        <View>
          <BoutonConverge
            onPress={() => {
              setCurrentUnit(oposite);
            }}
            unit={currentUnit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
