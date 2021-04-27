const Input = ({ setValue, value, type }) => {

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <input
            type={type}
            onChange={onChange}
            value={value}
        />
    )
}

export default Input;