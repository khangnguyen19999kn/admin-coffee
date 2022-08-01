import React, { useState, useContext } from 'react'
import { Modal } from 'antd';
import { InputField } from '../FormFields/InputField';
import { useForm, Controller } from "react-hook-form";
import SelectField from '../FormFields/SelectField';
import InputFile from '../FormFields/InputFile';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextAreaField } from '../FormFields/TextAreaField';
import Axios from 'axios'
import { MenuContext } from '../context/_Context/MenuContext';



export default function ModalCreateProduct({ initialValues, classButton, contentButton, tittle, id }) {
  const options = [{ value: "Cà phê", label: "Cà phê" }, { value: "Trà trái cây", label: "Trà trái cây" }, { value: "Đá xay", label: "Đá xay" }, { value: "Dùng tại nhà", label: "Dùng tại nhà" }, { value: "Bánh", label: "Bánh" }]
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [img, setImg] = useState({});

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

  const onChangeFile = (data) => {
    setImg(data);
  }

  const onSubmit = (data) => {

    const formData = new FormData();
    img.forEach((file) => {
      formData.append('uploaded_file', file);
    });
    // formData.append("name",data.name)
    for(const fields in data ){
      formData.append(`${fields}`,`${data[fields]}`)
    
    }
    // console.log(formData)

    Axios.post('https://api-coffee-phen.herokuapp.com/api/v1/product', formData , {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(({ data }) => console.log(data));

    // let promise = Axios({
    //   url: tittle === "Thêm sản phẩm" ? 'http://localhost:9696/api/v1/product' : `http://localhost:9696/api/v1/product/${id}`,

    //   method: tittle === "Thêm sản phẩm" ? 'POST' : 'PUT',
    //   data: { ...data, uploaded_file: img[0] }

    // });
    // promise.catch((err) => {
    //   console.log(err);
    //   console.log('Cập nhật dữ liệu thất bại')
    // })
    // promise.then((result) => {
    //   console.log('Cập nhật thành công')
    //   console.log(result.data)
    //   renderList()



    // });



  }






  // }


  return (
    <>


      <button class={classButton} onClick={showModal}>
        {contentButton}
      </button>
      <Modal title={tittle} onOk={handleOk} onCancel={handleCancel} visible={isModalVisible} footer={null}>
        <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)} >


          <div className="form-group">

            <div className="col-sm-12">
              <InputField control={control} name="name" label="Tên sản phẩm" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <InputField control={control} name="price" label="Giá hiện tại" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <InputField control={control} name="priceDefaut" label="Giá gốc" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <SelectField options={options} label="Loại" control={control} name="type" />
            </div>
          </div>
          <div className="form-group">
            <div className='row' style={{ marginLeft: '0px' }}>
              <div className="col-sm-10">
                {/* <InputField control={control} name="img" type='file'  label="Hình ảnh" /> */}
                <InputFile control={control} name="img" onChange={onChangeFile} />
              </div>
              <div className='className="col-sm-2'>

              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <span>Introduce:</span>
              <TextAreaField control={control} name="introduce" />

            </div>


          </div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>

            <button onClick={() => { handleOk() }} style={{ marginRight: '5px' }} type="submit" class="btn btn-primary" >Lưu</button>
            <button onClick={() => { handleCancel() }} class="btn btn-secondary" key="2">Hủy</button>
          </div>




        </form>
      </Modal>
    </>

  )
}
