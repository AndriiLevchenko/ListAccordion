import React, {useState} from 'react';
import atomize from '@quarkly/atomize';
//import Theme from "@quarkly/theme";
//import './App.css';

// const Box1 = atomize.div();
// //<Box1 backgroundColor='red' color="red" />
// const Box2 = atomize.div();
// //<Box2 backgroundColor='blue' color="blue" />

const Div=atomize.div();
const Button=atomize.button();
const Ul=atomize.ul();
const Li=atomize.li();



const MyComponent1 = ({ className }) => {
    return <div className={ className } />;
};
const Box1 = atomize(MyComponent1);
const MyComponent2 = ({ className }) => {
    return <div className={ className } />;
};
const Box2 = atomize(MyComponent2);



function ListAccordion(props) {
    const lists=props.lists;
    const [listNumberOpened, setListNumber]=useState(null);
    function change(event){
        setListNumber(event.target.id);
    }

    return(
            <Div    display="block"
                    max-width="80%"
                    margin="0 auto"
                    overflow="hidden"
                    color="#4a4a4a"
                    font-size="16px"
                    padding="10px 40px 10px"
            >
                    {lists.map((list, i)=>{
                        return(
                            <div  key={i}>
                                <Button width="98%"
                                        margin="11px 0"
                                        padding="8px 0"
                                        border="1px solid #112200"
                                        border-radius="5px"
                                        font-weight="700" 
                                        id={i} 
                                        onClick={(event)=>change(event)}
                                >
                                    {props.lists[i][0]}
                                </Button>
                            {/* In this place there is no mechanizm to switch classes */}
                                <Div className={ listNumberOpened === i.toString() ?    <Box1   backgroundColor="green" 
                                                                                                color="green"
                                                                                        /> 
                                                                                    :   <Box2   backgroundColor="red" 
                                                                                                color="red"
                                                                                                />
                                }> 
                                    <Ul background="#fffddd" 
                                        margin="0" 
                                        padding="0"
                                    >
                                            {props.lists[i].map((listItem, j)=>{
                                                return(
                                                    <Li key={j} 
                                                        display="flex" 
                                                        justify-content="center"  
                                                        color="#001" 
                                                        margin="4px" 
                                                        padding="4px"
                                                    >
                                                        { j===0 ? null : <section> {listItem}</section> }
                                                    </Li>
                                                )
                                            })}
                                    </Ul>
                                </Div>
                            </div>
                        )
                    })}   
            </Div>     
      
    )  
}
export default ListAccordion;