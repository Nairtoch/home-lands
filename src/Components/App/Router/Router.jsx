import { Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';
import { Login } from '../../Pages/Login/Login';
import { ProductList } from '../../Pages/Products/ProductList';

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}