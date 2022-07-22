import React, { useState, useContext } from 'react'
import {  Modal } from 'antd';
import { InputField } from '../FormFields/InputField';
import { useForm, Controller } from "react-hook-form";
import SelectField from '../FormFields/SelectField';
import InputFile from '../FormFields/InputFile';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextAreaField } from '../FormFields/TextAreaField';
import Axios from 'axios'
import { MenuContext } from '../context/_Context/MenuContext';
import InputDate from '../FormFields/InputDate';



export default function ModalCreateUser ({ initialValues,classButton,contentButton,tittle,id}) {
  const options = [{value:"Client",label:"Client"},{value:"Admin",label:"Admin"}]
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { renderList } = useContext(MenuContext);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { register, setError, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: initialValues,
    mode: 'all',
    // resolver: yupResolver(schema),


  });
  const onSubmit = (data) => {
        console.log(data)
         
          let promise = Axios({
          url:tittle==="Thêm User"? 'http://localhost:9696/api/v1/users/register':`http://localhost:9696/api/v1/users/${id}`,
    
          method: tittle==="Thêm User"?'POST':'PUT',
          data: {...data}
    
        });
        promise.catch((err) => {
          console.log(err);
          console.log('Cập nhật dữ liệu thất bại')
        })
        promise.then((result) => {
          console.log('Cập nhật thành công')
          console.log(result.data)
          renderList()
          
       
    
        });
   


  }
  const checkTittle = ()=>{
      if(tittle==="Chỉnh sửa"){
        return 
      }else return (
        <div className="form-group">
        <div className="col-sm-12">
          <InputField control={control} name="password" label="Password" />
        </div>
      </div>
      )
  }

        
    
 

     
  // }
 

  return (
    <> 
    
    
      <button class={classButton} onClick={showModal}>
        {contentButton}
      </button>
      <Modal title={tittle} onOk={handleOk} onCancel={handleCancel} visible={isModalVisible} footer={null}>
        <form onSubmit={handleSubmit(onSubmit)} >
       

        <div className="form-group">

          <div className="col-sm-12">
            <InputField control={control} name="name" label="Họ tên" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <InputField control={control} name="phoneNumber" label="Số điện thoại" />
          </div>
        </div>
        {checkTittle()}
        <div className="form-group">
          <div className="col-sm-12">
            <InputField control={control} name="address" label="Địa chỉ" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-6">
            {/* <InputField control={control} name="birthDay" label="Ngày đẻ" /> */}
            <InputDate control={control} name="birthDay" label="Ngày đẻ"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <SelectField options={options} label="Level" control={control} name="level"  />
          </div>
        </div>
       
        <div style={{display: 'flex',justifyContent: 'end'}}>

        <button  onClick={() => {handleOk()}} style={{marginRight:'5px'}} type="submit" class="btn btn-primary" >Lưu</button>
        <button onClick={() => { handleCancel() }} class="btn btn-secondary"  key="2">Hủy</button>
        </div>
       



      </form>
      </Modal>
    </>

  )
}
