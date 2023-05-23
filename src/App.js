import AddInfo from "./components/AddInfo";
import Box from "./components/Box";
import './App.css';
// import Data from './data.json';
import { useCallback, useEffect, useState } from "react";
// console.log(Data);



function App() {
  const [list,setList] = useState([]);
  const [sortBy,setSortBy] = useState('petName');

  const fetchData = useCallback(()=>{
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>setList(data))
  },[]);

  useEffect(fetchData,[fetchData])
  
  const filterList = list.sort((a,b)=>{
    return (a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1)
  })
  // console.log(filterList)
  return (
    <>
      <Box sortBy={sortBy} 
           onSortChange={(mySort)=>setSortBy(mySort)}/>
      <div id="list">
        <ul>
        {filterList.map((item)=>
         (
          <AddInfo key={item.id} 
                   info={item}
                   //onDelete={함수} function 함수(매개변수){} 
                   onDelete={(listId)=>{
                    setList(list.filter((item)=>{return item.id !== listId}))
                  }}/>
          )) 
        }
        </ul>
      </div>
    </>
  );
}

export default App;
