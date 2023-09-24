import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import { Drawmoji } from './Games/Drawmoji/Drawmoji';
import { WhattaDraw } from './Games/WhattaDraw/WhattaDraw';

const App = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Drawmoji />} />
            <Route path="/drawmoji" element={<Drawmoji />} />
            <Route path="/whattadraw" element={<WhattaDraw />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Container>
  );
};

export default App;
