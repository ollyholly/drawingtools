import { Container, Box, Typography, Button, Card } from '@mui/material';
import data from './Assets/emoji.json';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import _ from 'lodash';

const theme = createTheme({
  palette: {
    blacky: {
      main: '#222222',
      contrastText: '#fff'
    }
  }
});

const App = () => {
  const [rolledDice, setRolledDice] = useState([]);

  const rollDice = () => {
    const emojiArray = Object.keys(data).reduce((acc, i) => ([...acc, ...data[i]]), []);

    const sample = _.sampleSize(emojiArray, 3)

    setRolledDice(sample);
  };

  useEffect(() => {
    // console.log('Rolled the dice!');
    rollDice();
  }, []);

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h3" gutterBottom my={5} align="center">
            draw me this
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            alignContent: 'center',
            justifyContent: 'center'
          }}
          mb={5}
        >
          {rolledDice.map((die, i) => (
            <Box m={1} key={i}>
              <Card variant="outlined">
                <Box p={2}>
                  <Typography variant="h3">{die}</Typography>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={rollDice}
            variant="contained"
            color="blacky"
            size="large"
            component={motion.div}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            roll me
          </Button>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default App;
