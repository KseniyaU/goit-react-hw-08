import css from '../SearchBox/SearchBox.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { inputValue } from '../../redux/contacts/filtersSlice.js'


export const SearchBox = () => {
 const dispatch = useDispatch();
    const filterValue = useSelector(state => state.filters);
     

    const onChange = even => { 
    dispatch(inputValue(even.target.value))
    }


    return (
        <div className={ css.containerSearchBox}>
            <label htmlFor="SearchBar">
                Find contacts by name
                 </label>
            <input type="text" name="SearchBar" placeholder="Enter name..." className={ css.inputForm} value={filterValue} onChange={onChange} />
        </div>
    )
 }