import React, { Component } from "react";
import Header from "./Header/index";
import SignIn from "./Sign-in/index";
import SignUp from "./Sign-up";
import Menu from "./Menu/index";
import MenuFilter from "./MenuFilter/index";
import OrderHistoryTable from "./OrderHistoryTable";
import Comment from "./Comment/index";
import CommentList from "./CommentList";

// config
import menuList from "./config/menu.json";
import v4 from "uuid/v4";

const menuFilter = filter =>
  menuList.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

class App extends Component {
  state = {
    filter: "",
    comments: []
  };

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value
    });
  };

  handleAddComment = (text, rate) => {
    this.setState(prevState => ({
      comments: [
        {
          id: v4(),
          text,
          rate
        },
        ...prevState.comments
      ]
    }));
  };

  render() {
    const { filter, comments } = this.state;

    const filteredMenu = menuFilter(filter);

    return (
      <div>
        <Header />
        <SignIn />
        <SignUp />
        <hr />
        <MenuFilter
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <Menu menuList={filteredMenu} />
        <hr />
        <OrderHistoryTable />
        <hr />
        <Comment onSubmit={this.handleAddComment} />
        <CommentList comments={comments} />
      </div>
    );
  }
}

export default App;
