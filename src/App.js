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

const allEmoji = Object.keys(data).reduce((acc, i) => ([...acc, ...data[i]]), []);

const GAME_MODES = {
  'animals': [data['animals'], data['animals']],
  'animals-plants': [data['animals'], data['plants']],
  'animals-vehicles': [data['animals'], data['vehicles']],
  'animals-emotions': [data['animals'], data['emotions']],
  'story': [allEmoji, allEmoji, allEmoji]
}

const sampleEmoji = (emojiSet) => _.sampleSize(emojiSet, 1)

const collectCombo = (schema) => schema.map(set => sampleEmoji(set))


const App = () => {
  const [rolledDice, setRolledDice] = useState([]);
  const [gameMode, setGameMode] = useState('story');

  const handleChange = (event) => {
    setGameMode(event.target.value );
  };

  const rollDice = () => {

    const selectedEmoji = collectCombo(GAME_MODES[gameMode])

    setRolledDice(selectedEmoji);
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
          <MenuItem value='animals-emotions'>Animals + Emotions</MenuItem>
          <MenuItem value='animals-plants'>Animals + Plants</MenuItem>
          <MenuItem value='animals-vehicles'>Animals + Vehicles</MenuItem>
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
