import styles from './ResultCode.module.scss';

type ResultCodeProps = {
    title?: string;
    text: string;
}

const ResultCode = ({
    title = "Resultado",
    text
}: ResultCodeProps) => {
    const copyCode = () => navigator.clipboard.writeText(text)

    return (
        <section data-fs-result-code>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{title}</h2>
                <button className={styles.copyButton} onClick={() => copyCode()}>Copiar</button>
            </div>
            <div className={styles.result}>
                <p>{text}</p>
            </div>
        </section>
    )
}

export default ResultCode;