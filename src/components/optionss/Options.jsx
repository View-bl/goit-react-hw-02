import { Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';

const buttonVariant = {
  hover: {
    scale: 1.1,
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
  },
};

const Options = ({ onLeaveFeedback, onReset }) => (
  <Stack direction="row" spacing={4} justifyContent="center" mt={4}>
    {['good', 'neutral', 'bad'].map(type => (
      <motion.div key={type} whileHover="hover" variants={buttonVariant}>
        <Button
          variant="contained"
          color={
            type === 'good'
              ? 'success'
              : type === 'neutral'
              ? 'warning'
              : 'error'
          }
          size="large"
          sx={{
            padding: '1rem 2rem',
            fontSize: '1.25rem',
            borderRadius: '12px',
          }}
          onClick={() => onLeaveFeedback(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      </motion.div>
    ))}
    {onReset && (
      <motion.div whileHover="hover" variants={buttonVariant}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            padding: '1rem 2rem',
            fontSize: '1.25rem',
            borderRadius: '12px',
          }}
          onClick={onReset}
        >
          Reset
        </Button>
      </motion.div>
    )}
  </Stack>
);

export default Options;
