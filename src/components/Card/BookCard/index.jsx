import PropTypes from "prop-types";

import style from "./book-card.module.scss";

const BookCard = ({ book }) => {
    return (
        <article className={style.card}>
            <figure>
                <img src={book.image_url} alt={book.title} />
            </figure>
            <div className={style.text}>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.genre}</p>
            </div>
        </article>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
    }).isRequired,
};

export default BookCard;
