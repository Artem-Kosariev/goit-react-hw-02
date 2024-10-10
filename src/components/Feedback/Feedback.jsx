import css from './Feadback.module.css'

function Feedback({ values, total, positiveFeedback  }) {
  return (
    <>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
}

export default Feedback;