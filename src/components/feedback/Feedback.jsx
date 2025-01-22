import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Feedback = ({ feedback, total, positivePercentage }) => {
  const chartData = {
    labels: ['Good', 'Neutral', 'Bad'],
    datasets: [
      {
        data: [feedback.good, feedback.neutral, feedback.bad],
        backgroundColor: ['#4caf50', '#ffc107', '#f44336'],
        hoverBackgroundColor: ['#66bb6a', '#ffca28', '#e57373'],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: context => {
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        mt={6}
        p={4}
        border="2px solid #ddd"
        borderRadius="20px"
        bgcolor="#fff"
        boxShadow="0px 6px 15px rgba(0, 0, 0, 0.1)"
      >
        <Typography variant="h4" gutterBottom>
          Feedback Statistics
        </Typography>
        <Doughnut data={chartData} options={chartOptions} />
        <Typography variant="h6" mt={3}>
          Total Feedback: {total}
        </Typography>
        <Typography variant="h6">
          Positive Feedback: {positivePercentage}%
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Feedback;
