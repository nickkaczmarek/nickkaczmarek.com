import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";
import "./global.css";

kirkhamTheme.headerColor = "";
kirkhamTheme.bodyColor = "";

const typography = new Typography(kirkhamTheme);

export default typography;
export const rhythm = typography.rhythm;
