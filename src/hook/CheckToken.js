import { useEffect } from "react"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

export const useCheckToken = () => {
    const [cookies,setCookie,removeCookie] = useCookies(['token']);
    let navigate = useNavigate();
    useEffect(() => {
        window.setTimeout( ()=> {
            window.location.reload();
          }, 60000);
        window.scrollTo(0, 0);
        const { token: _token } = cookies;
        if (!_token) {
            navigate('/login', { replace: true });
        }

    }, [cookies])
}