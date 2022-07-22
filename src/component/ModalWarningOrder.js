import React, { useState,useContext } from 'react';
import { Modal, Button } from 'antd';
import {MenuContext} from "../context/_Context/MenuContext"
import Axios from 'axios'

export default function ModalWarningOrder({ order, index,content}) {
  const {renderList,resetList} = useContext(MenuContext)

  const confirmOrder = ()=>{
    let promise = Axios({
      url: `http://localhost:9696/api/v1/cart/${order.id}`,
  
      method: 'PUT',
  
    });
    promise.catch((err) => {
    console.log(err);
     
    })
    promise.then((result) => {
    console.log(result.data)
    renderList();
      
      
  
    });
  
  }
  const deleteOrder = ()=>{
    let promise = Axios({
      url: `http://localhost:9696/api/v1/cart/${order.id}`,
  
      method: 'DELETE',
  
    });
    promise.catch((err) => {
    console.log(err);
     
    })
    promise.then((result) => {
    console.log(result.data)
    renderList();
      
      
  
    });
  
  }
  const checkContent = ()=>{
    if(content==="ConfirmOrder")
     return (
        <button type="button" onClick={()=>{confirmOrder()}} data-dismiss="modal" class="btn btn-info">Xác nhận</button>
    )
    else return (
        <button type="button" onClick={()=>{deleteOrder()}} data-dismiss="modal" class="btn btn-danger">Xóa</button>
    )
  }
    
  

  return (
    <div>
      
       <div class="modal" id={"exampleDeleteOrder" + index} tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">CẢNH BÁO</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>{content=="ConfirmOrder"?"Xác nhận thanh toán":"Bạn có chắc muốn xóa đơn hàng"}</p>
              <p>{order.id}</p>
            </div>
            <div class="modal-footer">
                {checkContent()}
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy bỏ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
