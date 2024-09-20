import React from 'react';

class SimpleLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being created');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component has mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('ShouldComponentUpdate: Checking if update is needed');
    // Allow update if count has changed
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate: Component has updated');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is about to be removed');
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('Render: Rendering component');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default SimpleLifecycle;
