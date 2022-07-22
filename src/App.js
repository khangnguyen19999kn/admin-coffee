
import './App.css';
import 'antd/dist/antd.min.css'
import './util.css'
import ModalCreateProduct from './component/ModalCreateProduct';
import MenuColapse from './component/MenuColapse';
import TableProduct from './component/TableProduct';
import {MenuProvider} from "./context/Provider/MenuProvider"
import Login from './component/Login';
import PageLogin from './page/PageLogin';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import PageProduct from './page/PageProduct';
import PageUsers from './page/PageUsers';
import PageListOrder from './page/PageListOrder';
import PageManageNews from './page/PageManageNews';

function App() {
  return (
    <MenuProvider>
       <BrowserRouter>
    
      
      <Routes>
        <Route exact path='/login' element={<PageLogin/>} />
        <Route exact path='/' element={<PageLogin/>} />
        <Route exact path='/list-product' element={<PageProduct/>} />
        <Route exact path='/list-users' element={<PageUsers/>} />
        <Route exact path='/list-order' element={<PageListOrder/>} />
        <Route exact path='/manage-news' element={<PageManageNews/>} />
        {/* <Route  path='*' element={<Home/>} /> */}
      
      </Routes>
         
    </BrowserRouter>

      

    </MenuProvider>
   
   
  );
}

export default App;
