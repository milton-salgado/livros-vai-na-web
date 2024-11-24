import Community from "/assets/images/community.png";
import Reading from "/assets/images/reading.png";
import Transform from "/assets/images/transform.png";
import Balance from "/assets/images/balance.png";

import InfoCard from "../../components/Card/InfoCard";

import style from "./home.module.scss";

const Home = () => {
    const infoCards = [
        {
            description:
                "Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.",
            image: {
                src: Community,
                alt: "Imagem de Comunidade",
            },
        },

        {
            description:
                "Estimula o hábito da leitura e o aprendizado contínuo.",
            image: {
                src: Reading,
                alt: "Imagem de Leitura",
            },
        },

        {
            description:
                "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.",
            image: {
                src: Transform,
                alt: "Imagem de Transformação",
            },
        },

        {
            description:
                "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.",
            image: {
                src: Balance,
                alt: "Imagem de Equilíbrio",
            },
        },
    ];

    return (
        <main className={style.main}>
            <section className={style.banner}>
                <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
            </section>
            <section className={style.info}>
                <h1>Por que devo doar?</h1>
                <div className={style.cards}>
                    {infoCards.map((infoCard, index) => (
                        <InfoCard
                            key={index}
                            description={infoCard.description}
                            image={infoCard.image}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
