import style from './About.module.css'

export default function About(){
    return (
        <div className={style.aboutMe}>
            <h1>Its Me: Jose Unzueta</h1>
            <h5>BudgetRat_</h5>
            <img src="https://cdn.7tv.app/emote/60f4526ff7fdd1860a530c0b/4x.webp"
            alt="si"/>
        </div>
    );
}