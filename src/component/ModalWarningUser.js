import React, { useState,useContext } from 'react';
import { Modal, Button } from 'antd';
import {MenuContext} from "../context/_Context/MenuContext"
import Axios from 'axios'

export default function ModalWarningUSer({ user, index,getListProduct}) {
  const {renderList,resetList} = useContext(MenuContext)

  const deleteProduct = ()=>{
    let promise = Axios({
      url: `http://localhost:9696/api/v1/users/${user.id}`,
      method: 'DELETE'
      

    });
    promise.catch((err) => {
      console.log(err);

    })
    promise.then((result) => {
      console.log("Xóa Thành Công")

      renderList();
     
   



    });
    
  }

  return (
    <div>
      
       <div class="modal" id={"exampleDeleteUser" + index} tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">CẢNH BÁO</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Bạn có chắc chắn muốn xóa tài khoản này</p>
              <p>{user.id}</p>
            </div>
            <div class="modal-footer">
              <button type="button" onClick={()=>{deleteProduct()}} data-dismiss="modal" class="btn btn-danger">Xóa</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy bỏ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
