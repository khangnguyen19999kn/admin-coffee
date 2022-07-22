import React from 'react'
import { MenuContext } from '../context/_Context/MenuContext';
import { InputField } from '../FormFields/InputField';
import { useForm } from "react-hook-form";
import { CkEditorField } from '../FormFields/CkEditorField';


export default function ManageNews() {
    const { register, setError, handleSubmit, control, formState: { errors } } = useForm({

        mode: 'all',
        // resolver: yupResolver(schema),


    });
    const onSubmit = (data) => {
        console.log(data)
    }
    return (


        <MenuContext.Consumer>
            {({ checkCkick, visible }) =>
                <section className={visible === true ? "home-section-close" : "home-section-open"}>
                    <div className="home-content">

                        <i className="bx bx-menu" onClick={() => {
                            checkCkick();


                        }}></i>

                    </div>
                    <div className="title">
                        <h2>Thêm bài viết</h2>
                    </div>
                    <div className="content_add_news">
                        <form className='pt-4 pb-2' onSubmit={handleSubmit(onSubmit)} >

                            <div className="form-group" style={{ margin: "0px 50px" }}>
                                <div className="col-sm-10">
                                    <InputField control={control} name="tittle" label="Tiêu đề" />
                                </div>
                            </div>
                 
                            <div className='content_CK'>
                                <CkEditorField control={control} name="content"/>

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }} >
                                <button style={{ marginRight: '5px' }} type="submit" class="btn btn-primary" >Lưu</button>
                            </div>
                        </form>
                    </div>




                </section>
            }
        </MenuContext.Consumer>

    )
}
