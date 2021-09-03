import React from 'react';

const Tab=({number,onDeleteHandler,index})=>{

    return(
        <p className="tab">tab{number}
          <span onClick={()=>onDeleteHandler(index)}>x</span>
        </p>
    )
}

export default Tab;