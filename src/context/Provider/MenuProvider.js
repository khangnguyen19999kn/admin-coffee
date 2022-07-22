import {MenuContext} from "../_Context/MenuContext"
import React,{ useState } from "react";

export const MenuProvider = (props) => {
    const [visible,setVisible] = useState(false);
    const [resetList,setResetList] = useState(false);
    const checkCkick = ()=>{
        setVisible(visible===true?false:true);
      };
      const renderList = ()=>{
        setResetList(resetList===true?false:true);
      };
    return (
        <MenuContext.Provider value={{ visible, checkCkick,resetList,renderList}}>
          {props.children}
        </MenuContext.Provider>
      )
}