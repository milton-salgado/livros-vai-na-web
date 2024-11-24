import PropTypes from "prop-types";

import style from "./button.module.scss";

const Button = ({ text, ...props }) => {
    return (
        <button className={style.button} {...props}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
};

export default Button;
