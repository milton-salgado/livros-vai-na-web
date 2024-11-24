import PropTypes from "prop-types";

import style from "./info-card.module.scss";

const InfoCard = ({ description, image }) => {
    return (
        <div className={style.card}>
            <figure>
                <img src={image.src} alt={image.alt} />
            </figure>
            <p>{description}</p>
        </div>
    );
};

InfoCard.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
};

export default InfoCard;
