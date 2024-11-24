import style from "./input.module.scss";
import SearchIcon from "/assets/icons/search.png";
import PropTypes from "prop-types";

const Input = ({ variant, placeholder, ...props }) => {
    return (
        <div className={style.container}>
            {variant === "search" && (
                <img
                    src={SearchIcon}
                    alt="Ícone de busca"
                    className={style.icon}
                />
            )}
            <input
                className={style[variant]}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(["search", "donate"]),
};

export default Input;
