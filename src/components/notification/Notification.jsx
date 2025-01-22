import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Notification = ({ message }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
    <Typography variant="h6" color="textSecondary" mt={2}>
      {message}
    </Typography>
  </motion.div>
);

export default Notification;
