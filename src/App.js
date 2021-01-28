import { useState } from 'react'
import Tasks from './component/Tasks'
import Header from './component/Header'


function App() {
  
  const [tasks, seTasks] = useState([
        
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    
    }, 

    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    
    }, 

    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    
    }, 


])



  return (
      <div className="container">
        <Header  />
        <Tasks tasks={tasks} />
      </div>
  );

}

// class App extends React.component {
  
//   render() {
//     return <h1> Hello World a class</h1>
//   }
// }

export default App;
