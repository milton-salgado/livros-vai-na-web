import FacebookIcon from "/assets/icons/facebook.png";
import InstagramIcon from "/assets/icons/instagram.png";
import TwitterIcon from "/assets/icons/twitter.png";
import YouTubeIcon from "/assets/icons/youtube.png";
import LinkedinIcon from "/assets/icons/linkedin.png";

import style from "./footer.module.scss";

const Footer = () => {
    const socialMedia = [
        {
            icon: FacebookIcon,
            alt: "Ícone do Facebook",
            url: "https://www.facebook.com",
        },
        {
            icon: InstagramIcon,
            alt: "Ícone do Instagram",
            url: "https://www.instagram.com",
        },
        {
            icon: TwitterIcon,
            alt: "Ícone do Twitter",
            url: "https://www.twitter.com",
        },
        {
            icon: YouTubeIcon,
            alt: "Ícone do YouTube",
            url: "https://www.youtube.com",
        },
        {
            icon: LinkedinIcon,
            alt: "Ícone do LinkedIn",
            url: "https://www.linkedin.com",
        },
    ];

    return (
        <footer className={style.footer}>
            <section className={style.contact}>
                <p>4002-8922</p>

                <nav>
                    <ul>
                        {socialMedia.map((social, index) => (
                            <li key={index}>
                                <a href={social.url}>
                                    <figure>
                                        <img
                                            src={social.icon}
                                            alt={social.alt}
                                        />
                                    </figure>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>

            <section className={style.about}>
                <p>
                    Layout desenvolvido pela Vai Na Web para fins educativos -
                    2024
                </p>
            </section>
        </footer>
    );
};

export default Footer;
