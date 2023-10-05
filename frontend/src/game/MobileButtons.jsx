const MobileButtons = () => {
    const KEY_DOWN = 'keydown';
    const KEY_UP = 'keyup';
    const A_KEY = {key: 'a', code: 'KeyA', keyCode: 65};
    const D_KEY = {key: 'd', code: 'KeyD', keyCode: 68};
    const SPACE_KEY = {key: ' ', code: 'Space', keyCode: 32};
    const handleTouch = (eventType, keyEvent) => {
        console.log("touched");
        dispatchEvent(new KeyboardEvent(eventType, keyEvent));
    }
    return (
        <div className="mobile-btn-container">
            <button onTouchStart={() => handleTouch(KEY_DOWN, A_KEY)} onTouchEnd={() => handleTouch(KEY_UP, A_KEY)}>LEFT</button>
            <button onTouchStart={() => handleTouch(KEY_DOWN, D_KEY)} onTouchEnd={() => handleTouch(KEY_UP, D_KEY)}>RIGHT</button>
            <button onTouchStart={() => handleTouch(KEY_DOWN, SPACE_KEY)} onTouchEnd={() => handleTouch(KEY_UP, SPACE_KEY)}>JUMP</button>
        </div>
    )
}
export default MobileButtons;