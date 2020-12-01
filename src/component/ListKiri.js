import React, {Component} from 'react';


class ListKiri extends Component {
  

     render(){
         return(
        <li className="media">
         <img src={this.props.image} style={{"width":"150px"}} className="mr-3" alt="..."/>
         <div className="media-body">
           <h5 className="mt-0 mb-1">{this.props.title}</h5>
           {this.props.description}
         </div>
       </li>);
     }
}

export default ListKiri