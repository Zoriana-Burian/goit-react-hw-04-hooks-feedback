//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Statistics from './components/Feedback/Statistics/Statistics';
import FeedbackOptions from './components/Feedback/FeedbackOptions/FeedbackOptions';
import Section from './components/Feedback/Section/Section';
import Notification from './components/Feedback/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
        return bad + good + neutral;   
  };
  
  const countPositiveFeedbackPercentage = () => {
        return Math.round(good*100/countTotalFeedback());
  };
  
    const onLeaveFeedback = options => {
    switch (options) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  return (
     <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
                    
                    
                </Section>

                {countTotalFeedback() === 0 ? (<Notification message="No feedback given" />) 
                : (
                 
                <Section title="Statistics">
                  <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage() } />
                </Section>   
            )};
                

                
                
            </div>
        );
}





// class App extends React.Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };
    
//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return bad + good + neutral; 
      
        
//     };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//         return Math.round(good*100/this.countTotalFeedback());
//     };

//     onLeaveFeedback = (event) => {
// 		const name = event.target.name;
// 		this.setState((prevState) => ({
// 			[name]: prevState[name] + 1
// 		}));
// 	};
    
    
//     render() {
//         const {good, neutral, bad} = this.state;
//         const options = Object.keys(this.state);
//         return (
//             <div>

//                 <Section title="Please leave feedback">
//                     <FeedbackOptions
//                         options={options}
//                         onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
                    
                    
//                 </Section>

//                 {this.countTotalFeedback() === 0 ? (<Notification message="No feedback given" />) 
//                 : (
                 
//                 <Section title="Statistics">
//                   <Statistics
//                     good={good}
//                     neutral={neutral}
//                     bad={bad}
//                     total={this.countTotalFeedback()}
//                     positivePercentage={this.countPositiveFeedbackPercentage() } />
//                 </Section>   
//             )};
                

                
                
//             </div>
//         );
//     }
// };

// export default App;