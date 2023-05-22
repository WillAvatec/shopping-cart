import { BrowserRouter,Routes,Route } from "react-router-dom";
import { HomePage,CatalogPage,ContactUs } from "./pages/"
const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop-catalog" element={<CatalogPage/>}/>
                <Route path='/contact-us' element={<ContactUs/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch