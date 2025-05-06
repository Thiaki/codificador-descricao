import styles from './Form.module.scss';
import InputText from '../InputText/InputText';
import InputList from '../InputList/InputList';
import { NutrientProps } from '../../../pages/NutritionalTable/NutritionalTableCodes/Nutrient';

type FormProps = {
    title?: string;
    itemsText?: InputTextProps[];
    itemsList?: InputListProps[];
    itemsNutrient?: NutrientProps[];
    addItemList?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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

const Form = ({ title, itemsText, itemsList, itemsNutrient, addItemList }: FormProps) => {
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
                {itemsNutrient ? (
                    <>
                        <button className={styles.addListButton} onClick={e => e.preventDefault()}>Adicionar Nutriente Primário</button>
                        <button className={styles.addListButton} onClick={e => e.preventDefault()}>Adicionar Nutriente Secundário</button>
                        <button className={styles.addListButton} onClick={e => e.preventDefault()}>Adicionar Nutriente Terciários</button>

                    </>
                ) : <></>}
            </form>
        </section>
    )
}

export default Form;
