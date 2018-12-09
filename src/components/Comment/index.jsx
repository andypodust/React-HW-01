import React, { Component } from "react";

class Comment extends Component {
  state = {
    text: "",
    rate: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.text, this.state.rate);
    this.reset();
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
          onChange={this.handleChange}
          placeholder="Leave your comment"
        />
        <hr />
        <label>
          Select your rate
          <select name="rate" value={rate} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <button type="submit">Add your comment</button>
      </form>
    );
  }
}

export default Comment;
