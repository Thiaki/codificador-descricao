import styles from './ResultCode.module.scss';
import '../../../pages/NutritionalTable/styleTable/NutritionalTable.scss';

type ResultCodeProps = {
    title?: string;
    text: string;
    nutritionalTable?: boolean;
    children?: React.ReactNode;
}

const ResultCode = ({
    title = "Resultado",
    text,
    nutritionalTable = false,
    children,
}: ResultCodeProps) => {
    const copyCode = () => navigator.clipboard.writeText(text)

    return (
        <section data-fs-result-code>
            <div style={{ width: nutritionalTable ? "50%" : "100%" }}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    <button className={styles.copyButton} onClick={() => copyCode()}>Copiar</button>
                </div>
                <div className={styles.result}>
                    <p>{text}</p>
                </div>
            </div>
            {children}
        </section>
    )
}

export default ResultCode;