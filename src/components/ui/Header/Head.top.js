import logo from "../../../assets/images/logo.png"
const Top = () => {
    return (
        <div className='wrapper'>
            <div className="top-header">
                <div className="logo">
                    <img alt="no-logo" src={logo}/>
                </div>
                <div className='input-group'>
                    <div className="categories">
                        <select defaultValue={'all'} name="categories">
                            <option value='promociones'>Promociones</option>
                            <option value='vendidos'>Mas Vendidos</option>
                            <option value='all'> All Categories</option>
                        </select>
                    </div>
                    <div className="search">
                        <input type='text' placeholder="What do you need?" />
                        <button id="search">
                            <i className='lupa-search'/>
                        </button>
                    </div>
                </div>
                <div className="header-buttons">
                    {/* Here is the shopping cart icon */}
                    <div>
                        $0.00
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top