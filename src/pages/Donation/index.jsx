import DonateInput from "../../components/Input/DonateInput";
import Book from "/assets/images/book-1.png";
import Button from "../../components/Button";

import style from "./donation.module.scss";

const Donation = () => {
    return (
        <main className={style.main}>
            <h1>
                Por favor, preencha o formulário com suas informações e as
                informações do Livro
            </h1>

            <form className={style.form}>
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
                    />

                    <DonateInput
                        type="text"
                        placeholder="Categoria"
                        required
                        variant={"donate"}
                    />

                    <DonateInput
                        type="text"
                        placeholder="Autor"
                        required
                        variant={"donate"}
                    />

                    <DonateInput
                        type="text"
                        placeholder="Link da imagem"
                        required
                        variant={"donate"}
                    />
                </div>

                <div className={style.buttonsWrapper}>
                    <Button text="Doar" type="submit" />
                </div>
            </form>
        </main>
    );
};

export default Donation;
