import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Paragraph() {
  const context = useContext(ThemeContext);
  return <p className={context.theme}>lorem ipsum dolor sit amet</p>;
}
