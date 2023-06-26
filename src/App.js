import { Container, Box, Typography, Button, Card, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
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
  const [gameMode, setGameMode] = useState('story');

  const handleChange = (event) => {
    setGameMode(event.target.value );
    console.log('GEME MODE CHANGED TO', gameMode)
  };

  const rollDice = () => {
    const allEmoji = Object.keys(data).reduce((acc, i) => ([...acc, ...data[i]]), []);
    let emojiMode = allEmoji
    let diceNumber = 3

    if (gameMode == 'animals') {
      emojiMode = data['animals']
      diceNumber = 2
    }

    const sampleEmoji = _.sampleSize(emojiMode, diceNumber)

    setRolledDice(sampleEmoji);
  };

  useEffect(() => {
    // console.log('Rolled the dice!');
    rollDice();
  }, [gameMode]);

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
            alignContent: 'center', flexDirection: 'column'
}}>
          <Typography variant="h3" gutterBottom my={5} align="center">
            draw-moji
          </Typography>
        <Box sx={{ minWidth: 200 }} mb={5}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Game Mode</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gameMode}
          label="Game Mode"
          onChange={handleChange}
        >
          <MenuItem value='story'>Story</MenuItem>
          <MenuItem value='animals'>Animals</MenuItem>
        </Select>
      </FormControl>
    </Box>
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
