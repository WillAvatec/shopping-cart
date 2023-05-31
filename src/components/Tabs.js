import "../assets/tabs.css"

function Tabs ({info}){
    return (
        <div className="tabs__wrapper">
            <input className="radio" id="one" name="group" type="radio" checked/>
            <input className="radio" id="two" name="group" type="radio"/>
            <input className="radio" id="three" name="group" type="radio"/>
            <div className="tabs">
                <label className="tab__title" id="one-tab" for="one">About</label>
                <label className="tab__title" id="two-tab" for="two">Specifications</label>
                <label className="tab__title" id="three-tab" for="three">Reviews</label>
            </div>
            <div className="panels">
                <div className="panel" id="one-panel">
                    <p>{info}</p>
                </div>
                <div className="panel" id="two-panel">
                    <p>Lorem Ipsum</p>
                </div>
                <div className="panel" id="three-panel">
                    <p>We recommend that you complete Learn HTML before learning CSS.</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs