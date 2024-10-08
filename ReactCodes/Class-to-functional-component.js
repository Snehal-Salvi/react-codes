import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    componentDidMount() {
        console.log('Component mounted');
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}


//functional component
import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Step 3: State initialization

    const increment = () => {
        setCount(count + 1); // Step 4: Update state
    };

    useEffect(() => {
        console.log('Component mounted'); // Step 5: Lifecycle method replacement
    }, []); // Empty array means this runs once, similar to componentDidMount

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
 