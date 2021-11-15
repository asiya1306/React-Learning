import './App.css';
//import {useState} from 'react';
import react, {Component} from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';


function App()
{
  return(
    <div className="App">
      <ClickCounter name='Asiya' />
      <HoverCounter />
    </div>
  )
  
}
export default App;






























// function App()
// {
//   const [count, setCount] = useState(0)
//   return(
//     <div>
//       <h3>Count: {count}</h3>
//       <button onClick = {()=> setCount(count + 1)}>Update</button>
//     </div>
//   )
  
// }
// export default App;








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class App extends Component {



//   constructor()
//   {
//   super();
//   this.state={
//     data:"Asiya"
//     }

//   }
//   apple()
//   {
//     this.setState({data:"Shaikh"})
//   }
//   render()
//   {
//     return (
//       <div className="App">
//         <h1>{this.state.data}</h1>
//         <button onClick={()=>this.apple()}>Update data</button>
        
//       </div>
//     );
//   }
  
// }

// export default App;
