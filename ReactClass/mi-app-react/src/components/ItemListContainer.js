import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return ( 
        <container>
        <p>Productos</p>
        <h3 className="greeting">{greeting}</h3>
        </container>
    );
}

export default ItemListContainer;