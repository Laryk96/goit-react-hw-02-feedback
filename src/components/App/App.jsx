import React from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';
import { Container } from './App.styled';
class App extends React.Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  hendleCounter = e => {
    const key = e.currentTarget.textContent;

    this.setState(prevState => ({ [key]: (prevState[key] += 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral } = this.state;
    const totalFeedback = this.countTotalFeedback();

    if (good === 0) {
      return Math.round((neutral / totalFeedback) * 50);
    }

    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const statisticsList = Object.keys(this.state);

    const percentage = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();
    return (
      <Container>
        <FeedbackOptions
          options={statisticsList}
          onLeaveFeedback={this.hendleCounter}
        />

        {totalFeedback !== 0 ? (
          <Statistics
            good={this.state.Good}
            neutral={this.state.Neutral}
            bad={this.state.Bad}
            total={totalFeedback}
            positivePercentage={percentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}

export { App };
//  <h2>Please leve feedback</h2>
//         <ul>
//           {statistics.map((value, index) => (
//             <li key={index}>
//               <button onClick={this.hendleCounter}>{value[0]}</button>
//             </li>
//           ))}
//         </ul>
