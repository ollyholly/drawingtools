import { Container, Box, Typography, Card } from '@mui/material';
import { GAME_MODES, type GameMode } from './Assets/gameModes';
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import _ from 'lodash';
import { theme } from './Components/Theme';
import { RollDiceButton } from './Components/RollDiceButton';
import { GameModeSelect } from './Components/GameModeSelect';

const sampleEmoji = (emojiSet: string[]): string[] => _.sampleSize(emojiSet, 1);

const collectCombo = (schema: string[][]) => schema.map((set) => sampleEmoji(set)) as string[][];

const App = () => {
  const [rolledDice, setRolledDice] = useState<string[]>([]);

  const [gameMode, setGameMode] = useState<GameMode>('story');

  const rollDice = () => {
    const selectedEmoji = collectCombo(GAME_MODES[gameMode]).flat();
    setRolledDice(selectedEmoji);
  };

  useEffect(() => {
    rollDice();
  }, [gameMode]);

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexDirection: 'column'
          }}>
          <Typography variant="h3" gutterBottom my={5} align="center">
            draw-moji
          </Typography>
          <GameModeSelect value={gameMode} onChange={setGameMode} />
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
          mb={5}>
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
          <RollDiceButton onClick={rollDice} />
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default App;
