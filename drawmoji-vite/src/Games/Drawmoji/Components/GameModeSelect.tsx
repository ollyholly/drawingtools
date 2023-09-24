import { Box, Select, FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import { type GameMode } from '../Assets/gameModes';

export const GameModeSelect = ({
  value,
  onChange
}: {
  value: GameMode;
  onChange: (value: GameMode) => void;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as GameMode);
  };

  return (
    <Box sx={{ minWidth: 200 }} mb={5}>
      <FormControl fullWidth>
        <InputLabel id="gamemode-select-label">Game Mode</InputLabel>
        <Select
          labelId="gamemode-select-label"
          id="gamemode-select"
          value={value}
          label="Game Mode"
          onChange={handleChange}
        >
          <MenuItem value="story">Story</MenuItem>
          <MenuItem value="animals">Animals</MenuItem>
          <MenuItem value="animals-emotions">Animals + Emotions</MenuItem>
          <MenuItem value="animals-plants">Animals + Plants</MenuItem>
          <MenuItem value="animals-vehicles">Animals + Vehicles</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
