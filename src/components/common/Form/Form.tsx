import styles from './Form.module.scss';
import InputText from '../InputText/InputText';
import InputList from '../InputList/InputList';
import InputTable from '../InputTable/InputTable';
import { NutrientProps } from '../../../pages/NutritionalTable/NutritionalTableCodes/Nutrient';

type FormProps = {
    title?: string;
    itemsText?: InputTextProps[];
    itemsList?: InputListProps[];
    itemsNutrient?: NutrientProps[];
    addItemList?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    addNutrient?: (type: "primary" | "secondary" | "third", e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface InputItem {
    label: string;
    id: string;
}

export interface InputTextProps extends InputItem {
    onChange: (value: string) => void;
    value: string;
}

export interface InputListProps extends InputItem {
    bold?: boolean;
    onChange: (value: ListProps) => void;
    items: {
        text: string;
        textBold?: string;
    };
}

export interface ListProps {
    text: string;
    textBold?: string;
};

const Form = ({ title, itemsText, itemsList, itemsNutrient, addItemList, addNutrient }: FormProps) => {
    return (
        <section data-fs-form>
            <h2 className={styles.title}>{title}</h2>
            <form className={styles.form}>
                {itemsText ? (
                    itemsText?.map((item) => (
                        <InputText
                            label={item.label}
                            id={item.id}
                            onChange={item.onChange}
                            value={item.value}
                        />
                    ))) : <></>
                }
                {itemsList ? (
                    <>
                        <div className={styles.inputList}>
                            {itemsList?.map((item, index) => (
                                <InputList
                                    key={index}
                                    id={item.id}
                                    bold={item.bold}
                                    label={item.label}
                                    onChange={item.onChange}
                                    items={item.items}
                                />
                            ))}
                        </div>
                        <button className={styles.addListButton} onClick={addItemList}>Adicionar mais Listas</button>
                    </>
                ) : <></>}
                {itemsNutrient && addNutrient ? (
                    <>
                        <div className={styles.inputTable}>
                            {itemsNutrient?.map((item, index) => {
                                let textType;
                                switch (item.type) {
                                    case 'primary':
                                        textType = "1º Nível"
                                        break;
                                    case 'secondary':
                                        textType = "2º Nível"
                                        break;
                                    case 'third':
                                        textType = "3º Nível"
                                        break;
                                    default:
                                        textType = "Desconhecido"
                                }
                                return (
                                    <div key={index}>
                                        <h4 className={styles.textType}>{textType}</h4>
                                        <div className={styles.inputTableItem}>
                                            <InputTable
                                                label={`Nutriente ${index + 1}`}
                                                onChange={item.nutrient.onChange}
                                                value={item.nutrient.name}
                                            />
                                            <InputTable
                                                label={`Quantidade ${index + 1}`}
                                                onChange={item.quantity.onChange}
                                                value={item.quantity.name}
                                            />
                                            <InputTable
                                                label={`Valor Diário ${index + 1}`}
                                                onChange={item.dailyValue.onChange}
                                                value={item.dailyValue.name}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.containerButton}>
                            <button className={styles.addListButton} onClick={e => addNutrient('primary', e)}>Adicionar Nutriente 1º Nível</button>
                            <button className={styles.addListButton} onClick={e => addNutrient('secondary', e)}>Adicionar Nutriente 2º Nível</button>
                            <button className={styles.addListButton} onClick={e => addNutrient('third', e)}>Adicionar Nutriente 3º Nível</button>
                        </div>
                    </>
                ) : <></>}
            </form>
        </section>
    )
}

export default Form;
