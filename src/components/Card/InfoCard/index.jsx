import PropTypes from "prop-types";

import style from "./info-card.module.scss";

const InfoCard = ({ description, image }) => {
    return (
        <article className={style.card}>
            <figure>
                <img src={image.src} alt={image.alt} />
            </figure>
            <p>{description}</p>
        </article>
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
