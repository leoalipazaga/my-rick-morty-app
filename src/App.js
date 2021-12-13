import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Input from './components/Input/Input';

import './App.css';

function App() {
  return (
    <div className="App">
      <Button label="Search"></Button>
      <Card title='Rick Sanchez' city='Citadel' status='unknown' />
      <Input placeholder='Search for character' type='text'/>
    </div>
  );
}

export default App;
