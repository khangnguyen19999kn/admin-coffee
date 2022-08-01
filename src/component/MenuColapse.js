import React,{useState} from 'react'
import { MenuContext } from '../context/_Context/MenuContext';
import { NavLink } from 'react-router-dom'
import { Portal } from '@mui/material';

import { useCookies } from 'react-cookie';


export default function MenuColapse() {
    const [visible2, setVisible2] = useState(0);

    const [cookies,setCookie,removeCookie] = useCookies(['token']);
  


  return (
    <div>
    <MenuContext.Consumer>
    {({ visible,userName,logOut }) =>
    <div className={visible===true?"sidebar close":"sidebar"}>
      <div className="logo-details">
        <i class='bx bx-coffee'></i>
        {/* <i className="bx bxl-c-plus-plus"></i> */}
        <NavLink to="/list-product">

        <span className="logo_name">Admin Data</span>
        </NavLink>
      </div>
      <ul class="nav-links">
      <li>
          <NavLink to="/list-product">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Sản phẩm</span>
          </NavLink>
          {/* <ul class="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Category
              </a>
            </li>
          </ul> */}
        </li>
        <li>
          <NavLink to="/list-users">
            <i className="bx bx-collection"></i>
            <span className="link_name">User</span>
          </NavLink>
    
        </li>
        {/* <li className={visible2===1?"showMenu":""} >
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-collection"></i>
              <span className="link_name">Category</span>
            </a>
            <i class="bx bxs-chevron-down arrow"onClick={() => hadleArrow(3)}></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Category
              </a>
            </li>
            <li>
              <a href="#">HTML & CSS</a>
            </li>
            <li>
              <a href="#">JavaScript</a>
            </li>
            <li>
              <a href="#">PHP & MySQL</a>
            </li>
          </ul>
        </li> */}
        {/* <li className={visible2===2?"showMenu":""}>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-book-alt"></i>
              <span className="link_name">Posts</span>
            </a>
            <i class="bx bxs-chevron-down arrow" onClick={() => hadleArrow(2)}></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Posts
              </a>
            </li>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Login Form</a>
            </li>
            <li>
              <a href="#">Card Design</a>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <a href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="link_name">Analytics</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Analytics
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-line-chart"></i>
            <span className="link_name">Chart</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Chart
              </a>
            </li>
          </ul>
        </li>
        <li className={visible2===3?"showMenu":""}>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-plug"></i>
              <span className="link_name">Plugins</span>
            </a>
            <i className="bx bxs-chevron-down arrow" onClick={() => hadleArrow(3)}></i>
          </div>
          <ul className="sub-menu">
          {/* <li className={visible2===true?"showMenu":""}> */}
       
        <li>
          <NavLink to='/list-order'>
            <i className="bx bx-history"></i>
            <span className="link_name">Đơn hàng</span>
          </NavLink>
      
        </li>
        <li>
          <NavLink to='/manage-news'>
            <i class='bx bxs-news' ></i>
            <span className="link_name">Tin tức</span>
          </NavLink>
  
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
            <span className="link_name">Setting</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Setting
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="profile-details">
            <div className="profile-content"></div>
            <div className="name-job">
              <div className="job"> Xin chào </div>
              <div className="profile_name">{userName}</div>
            </div>
            <i onClick={()=>{logOut()}} className="bx bx-log-out"></i>
          </div>
        </li>
      </ul>
    </div>
     }
     </MenuContext.Consumer>
    
  </div>
  )
}
