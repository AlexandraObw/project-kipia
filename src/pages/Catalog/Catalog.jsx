import {useEffect, useState} from "react";
import {catalog} from "../../databases/catalog";
import {useNavigate} from "react-router-dom";
import './Catalog.css'

export default function Catalog() {

    const [items, setItems] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        const response = catalog;
        setItems(response)
    }, [])


    return (
        <div className="main__catalog catalog">
            <h1 className="title catalog__title">Каталог</h1>
            {items.map((item) => {
                return (
                    <ul className="catalog__list list">
                        <li key={item.id} className="catalog__card card">
                            <img src={'https://i.ibb.co/pZhb9z6/cardpic.png'} alt='Каталог оборудования' width='30px'/>
                            <button onClick={() => navigate(`/catalog/${item.id}`)} className="body__button button">{item.title}</button>
                        </li></ul>
                    )
                })}
        </div>

    )
}
