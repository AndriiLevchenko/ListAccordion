import React, {useState} from 'react';
import './App.css';

function ListAccordion(props) {
    const lists=props.lists;
    const [listNumberOpened, setListNumber]=useState(null);
    function change(event){
        setListNumber(event.target.id);
    }

    return(
            <div className={'accordionWrapper'}>
                    {lists.map((list, i)=>{
                        return(
                            <div  key={i}>
                                <button className={'accordionHead'}  id={i} onClick={(event)=>change(event)}>
                                    {props.lists[i][0]}
                                </button>
                                <div className={ listNumberOpened === i.toString() ? 'accordion100' : 'accordion0'}> 
                                    <ul>
                                            {props.lists[i].map((listItem, j)=>{
                                                return(
                                                    <li key={j} >
                                                        { j===0 ? null : <section> {listItem}</section> }
                                                    </li>  
                                                )
                                            })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}   
            </div>     
          
    )  
}
export default ListAccordion;