import './SearchBar.css';
import { ReactComponent as SearchIcon } from './SearchIcon.svg';


function SearchBar({args})  // args : setKeyword, searchKeyword
{
    return (
        <form className="search-bar" onSubmit = {args.searchKeyword}>
            <button className="search-button">
                <SearchIcon className = "search-icon" />
            </button>
            <input onInput={e=> args.setKeyword(e.target.value)} type = "text" id = "search-input" autoComplete = "off" placeholder = "est dolore omnis"/>
        </form>
    );
}

export default SearchBar;
