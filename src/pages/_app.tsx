import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {  Box, Button } from '@mui/material';
import {  useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {

  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const router = useRouter();

  

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  

  const changeToDarkMode = () => {
    setMode('dark')
  }

  const changeToLightMode = () => {
    setMode('light')
  }

  const goFirstPage = () => {
    router.push('/');
  }

  const goSecondPage = () => {
    router.push('/page2');
  }

  const goThirdPage = () => {
    router.push('/page3');
  }

  
  return <ThemeProvider theme={theme}>
    <CssBaseline />
 

    <div className='flex justify-between bg-lime-100'>
      <Box  
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.25rem',
          paddingBottom:  '2.5rem',
          paddingTop:  '2.5rem',
          justifyContent: 'space-between'
        }}> 
          <Box>
            <Button variant="contained" onClick={changeToDarkMode} sx={{ color: mode === 'light' ? 'black' : 'white'}}>
              Dark Mode
            </Button>
            <Button variant="contained" onClick={changeToLightMode} sx={{ color: mode === 'light' ? 'black' : 'white'}}>
              Light Mode
            </Button>
          </Box>

          <Box>
            <Button variant="contained" onClick={goFirstPage} sx={{ color: mode === 'light' ? 'black' : 'white'}}>Index Page</Button>
            <Button variant="contained" onClick={goSecondPage} sx={{ color: mode === 'light' ? 'black' : 'white'}}>Second Page</Button>
            <Button variant="contained" onClick={goThirdPage} sx={{ color: mode === 'light' ? 'black' : 'white'}}>Third Page</Button>
          </Box>
    </Box>
    </div>
    <Component  {...pageProps} />
  </ThemeProvider>

}
