import "styled-components";
import { colors } from "./src/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key in keyof typeof colors]: string;
    };
  }
}
