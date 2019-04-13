
import React, {Component} from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';


class Tableau extends Component {
  render() {
    return(
      
      <div className="row">
        {this.props.users.length > 0 ? (
          this.props.users.map(user => (

            <div key ={user.id} className="col-md-4">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">{user.Produits}</h5>
            <div class="card-text" id="tronque">{user.Descr}</div>
            <div>{user.Prix}</div>
          
          <div class="card-footer">
            <label htmlFor="">comment</label></div>
              </div>

            </div>
            </div>
          ))
        ) : (
          < >
          
          </>
        )}
        
      </div>
  
      )
      }
  }



export default Tableau;