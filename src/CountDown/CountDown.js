import React, { Component } from "react";
import "./CountDown.css";
// import clocks from "../../public/clock.svg";

export default class Timer extends Component {
  state = {
    minutes: 59,
    seconds: 59,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div className="time-out">
        {minutes === 0 && seconds === 0 ? (
          <span>OUT</span>
        ) : (
          <div className="clock">
              <img src="../../clock.svg" alt="clock" />
            <span>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
        )}
      </div>
    );
  }
}
