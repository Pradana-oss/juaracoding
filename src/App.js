import React, {Component} from 'react';
import ListKiri from './component/ListKiri';



class app extends Component {

  constructor(props){
    super(props);
      this.state = {
        product :[]
      };
  }


  componentDidMount(){
    this.getData();
  }

  getData(){
    fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(json=>{
              console.log(json);
              this.setState({
                product:json
              });
              console.log(this.state)
            })
  }

  render(){
    return( 
  <div class="container">  
  <div className="row">

    <div className="col-md-5 order-md-2 mb-4">
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-muted">Your cart</span>
      <span className="badge badge-secondary badge-pill">3</span>
    </h4>
    <ul className="list-group mb-3">
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Second product</h6>
          <small className="text-muted">Brief description</small>
        </div>
        <span className="text-muted">$8</span>
      </li>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Third item</h6>
          <small className="text-muted">Brief description</small>
        </div>
        <span className="text-muted">$5</span>
      </li>
      <li className="list-group-item d-flex justify-content-between bg-light">
        <div className="text-success">
          <h6 className="my-0">Promo code</h6>
          <small>EXAMPLECODE</small>
        </div>
        <span className="text-success">-$5</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (USD)</span>
        <strong>$20</strong>
      </li>
    </ul>
    </div>

    <div className="col-md-7 order-md-1 mb-4">
      <ul className="list-unstyled">
        
        {this.state.product.map(element => {

          return <ListKiri image={element.image} title={element.title} description={element.description}/>

        })}

      </ul>
    </div>
    </div>
  </div>)
  }
}
export default app
// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {props.title} <code>{props.kalimat}</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
