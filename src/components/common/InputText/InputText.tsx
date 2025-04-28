import styles from './InputText.module.scss';

type InputTextProps = {
    label: string;
    id: string;
    onChange: (value: string) => void;
    value: string;
}

const InputText = ({ label, id, onChange, value }: InputTextProps) => {
    return (
        <div className={styles.inputText}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <textarea
                id={id}
                className={styles.input}
                onChange={e => onChange(e.target.value)}
                value={value}
                data-fs-textarea
            />
        </div>
    )
}

export default InputText;
