import React from "react";
import s from './Button.module.scss'

type Props = {
    name: string
    onclick?: () => void

}

const Button: React.FC<Props> = ({ onclick ,  name }) => {
    return <div>   
        <button className={s.button} onClick={onclick}>{name}</button>
        </div>

}

export default Button;