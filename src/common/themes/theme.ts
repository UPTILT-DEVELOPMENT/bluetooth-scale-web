import { Theme } from "@emotion/react";
import { createTheme, ThemeOptions } from "@mui/material";
import { green, red, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: grey.A700
        },
        secondary: {
            main: '#FFEE93'
        },
        background: {
            default: '#F7F3E3'
        }
    },
});

export default theme;