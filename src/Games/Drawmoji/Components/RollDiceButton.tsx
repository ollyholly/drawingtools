import { Button } from '@mui/material';
import { darken } from '@mui/material/styles';
import { theme } from '../../../Theme';
import { motion } from 'framer-motion';

export const RollDiceButton = ({ onClick }: { onClick: () => void }) => (
  <Button
    onClick={onClick}
    variant="contained"
    size="large"
    component={motion.div}
    sx={{
      backgroundColor: theme.palette.blacky.main,
      '&:hover': { backgroundColor: darken(theme.palette.blacky.main, 0.15) }
    }}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
  >
    roll me
  </Button>
);
