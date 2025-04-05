import DonateInput from "../../components/Input/DonateInput";
import Book from "/assets/images/book.png";
import Button from "../../components/Button";
import axios from "axios";
import { useState } from "react";
import { showAlert } from "../../utils/helpers";

import style from "./donation.module.scss";

const Donation = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        const data = {
            title,
            category,
            author,
            image_url: imageUrl,
        };

        try {
            const response = await axios.post(
                "https://api-livros-vai-na-web-sn9x.onrender.com/donate",
                data
            );
            resetForm();
            if (response.status === 201) showAlert("Livro doado com sucesso!");
        } catch (error) {
            console.error("Error sending data:", error);
            if (error.response && error.response.status === 400)
                showAlert("Erro: Dados inválidos.");
            else if (error.response && error.response.status === 500)
                showAlert("Erro: Problema no servidor.");
            else showAlert("Erro: Não foi possível enviar os dados.");
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    const resetForm = () => {
        setTitle("");
        setCategory("");
        setAuthor("");
        setImageUrl("");
    };

    return (
        <main className={style.main}>
            <h1>
                Por favor, preencha o formulário com suas informações e as
                informações do Livro
            </h1>

            <form className={style.form} onSubmit={(e) => e.preventDefault()}>
                <div className={style.title}>
                    <figure>
                        <img src={Book} alt="Imagem de um livro" />
                    </figure>

                    <h2>Informações do Livro</h2>
                </div>

                <div className={style.inputsWrapper}>
                    <DonateInput
                        type="text"
                        placeholder="Título"
                        required
                        variant={"donate"}
                        onChange={handleTitleChange}
                        value={title}
                    />

                    <DonateInput
                        type="text"
                        placeholder="Categoria"
                        required
                        variant={"donate"}
                        onChange={handleCategoryChange}
                        value={category}
                    />

                    <DonateInput
                        type="text"
                        placeholder="Autor"
                        required
                        variant={"donate"}
                        onChange={handleAuthorChange}
                        value={author}
                    />

                    <DonateInput
                        type="text"
                        placeholder="Link da imagem"
                        required
                        variant={"donate"}
                        onChange={handleImageUrlChange}
                        value={imageUrl}
                    />
                </div>

                <div className={style.buttonsWrapper}>
                    <Button text="Doar" type="submit" onClick={sendData} />
                </div>
            </form>
        </main>
    );
};

export default Donation;
