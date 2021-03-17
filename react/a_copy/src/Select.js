const MySelect = (props) => {

    return (
        <div>
            <label>Select Age</label>
            <select id={props.setId} value={props.val} onChange={props.change}>
                <option value='Under 18'>Under 18</option>
                <option value='Between 18 and 40'>Between 18 and 40</option>
                <option value='Over 40'>Over 40</option>
            </select>
        </div>
    )
}
export default MySelect;