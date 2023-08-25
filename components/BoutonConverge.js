import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {s} from "./BoutonConverge.style"
export function BoutonConverge({ onPress,unit}) {
  return (
    <TouchableOpacity onPress={onPress} style={s.bouton} >
      <Text style={s.text}>Convertir en {unit} </Text>
    </TouchableOpacity>
  );
}
