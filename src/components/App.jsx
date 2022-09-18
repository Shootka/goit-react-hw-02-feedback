import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { _BUTTONS_NAME } from '../static/static';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (isNaN(Math.floor((good / (good + neutral + bad)) * 100))) {
      return 0;
    } else return Math.floor((good / (good + neutral + bad)) * 100);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return bad + good + neutral;
  };

  onLeaveFeedback = (event) => {
    const { name } = event.target;
    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={_BUTTONS_NAME} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {!neutral && !bad && !good
          ? <Notification message={'There is no feedback!'} />
          : <Section title={'Statistics'}>
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              positivePercentage={this.countPositiveFeedbackPercentage}
              total={this.countTotalFeedback}
            />
          </Section>
        }
      </div>
    );
  }
}

export default App;
