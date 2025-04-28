import { InputListProps } from '../Form/Form';
import styles from './InputList.module.scss';

const InputList = ({ bold = false, label, id, onChange, items}: InputListProps) => {
    return (
        <div className={styles.inputList}>
            {bold && (
                <>
                    <label className={styles.labelBold} htmlFor={`${id}-bold`}>Texto em Negrito:</label>
                    <input
                        type="text"
                        id={`${id}-bold`}
                        onChange={e => onChange({ textBold: e.target.value, text: items?.text })}
                        value={items?.textBold}
                        autoComplete="off"
                        className={styles.inputBold}
                        data-fs-text
                    />
                </>
            )}
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                onChange={e => onChange({ text: e.target.value, textBold: items?.textBold })}
                value={items?.text}
                autoComplete="off"
                className={styles.input}
                data-fs-text
            />
        </div>
    )
}

export default InputList;
