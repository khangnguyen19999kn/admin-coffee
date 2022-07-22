import React,{useState} from 'react'
import Axios from 'axios'

export default function ModalDetailOrder({dataDetail}) {
    const totalPriceDetail = dataDetail.reduce((defaultValues,currentValues)=>{
        return defaultValues+parseInt(currentValues.resultPrice)

    },0)

      const renderOrder = ()=>{
       
        let listOrder = dataDetail.map((proChoose,index)=>{
            let size = proChoose.size_product=="small"?"Nhỏ":proChoose.size_product=="normal"?"Vừa":"Lớn";
            return(
                // <div>

                //     <h1>{index}</h1>
                // </div>
                <div style={{ marginTop: '10px' }} className="tch-order-card d-flex align-items-center justify-content-between">
                <div className="tch-order-card__left d-flex">
                    <span className="tch-order-card__icon d-flex align-items-center">
                        <i aria-hidden="true" className="fa fa-pen" />
                    </span>
                    <div className="tch-order-card__content">
                        <h6 className="tch-order-card__title mb-0">{proChoose.quantity +" x     " + proChoose.name}</h6>
                        <p className="tch-order-card__description mb-0">
                            {`${size}, ${proChoose.quantity} x ${size}`}
                        </p> 
                         
                    </div>
                </div>
                <div className="tch-order-card__right ">
                    <p className="tch-order-card__price mb-0">{proChoose.resultPrice+" đ"}</p>
                </div>
            </div>
            )
          })
          return listOrder;

      }
     
  return (
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Chi tiết đơn hàng</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div style={{ width: '100%' }}>
                                <div className='cart_part-2'>
                                    <div class="d-flex flex-row">
                                        <h5 class="cart_checkout-box__choise">Các món đã chọn</h5>
                                    
                                    </div>
                                    <div className="d-flex flex-column cart_part-2_item_order">
                                        {/* Item order here!!! */}
                                        {/* {checkListOrder()} */}
                                        {renderOrder()}
                                        {/* <div style={{ marginTop: '10px' }} className="tch-order-card d-flex align-items-center justify-content-between">
                                            <div className="tch-order-card__left d-flex">
                                                <span className="tch-order-card__icon d-flex align-items-center">
                                                    <i aria-hidden="true" className="fa fa-pen" />
                                                </span>
                                                <div className="tch-order-card__content">
                                                    <h6 className="tch-order-card__title mb-0">5 x Cà Phê Sữa Đá Chai Fresh 250ML</h6>
                                                    <p className="tch-order-card__description mb-0">
                                                        Vừa, 5 x Vừa
                                                    </p> 
                                                     
                                                </div>
                                            </div>
                                            <div className="tch-order-card__right ">
                                                <p className="tch-order-card__price mb-0">395.000đ</p>
                                            </div>
                                        </div> */}
                                        

                                        {/* End item order */}
                                        <div className='cart_part-2_total'>
                                            <h5 class="cart_checkout-box__total">Tổng cộng</h5>
                                        </div>
                                        <div className="tch-order-card tch-order-card--border d-flex align-items-center justify-content-between">
                                            <div className="tch-order-card__left d-flex">
                                                <p className="tch-order-card__text mb-0">Thành tiền</p>
                                            </div>
                                            <div className="tch-order-card__right">
                                                <p className="tch-order-card__price mb-0">{totalPriceDetail} đ</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* button đặt hàng hereeee */}
                                {/* <div className="tch-checkout-box tch-checkout-box--list-submited d-flex justify-content-between position-static w-100">
                                    <div >
                                        <p className="tch-order-card__text text-white mb-0">Thành tiền</p>
                                        <p className="tch-order-card__text text-white f-600 mb-0">đ</p>
                                    </div>
                                    <button type="submit"   className="btn_order">
                                        Đặt hàng
                                    </button>
                                </div> */}
                               
                                {/* button xóa giỏ hàng */}
                                {/* <CartContext.Consumer> */}
                                    {/* {({ DeleteInCart }) => */}
                                        {/* <NavLink to="/list-product"> */}
                                            {/* <div  className="tch-checkout-box tch-checkout-box--remove-card mt-4">
                                                <p className="tch-checkout-box__text text-center mb-0">
                                                    <span className="icon mr-2">
                                                        <i aria-hidden="true" className="fa fa-trash">
                                                        </i>
                                                    </span>
                                                    <span >Xóa đơn hàng</span>
                                                </p>
                                            </div> */}
                                        {/* </NavLink>} */}
                                {/* </CartContext.Consumer> */}

                            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
  )
}
