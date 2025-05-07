import styles from './InputTable.module.scss';

type InputTableProps = {
    label: string;
    onChange?: (value: string) => void;
    value: string;
  };

const InputTable = ({ label, onChange, value }: InputTableProps) => {
    return (
        <div className={styles.inputTable}>
            <label className={styles.label}>{label}</label>
            <input
                type="text"
                onChange={onChange ? e => onChange(e.target.value) : undefined}
                value={value}
                autoComplete="off"
                className={styles.input}
                data-fs-text
            />
        </div>
    )
}

export default InputTable;
