import { useState, useEffect, Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //eslint-disable-next-line
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const Button = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Some goes wrong.');
    }
  }, [counter]);

  return <button onClick={() => setCounter((c) => c + 1)}>Counter: {counter}</button>;
};


export const ErrorBoundry = () => {

  return (
    <div>
      <ErrorBoundary>
        <Button />
      </ErrorBoundary>
    </div>
  );
};
