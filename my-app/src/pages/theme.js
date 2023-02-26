
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { orange, red } from '@mui/material/colors';
import { grey} from '@mui/material/colors/'
import { makeStyles, withStyles } from "@mui/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
    
    spacing: 10,
    palette: {
      //mode: "dark",
      primary: {
        main: "#3A8DF4",
        bg: "#141414",
        text: "#FFFFFF",
        secondary : "#333",
        black : "#111"

      },
      // primary: 
        // main: orange[500]
      
      customRibRed: {
        main: red[400],
        superDark: red[800],
        superLight: red[100]
      }
    },
    typography: {
      myVariant: {
        fontSize: "2rem"
      }
    },
    
    transitions: {
      easing: {
        // This is the most common easing curve.
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // Objects enter the screen at full velocity from off-screen and
        // slowly decelerate to a resting point.
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        // Objects leave the screen at full velocity. They do not decelerate when off-screen.
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        // The sharp curve is used by objects that may return to the screen at any time.
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    },
    
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 0,
      marginTop: "10px",
      marginBottom: "10px",
     
      justifyContent: "center",
      alignItems: "center",
     
    },
    paper: {
      "&:hover": {
        padding: "0.3em",
        backgroundColor:  purple[500],
      },
      transition: "0.3s", 
     padding: "0.225em",
      backgroundColor:  theme.palette.primary.bg,
     
    },
    card: {
  
      margin: "auto",
     minWidth: "100%",
      padding: "1em",
      transition: "0.3s",
  
      borderRadius: ".625rem!important",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      },
      // background: "#233044",
      backgroundColor: theme.palette.primary.black,
    },
    title: {
      "&:active": {
        color: "#00008E",
      },
    },
    cardContent: {
      minHeight: "120px",
      color: "#fff",
    },
    cardActions: {
      padding: "16px",
    },
    avatar: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
    },
    dot: {
      height: "12px",
      width: "12px",
      borderRadius: "50%",
      display: "inline-block",
    },
  }));

    export default theme;
    export   { useStyles };