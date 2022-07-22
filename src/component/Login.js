import React  from 'react'
import { useForm } from "react-hook-form";
import Axios from 'axios'
// import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

export default function Login() {
    let navigate = useNavigate();
    const [cookies, setCookie,removeCookie] = useCookies(['token']);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            phoneNumber: "",
            password: "",
            level:"Client"
       
        }
      });
      const onSubmit = (data) => {
        //   console.log(data);
          let promise = Axios({
            url: 'https://coffeepha.ml/api/v1/users/login',
      
            method: 'POST',
            data:{...data}
      
          });
          promise.catch((err) => {
            console.log(err.response.data);
            // console.log('Đăng nhập thất bại')
          })
          promise.then((result) => {
            setCookie('token', result.data.token, { path: '/' });
            navigate('/list-product', { replace: true });
            
            console.log('Đăng nhập thành công')
            
      
          });
          
      }
    return (
        <div>
            

            <div className="limiter">
                <div className="container-login100" style={{ backgroundImage: 'url("images/background-ca-phe-don-gian-ma-dep_034344301.jpg")' }}>
                    <div className="wrap-login100 p-t-30 p-b-50">
                        <span className="login100-form-title p-b-41">
                            Admin Login
                        </span>
                        <form onSubmit={handleSubmit(onSubmit)} className="login100-form validate-form p-b-33 p-t-5">
                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input className="input100" {...register("phoneNumber", { required: true })} type="text" name="phoneNumber" placeholder="Phone number" />
                                <span className="focus-input100" data-placeholder="&#xe830;" />
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" {...register("password", { required: true })} type="password" name="password" placeholder="Password" />
                                <span className="focus-input100" data-placeholder="" />
                            </div>
                            <div className="container-login100-form-btn m-t-32">
                                <button type="submit" className="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="dropDownSelect1"></div>
            
        </div>

    
  )
}
