import React from "react";
import './App.css';

//Main Page Import
import Main from "./pages/main";

//WITHIN THIS CLASS RENDER THE COMPONENTS
class App extends React.Component {
  //Main Header
  render(){
    return(
      <div>
        <Main />,
      </div>
    )
  }
  //Like Button
  //Form

}


// function App() {
//   return (
//     <div className="App">
//         <h1>This is The Main Page</h1>
//     </div>
//   );
// }

export default App;
