import style from "./homePage.module.css"

const HomePage = () => {



    return (
        <div className={style.header}>
            <div className={style.content_info}> 
                <h1>Hello World! i'm </h1>
                <h2>{'<Amparo Escobar/>'}</h2>
                <p>
                    A Full-Stack developer who loves build and design web experience
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem unde, recusandae aperiam uwu
                </p>
            </div>
        </div>
    )
}

export default HomePage;