import React, { useState, useEffect, useContext,useRef } from 'react'
import { MenuContext } from '../context/_Context/MenuContext';
import "./styles.scss"
import Axios from 'axios'


import moment from 'moment';
import ModalCreateUser from './ModalCreateUser';
import ModalWarningUSer from './ModalWarningUser';

export default function TableUsers () {
  const [posts, setPosts] = useState([]);
  const [alls, setAlls] = useState(1);
  const { resetList } = useContext(MenuContext);
  const [input, setInput] = useState('');

  const refInput = useRef(null);

  const onChangeSearch = (event) => {
    if (refInput.current) {
        clearTimeout();
    }

    refInput.current = setTimeout(() => {
        
        setInput(event.target.value)
        console.log(event.target.value)
       
    }, 900)
}
const filterData = () => {
  let listDataFilter = posts.filter((item)=>(item.phoneNumber.includes(input) || item.name.toLowerCase().includes(input.toLowerCase())))
  return listDataFilter;

}



  useEffect(() => {
    let promise = Axios({
      url: 'https://api-coffee-phen.herokuapp.com/api/v1/users/',

      method: 'GET',

    });
    promise.catch((err) => {
      console.log(err);
      console.log('Lấy dữ liệu thất bại')
    })
    promise.then((result) => {
      console.log('Lấy dữ liệu thành công')
      setPosts(result.data);

    });



  }, [resetList]);
  const changeStatusALl = () => {
    setAlls(alls === 1 ? 2 : 1)
  }
  const renderTable = () => {
    let allUsers ;
    if(input!==""){
      allUsers=filterData()
    }else allUsers = posts;
   

    let listUsers = allUsers.map((user, index) => {
      return (
        <tr>
          <td className="id-course">{user.id}</td>
          <td style={{ width: '18%' }}>{user.name}</td>
          <td>{user.phoneNumber}</td>
          <td >{user.address}</td>
          <td>{moment(user.birthDay).format('DD/MM/YYYY')}</td>
          <td>{user.level}</td>
          <td className="edit-td">
            <div class="content-edit">



              {/* <ModalCreateProduct initialValues={{ name: item.name, price: item.price, priceDefaut: item.priceDefaut, type: item.type, introduce: item.introduce }} classButton={"btn btn-edit"} contentButton={<i class='bx bxs-edit'></i>} tittle="Chỉnh sửa" id={item.id} /> */}
              <ModalCreateUser initialValues={{ name: user.name, phoneNumber: user.phoneNumber, address: user.address, birthDay: moment(user.birthDay).format('YYYY/MM/DD'), level: user.level }} classButton={"btn btn-edit"} contentButton={<i class='bx bxs-edit'></i>} tittle="Chỉnh sửa" id={user.id}/>
              <button className="btn btn-delete" data-toggle="modal" data-target={"#exampleDeleteUser" + index}><i class='bx bx-x-circle'></i></button>
            </div>
          </td>
          <ModalWarningUSer user={user} index={index} />
        </tr>

      )

    })
    if (alls === 1) {
      return listUsers.splice(0, 41)

    }
    else
      return listUsers;
  }



  return (

    <div>
      <MenuContext.Consumer>
        {({ checkCkick, visible }) =>
          <section className={visible === true ? "home-section-close" : "home-section-open"}>
            <div className="home-content">

              <i className="bx bx-menu" onClick={() => {
                checkCkick();


              }}></i>

            </div>
            <div className="title">
              <h2>Tìm kiếm</h2>
            </div>

            <div className="input-group mb-3 w-75">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                ref={refInput} 
                onChange={(event) => onChangeSearch(event)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i class='bx bx-search-alt'></i>
              </button>
              <div style={{marginLeft: '10px'}}>

              <ModalCreateUser tittle="Thêm User" classButton={"btn btn-primary"} contentButton={<i class='bx bxs-user-plus bx-sm'></i>} />
              </div>
            </div>

            <div className="listpro11">
              <div>
                <h2>Danh sách người dùng</h2>
                <div className="table-lst">
                  <table cellspacing="0" cellpadding="10" id="tableContenid">
                    <thead>
                      <tr style={{background: "#d6b9b9"}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Ngày đẻ</th>
                        <th>Level</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody id="render-lst-here">
                      {renderTable()}

                    </tbody>
                  </table>
                  <div style={{ display: 'flex', justifyContent: 'center',marginBottom:'80px' }}>

                    <button onClick={() => { changeStatusALl() }} style={input!==""?{visibility:'hidden'}:{}} type="button" className="btn btn-primary">
                      {alls === 1 ? "Xem tất cả" : "Thu gọn"}
                    </button>
                  </div>
                </div>
              </div>
            </div>




          </section>
        }
      </MenuContext.Consumer>



    </div>
  )
}
