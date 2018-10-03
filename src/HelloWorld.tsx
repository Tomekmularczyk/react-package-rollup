import React from "react";

interface Props {
  text: string
}

class HelloWorld extends React.Component<Props> {
  state = {
    message: "Hello world!"
  };

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }
}

export default HelloWorld;
