import React, { useState, useEffect, useContext,useRef } from 'react'
import { MenuContext } from '../context/_Context/MenuContext';
import "./styles.scss"
import Axios from 'axios'


import moment from 'moment';
import ModalCreateUser from './ModalCreateUser';
import ModalWarningOrder from './ModalWarningOrder';
import ModalDetailOrder from './ModalDetailOrder';

export default function TableOrder () {
  const [posts, setPosts] = useState([]);
  const [dataDetail, setDataDetail]= useState([])
  const [alls, setAlls] = useState(1);
  const { resetList } = useContext(MenuContext);
  const [input, setInput] = useState('');
  const [contentBut,setContentBut]= useState('')

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
  let listDataFilter = posts.filter((item)=>(item.phone.includes(input) || item.fullName.toLowerCase().includes(input.toLowerCase())))
  return listDataFilter;

}



  useEffect(() => {
    let promise = Axios({
      url: 'https://coffeepha.ml/api/v1/cart',

      method: 'GET',

    });
    promise.catch((err) => {
      console.log(err);
      console.log('Lấy dữ liệu thất bại')
    })
    promise.then((result) => {
      console.log('Lấy dữ liệu thành công')
      // console.log(result.data)
      setPosts(result.data);

    });



  }, [resetList]);
//   const changeStatusALl = () => {
//     setAlls(alls === 1 ? 2 : 1)
//   }
const getDataDetailOrder =(id)=>{
  let promise = Axios({
    url: `https://coffeepha.ml/api/v1/cart/detail/${id}`,

    method: 'GET',
    

  });
  promise.catch((err) => {
    console.log(err);
    console.log('Lấy dữ liệu thất bại')
  })
  promise.then((result) => {
    console.log('Lấy dữ liệu thành công')
    console.log(result.data)
    setDataDetail(result.data)
   

  });

}
const changeContentBut = (content)=>{
  setContentBut(content)
}
  const renderTable = () => {
    let allOrder ;
    if(input!==""){
      allOrder=filterData();
    }else allOrder = posts;
   

    let listOrder = allOrder.map((order, index) => {
      return (
        
        <tr  >
          
          <td className="id-course">{order.id}</td>
          <td style={{ width: '18%' }}>{order.fullName}</td>
          <td>{order.phone}</td>
          
          <td>{order.diaChi}</td>
          <td>{order.huongDan===""?"-":order.huongDan}</td>
          <td>{order.thanhToan==="Rồi"?<i style={{color:"#07de07"}} class='bx bx-check bx-sm'></i>:<i style={{color:"#d21717"}} class='bx bxs-error-circle bx-sm'></i>}</td>
          <td className="edit-td">
            <div class="content-edit">
            <ModalDetailOrder dataDetail={dataDetail}/>



              {/* <ModalCreateProduct initialValues={{ name: item.name, price: item.price, priceDefaut: item.priceDefaut, type: item.type, introduce: item.introduce }} classButton={"btn btn-edit"} contentButton={<i class='bx bxs-edit'></i>} tittle="Chỉnh sửa" id={item.id} /> */}
              {/* <ModalCreateUser initialValues={{ name: user.name, phoneNumber: user.phoneNumber, address: user.address, birthDay: moment(user.birthDay).format('YYYY/MM/DD'), level: user.level }} classButton={"btn btn-edit"} contentButton={<i class='bx bxs-edit'></i>} tittle="Chỉnh sửa" id={user.id}/> */}
              <button className="btn btn-info" onClick={()=>{getDataDetailOrder(order.id)}} data-toggle="modal" data-target="#exampleModalCenter"><i class='bx bx-show-alt'></i></button>
              <button className="btn btn-success" onClick={()=>{changeContentBut("ConfirmOrder")}} data-toggle="modal" data-target={"#exampleDeleteOrder" + index}><i class='bx bx-check-square' ></i></button>
              <button className="btn btn-delete"  onClick={()=>{changeContentBut("DeleteOrder")}} data-toggle="modal" data-target={"#exampleDeleteOrder" + index}><i class='bx bx-x-circle'></i></button>
            </div>
          </td>
          <ModalWarningOrder content={contentBut} order={order} index={index} />
        </tr>

      )

    })
    if (alls === 1) {
      return listOrder.splice(0, 41)

    }
    else
      return listOrder;
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
                placeholder="Nhập số điện thoại hoặc tên "
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
                <h2>Danh sách đơn hàng </h2>
                <div className="table-lst">
                  <table cellspacing="0" cellpadding="10" id="tableContenid">
                    <thead>
                      <tr style={{background: "#d6b9b9"}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Hướng dẫn</th>
                        <th>Thanh toán</th>
                        <th style={{textAlign:"center"}}>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody id="render-lst-here">
                      {renderTable()}

                    </tbody>
                  </table>
                  <div style={{ display: 'flex', justifyContent: 'center',marginBottom:'80px' }}>

                    {/* <button onClick={() => { changeStatusALl() }} style={input!==""?{visibility:'hidden'}:{}} type="button" className="btn btn-primary">
                      {alls === 1 ? "Xem tất cả" : "Thu gọn"}
                    </button> */}
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

