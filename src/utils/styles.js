import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Poppins;
        color: ${COLORS.black};
    }
`;