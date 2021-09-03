import React,{useState}from 'react';
import Tab from './Tabs/tab';
import './tablist.css'

const TabList=()=>{
     const [tabs,setTabs]=useState([1,2,3]);
     const [leftArrowClick,setLeftArrowClick]=useState(0);

    const addTabHandler=()=>{
        if(tabs.length>9){
            return;
        }
        const newArr=[];
        for(let i=0;i<tabs.length;i++){
            newArr.push(i+1);
        }
        newArr.push(tabs.length+1);
       setTabs(newArr);
    }

    const onDeleteHandler=(index)=>{
        const newArr=[...tabs];
        newArr.splice(index,1);
        const newArr2=[];
        for(let i=0;i<newArr.length;i++){
            newArr2.push(i+1);
        }
        setTabs(newArr2);
        // console.log(newArr);
    }

    const onLeftArrowHandler=()=>{
        console.log(leftArrowClick);
        if(leftArrowClick+4<tabs.length){
            setLeftArrowClick(leftArrowClick+1);
        }
        
    }

    const onRightArrowHandler=()=>{
         if(leftArrowClick>0){
            setLeftArrowClick(leftArrowClick-1);
         }
         
    }

    return(
        <div className="container">
            <div className="content-slot">
                {
                  leftArrowClick!==0&& <p onClick={onRightArrowHandler} style={{fontSize:"25px",marginRight:'10px',opacity:'0.5'}}>{'<'}</p>  
                }
                {tabs.slice(0+leftArrowClick,4+leftArrowClick).map((i,t)=>(
                <Tab key={t} 
                number={i}
                index={t} 
                onDeleteHandler={onDeleteHandler} />
    
                ))}
                {
                  tabs.length>4 &&leftArrowClick+4<tabs.length &&<p onClick={onLeftArrowHandler} style={{fontSize:"25px",marginLeft:'10px',opacity:'0.5'}}>{'>'}</p>
                }
            </div>
          <div className="add-button" onClick={addTabHandler}>
                <h4>+</h4>            
            </div>
        </div>
    )
}

export default TabList;