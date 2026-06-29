import clsx from 'clsx'
import style from './BurgerMenuBtn.module.css'


type BurgerMenuBtnProps = {
    className?: string
}

function BurgerMenuBtn({className}: BurgerMenuBtnProps) {
    return (

        <button 
            className={clsx(style.button, className) }
            aria-label="burger menu button"
        >
            <span className={style.line}></span>
            <span className={style.line}></span>
            <span className={style.line}></span>
        </button>
    )
}

export default BurgerMenuBtn