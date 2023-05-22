import Bottom from "./Head.bottom"
import Top from "./Head.top"
import "../../../assets/header.css"

const Header = () => {
    return (
        <div className="header-wrapper">
            <Top/>
            <Bottom/>
        </div>
    )
}

export default Header