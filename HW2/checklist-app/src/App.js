import './App.css';
import {useState} from 'react';

const ChecklistApp = () => {
  const [checklist, setChecklist] = useState([])
  const [item, setItem] = useState('')

  function addItem(){
    const newList = checklist.concat(
      {
        index : checklist.length + 1, 
        name : item
      }
    )
    setChecklist(newList)
    setItem('')
  }

  function clearList(){
    const clearedList = []
    setChecklist(clearedList)
  }

  function handleRemove(index){
    const updatedList = checklist.filter(
      (item) => item.index !== index
    )
    setChecklist(updatedList)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Checklist</h1>
        <div>
          <input 
              type = 'text' 
              value = {item}
              onChange = {(e) => setItem(e.target.value)} />
          <button type = 'button' onClick = {addItem} >Add Item</button>
          <button onClick = {clearList} >Clear Checklist</button>
          <ul>
            {checklist.map((item) => (
            <li key = {item.index} onClick = {() => handleRemove(item.index)}> {item.name} </li>
            ))
          }</ul>
        </div>
        
      </header>
    </div>
  );
}

export default ChecklistApp;
