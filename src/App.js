import React from 'react';

import AddItem from './components/addItem';
import FilterItem from './components/filterItem';
import DisplayList from './components/displayList';

import './App.css';

function App() {
  /* 
  * The other way
  * 
  const [stateList, setList] = useRecoilState(list);
  const addItem = () => {
    setList([...stateList, { id: Math.random(), text: inputValue }]);
  }
 */
  
  return (
    <div className="app">
      <div className="action">
        <AddItem />
        <FilterItem />
      </div>
      <DisplayList />
    </div>
  );
}

export default App;
