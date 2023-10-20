import { techSkills } from "./dataSkills"
import image from "../../assets/foto-perfil.jpg"
import style from "./aboutPage.module.css"

const AboutPage = () => {
    return (
        <div className={style.content_about}>
            <div className={style.content_info}>
                <p>
                    Hi, i'm Amparo a full stack developer who enjoy creting thing for the web.
                    My interest for programming started when i realized that i like to do useful things,
                    create experience and share them.
                    So i started with front-end develop, a little bit of HTML, another little bit with CSS and finally with JavaScript.
                    when felt i needed know more, i learn other technologies and languages both front and back, so i complete my stack
                    with MERN and PERN develop.
                    
                </p>
                <img src={image} alt="" />
            </div>

            <div className={style.content_skills}>
                {techSkills?.map((tech, index) =>  (
                    <div className={style.card_skill} key={index} data-colspan={index % 2 === 0 ? 2 : 3}>
                        <img src={tech?.src}/>
                        <code>{tech.name}</code>
                    </div>
                    )
                )}
            </div>
        </div>
    )
}

export default AboutPage;