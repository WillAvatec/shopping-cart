import Bottom from "./Bottom-Head"
import Top from "./Top-Head"
import "../../../styles/header.css"

const Header = () => {
    return (
        <div className="header-wrapper">
            <Top/>
            <Bottom/>
        </div>
    )
}

export default Header