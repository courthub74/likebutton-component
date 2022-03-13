import React from "react";
import './components.css';

class Like1 extends React.Component {

    state = {
        display: false
    }

    toggle = () => {
        const currentStatus = this.state.display;
        this.setState({
            display: !currentStatus
        })
    }

    render() {
        let content = null;
        if(this.state.display){
            content= <h4>You Like This</h4>
        }
        return(
            <div className="likebuttonsection">
                <button className="likebutton" onClick={this.toggle}>Like Button{content}</button>
            </div>
            
        )
        
    }
    
}

export default Like1;