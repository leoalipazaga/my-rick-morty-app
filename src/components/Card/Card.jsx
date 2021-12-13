import styles from './Card.module.css';

import Badge from '../Badge/Badge';

export default function Card(props) {
    const title = props.title;
    const img = props.img;
    const city = props.city;
    const color = getBadgeColor(props.status);

    function getBadgeColor(status) {
        const mapStatusColor = {
            alive: 'green',
            unknown: 'gray',
            dead: 'red'
        }
        
        return mapStatusColor[status];
    }

    return (
        <article className={styles.card}>
            <div className={styles.card__badge}>
                <Badge label='unknown' color={color}/>
            </div>
            <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt={title} />
            <header className={styles.card__header}>
                <h3 className={styles.card__header__title}>{title}</h3>
                <p className={styles.card__header__label}>Last location</p>
                <p className={styles.card__header__description}>{city}</p>
            </header>
        </article>
    );
}