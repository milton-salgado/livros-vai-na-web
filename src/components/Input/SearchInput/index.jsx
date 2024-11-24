import style from "./search-input.module.scss";
import SearchIcon from "/assets/icons/search.png";
import PropTypes from "prop-types";

const SearchInput = ({ placeholder, ...props }) => {
    return (
        <div className={style.container}>
            <img src={SearchIcon} alt="Ícone de busca" className={style.icon} />
            <input
                className={style.input}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

SearchInput.propTypes = {
    placeholder: PropTypes.string,
};

export default SearchInput;
