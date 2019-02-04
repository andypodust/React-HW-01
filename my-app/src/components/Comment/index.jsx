import React, { Component } from "react";

import rateOption from "../config/rate-option.json";

class Comment extends Component {
  state = {
    text: "",
    rate: ""
  };

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   this.props.onSubmit(this.state.text, this.state.rate);
  //   this.reset();
  // };

  handleSubmit = e => {
    const { text, rate } = this.state;

    e.preventDefault();
    this.props.onSubmit(text, rate);
    this.reset();
  };

  handleChangeComment = ({ target: { value } }) => {
    this.setState({
      text: value
    });
  };

  handleChangeRate = ({ target: { value } }) => {
    this.setState({
      rate: value
    });
  };

  reset = () => {
    this.setState({
      text: "",
      rate: ""
    });
  };

  render() {
    const { text, rate } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="text"
          value={text}
          onChange={this.handleChangeComment}
          placeholder="Leave your comment"
        />
        <hr />
        <label>
          Select your rate
          <select name="rate" value={rate} onChange={this.handleChangeRate}>
            <option value="" disabled>
              ...
            </option>
            {rateOption.map(item => (
              <option key={item.id} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add your comment</button>
      </form>
    );
  }
}

export default Comment;
