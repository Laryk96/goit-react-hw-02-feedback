import {
  Titile,
  FeedbackList,
  FeedbackItem,
  Button,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section>
      <Titile>Please leave feedback</Titile>
      <FeedbackList>
        {options.map((value, index) => (
          <FeedbackItem key={index}>
            <Button onClick={onLeaveFeedback}>{value}</Button>
          </FeedbackItem>
        ))}
      </FeedbackList>
    </section>
  );
};

export { FeedbackOptions };
