import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
export { FeedbackOptions };
