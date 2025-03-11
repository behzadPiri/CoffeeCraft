import { StyleSheet } from "react-native";
import {useThemeColors} from '../../../content/Themes/Themes.tsx';

const Colors=useThemeColors()

const styles = StyleSheet.create({
  timerWrapper: {
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.background,
    flexDirection: "row",
    marginTop: 24
  },
  timer: {
    width: "50%",
    alignItems: "flex-start",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  text: {
    color: Colors.primary
  }
});

export default styles;
