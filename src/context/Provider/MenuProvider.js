import {MenuContext} from "../_Context/MenuContext"
import React,{ useState,useEffect } from "react";
import Axios from 'axios'
import { useCookies } from 'react-cookie';
// import { useNavigate } from "react-router-dom";

export const MenuProvider = (props) => {
    const [visible,setVisible] = useState(false);
    const [resetList,setResetList] = useState(false);
    const [cookies,setCookie,removeCookie] = useCookies(['token']);
    const [userName,setUserName]=useState('');
    const [infoUser,setInforUser]=useState({});
    const { token: _token } = cookies;
    // let navigate = useNavigate();
    const checkCkick = ()=>{
        setVisible(visible===true?false:true);
      };
      const renderList = ()=>{
        setResetList(resetList===true?false:true);
      };
      const logOut = ()=>{
        removeCookie("token");
        // navigate('/login', { replace: true });
        
      }
      useEffect(() => {
        if(_token){
          decodeToken()
          setTimeout(
            () => logOut(), 
            60000
          );
        }
        
    
      
    
    
    
      }, [_token]);

      const decodeToken = ()=>{
        let promise =Axios({
          url: 'https://api-coffee-phen.herokuapp.com/api/v1/users/decode',
          method: 'POST',
          data: {token: _token }
    
    
        });
        promise.catch((err) => {
          console.log(err);
    
    
        })
        promise.then((res) => {
    
          
    
            const {name} = res.data;
            const _userName = name.split(' ').slice(1)
            
            setUserName(_userName.join(" "));
            setInforUser(res.data);
            console.log(userName)
    
        });
      }
    return (
        <MenuContext.Provider value={{ visible, checkCkick,resetList,renderList,userName,logOut}}>
          {props.children}
        </MenuContext.Provider>
      )
}