import style from './About.module.css'

export default function About(){
    return (
        <div className={style.aboutMe}>
            <h1>Rick and Morty</h1>
            <p>JavaScript - HTML - CSS
                <br/>NodeJs - Redux - Axios - Sequelize
                <br/>RESTfull Web - PostgreSQL
            </p>
        </div>
    );
}