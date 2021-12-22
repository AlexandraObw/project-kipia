import './CatalogItem.css'
import {Link, useParams} from "react-router-dom";
import {catalog} from "../../databases/catalog";

export default function CatalogItem() {

    const params = useParams();
    const { id } = params;
    const product = catalog.find((item) => item.id === Number(id))

    if (!product) {
        return <div  className="page-text main__page-text">Страница не существует</div>
    }

    return (
        <div className="page-text main__page-text">
            <h2> Раздел каталога: { product?.title } </h2>
            <p> Товары раздела: { product?.body } </p>
            <Link to={'/catalog'} className="main__button-login button-login">
                <button className="main__button button">Назад в каталог</button>
            </Link>
        </div>
    )
}