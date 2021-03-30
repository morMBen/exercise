const Input = (props) => {


    return (
        <input
            value={props.inputValue}
            onChange={props.onChange}
        />
    )
}
export default Input;