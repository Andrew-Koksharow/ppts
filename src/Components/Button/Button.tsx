import React from "react";

type Props = {
    name: string
    onclick?: () => void
}

const Button: React.FC<Props> = ({ onclick ,  name }) => {
    return <div>   
        <button onClick={onclick}>{name}</button>
        </div>

}

export default Button;