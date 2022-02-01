import React,{useState,useEffect} from 'react';
import "./App.css"
 const SecondApp =()=> {
   const [data,setDate]=useState([]);
  useEffect(()=>{
    // getdata();
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res=>res.json())
            .then(json=>setDate(json.categories))
  
  },[])
 
  return <div>
    <h1>Food Recipe App</h1>
  
<div className="container">
{data.map(item=>{
     return (<div className="box">
     <div className="content">
       <h4>{item.strCategory}</h4>
       <img src={item.strCategoryThumb} />
       <p className='line-clamp'>Instructions{item.strCategoryDescription}</p>
     
       
      
      
     </div>
   </div>
     
   
    )
  }
 )}

</div>

  </div>;
};
export default SecondApp;
