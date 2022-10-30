
import './App.css';
import Formsvat from './Formsvat';
import ShowDate from './ShowDate';
import States1 from './States1';

function App() {

const date = new Date();

const today = date.getDate() + " / " + (date.getMonth() + 1) + " / " + date.getFullYear();

  return (
    <div className="App">
      
      <Formsvat />
      <ShowDate />
      <States1 />
      <ShowDate today ={today} name = "abc"/>
      
    </div>
  );
}

export default App;
