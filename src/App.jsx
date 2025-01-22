import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Container, Typography, Button } from '@mui/material';
import Options from './components/optionss/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    Swal.fire({
      title: 'Welcome to Sip Happens Café!',
      text: 'Thank you for visiting! Please leave your feedback about our service.',
      imageUrl: '/public/cafe-icon.svg',
      imageWidth: 100,
      imageHeight: 100,
      confirmButtonText: 'Got it!',
      timer: 7000,
      timerProgressBar: true,
    });
  }, []);

  const updateFeedback = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Sip Happens Café
      </Typography>
      <Options onLeaveFeedback={updateFeedback} />
      {totalFeedback > 0 ? (
        <>
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={resetFeedback}
            sx={{ marginTop: '2rem' }}
          >
            Reset Feedback
          </Button>
        </>
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </Container>
  );
};

export default App;
