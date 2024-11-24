import PropTypes from "prop-types";

import style from "./book-card.module.scss";

const BookCard = ({ book }) => {
    return (
        <div className={style.card}>
            <figure>
                <img src={book.image.src} alt={book.image.alt} />
            </figure>
            <div className={style.text}>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.genre}</p>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        image: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default BookCard;
