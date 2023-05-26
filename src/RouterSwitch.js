import { BrowserRouter,Routes,Route } from "react-router-dom";
import { HomePage,CatalogPage,ContactUs } from "./pages/"
import { CartProvider } from "./context/cart";
const RouteSwitch = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop-catalog" element={<CatalogPage/>}/>
                    <Route path='/contact-us' element={<ContactUs/>} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default RouteSwitch