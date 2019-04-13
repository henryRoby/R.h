import React from 'react'

class confirm extends Component {
    render(){
        return (
            <div>
            <button	onClick={() => {props.deleteUser(user.id)}}>Oui</button>
            </div>
        );
  }
}
    
export default confirm;