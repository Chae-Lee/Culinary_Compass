import michelin from "../../michelin.json"

const FilterDropdown = (props) => {

    function filterValueChanged (event) {
        props.filterValueSelected(event.target.value)
    }

    return <>
        <select name="isFiltered" onChange={filterValueChanged}>
            <option value="1 Star">1 Star</option>
            <option value="2 Stars">2 Stars</option>
            <option value="3 Stars">3 Stars</option>
        </select>
    
    </>
}

export default FilterDropdown;