class App extends React.Component {
  state = { count: 0 };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(`Count: ${this.state.count}`);
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
/*
ANS: Count: 1

Initially, this.state.count is 0. After clicking the button:

The count will be incremented by 1.
The console will log Count: 1 after the state has been updated.
So, "Count: 1" will be logged to the console after the button is clicked. */
