import React from "react";
import CreateOrder from "./CreateOrder/CreateOrder";

class Orderly extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      newOrder : {
        name : 'Taps', PizzaType : 'VegieOverloaded' , Date : '', FlatNumber : '45062'
      },
      orders : [],
    }
  };


  render(){

    return (
      <div>
          <CreateOrder />
      </div>
    );
  }
}

export default Orderly;