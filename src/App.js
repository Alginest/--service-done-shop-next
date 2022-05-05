import React, { useEffect, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Fab,
  makeStyles,
} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useGlobalContext } from "./context";
import MobileNav from "./Mobile/MobileNav";
import AnimatedRoutes from "./hooks/AnimatedRoutes";
import Loading from "./Pages/Loading";
import NavigationIcon from "@material-ui/icons/Navigation";
const useStyles = makeStyles((theme) => ({
  navigate: {
    display: "flex",
    position: "fixed",
    bottom: 30,
    right: 30,
    background: "linear-gradient(to right, #fdc830, #f37335)",
    color: "white",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
function App() {
  const { dark, loading } = useGlobalContext();
  const [scrolledY, setScrolledY] = useState(0);
  console.log(scrolledY);
  const classes = useStyles();
  const scrollWindow = () => {
    let winY = window.scrollY;
    setScrolledY(winY);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);

    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);
  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: dark ? "#fff" : "#222",
      },
      secondary: {
        main: dark ? "#222" : "#fff",
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
      type: dark ? "dark" : "light",
    },
  });
  if (loading) {
    return <Loading type={"bars"} color={"#fff"} />;
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <MobileNav />
        <AnimatedRoutes />
        {scrolledY > 1700 && (
          <Fab
            variant="extended"
            className={classes.navigate}
            onClick={scrollTop}
          >
            <NavigationIcon />
            Navigate
          </Fab>
        )}
      </ThemeProvider>
    </Router>
  );
}

export default App;
