import styles from './Button.module.css';

export default function Button(props) {
    const label = props.label;

    return (
        <button className={styles.btn}>{label}</button>
    );
}