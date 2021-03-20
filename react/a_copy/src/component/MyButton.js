const MyButton = (props) => {

    const turnButton = () => {
        if (props.eventOn) {
            return props.onUserClick;
        }
        return
    }

    return (
        <button onClick={turnButton()}>{props.myValue}</button>
    )
}

export default MyButton;