import { useState, useEffect } from "react";
import './App.css'
import Description from '../Description/Description';
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';



function App() {

  const DCD = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const feedbackclicks = localStorage.getItem("fClicks");
    return feedbackclicks != null
      ? JSON.parse(feedbackclicks)
      :
      DCD
      ;
  });

  useEffect(() => {
    localStorage.setItem("fClicks", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const onReset = () => setFeedback(DCD);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

	

  return (
    <>
      <Description />

      <Options
        onUpdate={updateFeedback}
        onReset={onReset}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={feedback}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
  

export default App




