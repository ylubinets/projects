import React from 'react';
import Card from "../Card/Card";
import styles from './List.module.scss'

const List = (props) => {

    const {items, error, isFav, onFavClick, setAddToCart, cartArr, delFromCart, title, listEmpty} = props;

    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            <div className={`${styles.cards_wrapper}`}>
                {!listEmpty.length && <h3>Nothing here yet!</h3>}
                {error ? <div>{error}</div> : items.map((item) =>
                    <Card key={item.id} item={item}
                          isFav={isFav}
                          onFavClick={() => onFavClick(item.id)}
                          setAddToCart={setAddToCart}
                          setDelFromCart={delFromCart}
                          isDelBtn={!cartArr.includes(item.id)}
                    />)}
            </div>
        </div>
    )
}

export default List