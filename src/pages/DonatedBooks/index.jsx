import BookCard from "../../components/Card/BookCard";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "./donated-books.module.scss";
import { showAlert } from "../../utils/helpers";

const DonatedBooks = () => {
    const [donatedBooks, setDonatedBooks] = useState([]);

    const getDonatedBooks = async () => {
        try {
            const response = await axios.get(
                "https://api-livros-vai-na-web-sn9x.onrender.com/donated-books"
            );
            setDonatedBooks(
                Array.isArray(response.data.books) ? response.data.books : []
            );
            if (response.status === 200) {
                showAlert("Livros doados carregados com sucesso!");
            }
        } catch (error) {
            console.error("Error fetching donated books:", error);
            if (error.response && error.response.status === 404)
                showAlert("Erro: Nenhum livro encontrado.");
            else if (error.response && error.response.status === 500)
                showAlert("Erro: Problema no servidor.");
            else showAlert("Erro: Não foi possível carregar os livros.");
        }
    };

    useEffect(() => {
        getDonatedBooks();
    }, []);

    return (
        <main className={style.main}>
            <h1>Livros Doados</h1>
            <div className={style.cards}>
                {donatedBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </main>
    );
};

export default DonatedBooks;
