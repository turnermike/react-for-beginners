import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// functional components vs. class components

// example of a functional component
// functional components have a props parameter and returns a react element
const Add1 = props => <h1>{props.a + props.b}</h1>;

// example of a class component
// class rather than a function
// render fuction returns the element
// only class components have access to react state and lifecycle methods
class Add2 extends React.Component {
  render() {
    return <h1>{this.props.a + this.props.b}</h1>;
  }
}

// example of class component children prop
// think of props.children as a place holder for content
const Layout = props => (
  // <div>
  <React.Fragment>
    <header>Header</header>
    <main>{props.children}</main>
    <footer>Footer</footer>
  </React.Fragment>
  // </div>
);

function App() {
  return (
    <div>
      <Add1 a={2} b={10} />
      <Add2 a={3} b={11} />
      <Layout>
        <p>line one</p>
        <p>line two</p>
      </Layout>
      <br />
      <br />
      <Layout>
        <p>line three</p>
        <p>line four</p>
      </Layout>
    </div>
  );
  // return (
  //   <div className="App">
  //     <h1>Hello React</h1>
  //     <h2>Start editing to see some magic happen!</h2>
  //   </div>
  // );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
