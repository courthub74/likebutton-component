import React from 'react';
import '../App.css';

//Like Button Import
import Like1 from "../components/likebutton";

//Form Import
import Form from '../components/form';

class Main extends React.Component{
    render(){
        return(
            <div className='App'>
    
                <h1>This is the Main Page</h1>
    
                    <p>Hit the like button BELOW</p>

                        <br></br>
    
                    <Like1 />

                        <br></br>

                    <p className='lines'>Then fill out the forms below</p>

                        <br></br>

                    <Form />
    
            </div>
        )
    }
    
}

export default Main;