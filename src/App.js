import './App.css';
import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Heading></Heading>
      <div className='activity-container'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
