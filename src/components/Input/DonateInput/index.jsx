import style from "./donate-input.module.scss";
import PropTypes from "prop-types";

const DonateInput = ({ placeholder, ...props }) => {
    return (
        <input className={style.input} placeholder={placeholder} {...props} />
    );
};

DonateInput.propTypes = {
    placeholder: PropTypes.string,
};

export default DonateInput;
