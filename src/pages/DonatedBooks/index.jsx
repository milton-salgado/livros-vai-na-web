import Book from "/assets/images/book-donated.png";
import BookCard from "../../components/Card/BookCard";

import style from "./donated-books.module.scss";

const DonatedBooks = () => {
    const donatedBooks = [
        {
            title: "O protagonista",
            author: "Susanne Andrade",
            genre: "Ficção",
            image: {
                src: Book,
                alt: "Imagem de um livro doado",
            },
        },
    ];

    return (
        <main className={style.main}>
            <h1>Livros Doados</h1>
            <div className={style.cards}>
                {donatedBooks.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </main>
    );
};

export default DonatedBooks;
