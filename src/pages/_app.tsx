import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const router = useRouter();

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const changeToDarkMode = () => {
    setMode("dark");
  };

  const changeToLightMode = () => {
    setMode("light");
  };

  const goFirstPage = () => {
    router.push("/");
  };

  const goExample1Page = () => {
    router.push("/example1");
  };

  const goExample2Page = () => {
    router.push("/example2");
  };

  const goExample3Page = () => {
    router.push("/example3");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="flex justify-between bg-lime-100">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1.25rem",
            paddingBottom: "2.5rem",
            paddingTop: "2.5rem",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Button
              variant="outlined"
              onClick={changeToDarkMode}
              sx={{ color: mode === "light" ? "black" : "white" }}
            >
              Dark Mode
            </Button>
            <Button
              variant="outlined"
              onClick={changeToLightMode}
              sx={{ color: mode === "light" ? "black" : "white" }}
            >
              Light Mode
            </Button>
          </Box>

          <Box>
            <Button
              variant="outlined"
              onClick={goFirstPage}
              sx={{ color: mode === "light" ? "black" : "white" }}
            >
              Index Page
            </Button>
            <Button
              variant="outlined"
              onClick={goExample1Page}
              sx={{ color: mode === "light" ? "black" : "white" }}
            >
              Example 1
            </Button>
            <Button
              variant="outlined"
              onClick={goExample2Page}
              sx={{ color: mode === "light" ? "black" : "white" }}
            >
              Example 2
            </Button>
            <Button
              variant="outlined"
              onClick={goExample3Page}
              sx={{ color: mode === "light" ? "black" : "white" }}
            >
              Example 3
            </Button>
          </Box>
        </Box>
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
