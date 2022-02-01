import React,{useState,useEffect} from 'react';
import "./App.css"
 const App =()=> {
   const [data,setDate]=useState([]);
  useEffect(()=>{
    // getdata();
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res=>res.json())
            .then(json=>setDate(json.meals))
  
  },[])
 
  return <div>
    <h1>Food Recipe App</h1>
  
<div className="container">
{data.map(item=>{
     return (<div className="box">
     <div className="content">
     <h4>Meal:{item.strMeal}</h4>
       <p>{item.strDrinkAlternate}</p>
       <p>Category:{item.strCategory}</p>
       <p>Area:{item.strArea}</p>
       <div className="head">
       <img className='img-rounded' src={item.strMealThumb}  alt="image"/>
       <p className='line-clamp'>Instructions{item.strInstructions}</p>
      
       </div>
     </div>
   </div>
     
   
    )
  }
 )}

</div>

  </div>;
};
export default App;
