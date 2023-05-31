function Input () {

 return (
        <div class='ctrl'>
            <div class='ctrl__button ctrl__button--decrement'>&ndash;</div>
            <div class='ctrl__counter'>
                <input class='ctrl__counter-input' maxlength='10' type='text' value='0'/>
                <div class='ctrl__counter-num'>0</div>
            </div>
            <div class='ctrl__button ctrl__button--increment'>+</div>
        </div>
    )
}

export default Input