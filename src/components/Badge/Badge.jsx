import styles from './Badge.module.css';

export default function Badge(props) {
    const CSSColor = styles[`badge--${props.color}`];
    const color = CSSColor || '';
    
    return <span className={`${styles.badge} ${color}`}>{props.label}</span>
}