const Input = (props) => {
    return (
        <div className="ui icon input">
            <input onChange={props.onChange} type="text" value={props.myVal} placeholder="Search..." />
            <i className="circular search link icon"></i>
        </div>
    )
}
export default Input;
