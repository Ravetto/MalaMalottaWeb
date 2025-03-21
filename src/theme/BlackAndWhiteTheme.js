import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const BlackAndWhiteTheme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#777',
        },
        error: {
            main: red.A400,
        },
    },
})