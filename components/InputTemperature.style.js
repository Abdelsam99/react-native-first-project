import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container:{
        alignSelf: "stretch",
        justifyContent: 'center'
    },
  input: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 50,
    paddingLeft: 20,
  },
  unit:{
    fontSize: 35,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 15
  }
});
