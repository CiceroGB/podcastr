import styles from './styles.module.scss';

export default function Player() {

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast</strong>
            </div>

            <footer></footer>
        </div>
    );
}