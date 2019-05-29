import React from 'react';
import { render } from 'react-dom';
import Button from "./components/Button";
import menu from "../menu-data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diner1: {
        mains: "",
        desserts: "",
        starters: ""
      },
      diner2: {
        mains: "",
        desserts: "",
        starters: ""
      },
      canNotOrder: true
    }
  }
  onClick = (diner) => ({ target }) => {
    const { name, value } = target;
    this.setState({
      ...this.state,
      [diner]: {
        [name]: value,
        ...this.state[diner]
      }
    });
  }
  componentDidMount() {
    console.log(menu);
  }
  componentDidUpdate() {
    const { diner1, diner2 } = this.state;
    if (!diner1.mains || !diner2.mains) this.setState({ canNotOrder: true });
    // check to see if both diners have >= 2 courses 
    else if (!diner1.desserts && !diner1.starters) this.setState({ canNotOrder: true });
    else if (!diner2.desserts && !diner2.starters) this.setState({ canNotOrder: true });
    else if (diner1.desserts === "Cheescake" && diner2.desserts === "Cheescake") this.setState({ canNotOrder: true });
    else if (diner1.starters === "Prawn cocktail" && diner1.mains === "Salmon fillet") this.setState({ canNotOrder: true });
    else if (diner2.starters === "Prawn cocktail" && diner2.mains === "Salmon fillet") this.setState({ canNotOrder: true });
    else this.setState({ canNotOrder: false });
   }
    render() {
      const { canNotOrder } = this.state; 
        return (
          <>
          
          <h1>Menu Test</h1>
          <Menu menu={menu} />
          <Button isDisabled={canNotOrder} />
        </>
      );
    }
}

render(<App />, document.getElementById('root'));
