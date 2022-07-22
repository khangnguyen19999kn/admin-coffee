import React, {useEffect} from 'react'
import MenuColapse from '../component/MenuColapse'
import TableProducts from '../component/TableProduct'
import Axios from 'axios'

import { useCheckToken } from '../hook/CheckToken';

export default function PageProduct() {

      useCheckToken();
    // useEffect(() => {
    //     const { token: _token } = cookies;
    //     if (!_token) {
    //         navigate('/login', { replace: true });
    //     }else 
    //     {
       
    //         Axios({
    //           url: 'http://localhost:9696/api/v1/users/decode',
    //           method: 'POST',
    //           data: {token: _token }
        
        
    //         }).catch((err) => {
    //             const {status} = err.response;
    //             if(status===500){
    //                 navigate('/login', { replace: true });
    //             }
              
        
        
    //         }).then((res) => {
    //             const {name,level,phoneNumber,exp_token} = res.data
    //             console.log(exp_token)
        

        
        
    //         });
    
    //     }
    
    //   }, []);

    return (
        <div>

            <MenuColapse />




          
            <TableProducts>

            </TableProducts>
        </div>


    )
}
