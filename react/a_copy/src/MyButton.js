const MyButton = (props) => {

    return (
        <div>
            <button id={props.setId} type={props.myType} onClick={props.change}>{props.buttonText}</button>
        </div>
    )
}
export default MyButton;