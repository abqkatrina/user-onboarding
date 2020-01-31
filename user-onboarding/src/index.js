import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Card } from 'reactstrap';
import './App.css';
import './index.css';
import LoginForm from './components/Form/Form';

function App() {

//ERASE
    let ARRAY = [];
    let VALUE = '';



   return (
    <div className='body'>
      <Navbar>
        <ul>
          <li><a href='#top'>Home</a></li>
          <li>Search</li>
        </ul>
      </Navbar>
      <div>
        <LoginForm id='top' />
      </div>
      <div className='list'>
        <Card>
            <ul>
                {ARRAY.map(()=> (
                   <li key={VALUE}></li>
                ))}            
            </ul>
        </Card>     
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));


