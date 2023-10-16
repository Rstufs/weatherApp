import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App.tsx'
import './index.css'
import { theme, rootElement } from './theme.tsx';

ReactDOM.createRoot(rootElement!).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StyledEngineProvider>,
)
