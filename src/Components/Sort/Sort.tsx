import React from "react";
import Button from "../Button/Button";
import item from './Sort.module.scss'



function sort_city() {
    alert('hui')
}

const Sort: React.FC = () => {
    return (
        <div className={item.sort}>
            <h3>Sorting</h3>
            <Button name={'Company'}/>
            <Button name={'City'} onclick={sort_city}/>
            <div>
                
            </div>
        </div>
    )
    }
          
export default Sort;