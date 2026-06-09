import styles from "./Form.module.scss";
import InputText from "../InputText/InputText";
import InputList from "../InputList/InputList";
import InputTable from "../InputTable/InputTable";
import { NutrientProps } from "../../../pages/NutritionalTable/NutritionalTableCodes/Nutrient";

type FormProps = {
  title?: string;
  itemsText?: InputTextProps[];
  itemsList?: InputListProps[];
  itemsNutrient?: NutrientProps[];
  addItemList?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  addNutrient?: (
    type: "primary" | "secondary" | "third",
    e: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  deleteNutrient?: (index: number) => void;
  isDelete?: boolean;
};

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
  onDelete?: () => void;
  items: {
    text: string;
    textBold?: string;
  };
  isDelete?: boolean;
}

export interface ListProps {
  text: string;
  textBold?: string;
}

const Form = ({
  title,
  itemsText,
  itemsList,
  itemsNutrient,
  addItemList,
  addNutrient,
  deleteNutrient,
  isDelete,
}: FormProps) => {
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
          ))
        ) : (
          <></>
        )}
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
                  onDelete={item.onDelete}
                  items={item.items}
                  isDelete={isDelete}
                />
              ))}
            </div>
            <button className={styles.addListButton} onClick={addItemList}>
              Adicionar mais Listas
            </button>
          </>
        ) : (
          <></>
        )}
        {itemsNutrient && addNutrient ? (
          <>
            <div className={styles.inputTable}>
              {itemsNutrient?.map((item, index) => {
                let textType;
                switch (item.type) {
                  case "primary":
                    textType = "1º Nível";
                    break;
                  case "secondary":
                    textType = "2º Nível";
                    break;
                  case "third":
                    textType = "3º Nível";
                    break;
                  default:
                    textType = "Desconhecido";
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
                      <button
                        type="button"
                        className={styles.deleteButton}
                        onClick={() => deleteNutrient?.(index)}
                        aria-label="Remover benefício"
                      >
                        <svg
                          width="40px"
                          height="40px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.5001 6H3.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M9.5 11L10 16"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M14.5 11L14 16"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                            stroke="#1C274C"
                            stroke-width="1.5"
                          />
                          <path
                            d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.containerButton}>
              <button
                className={styles.addListButton}
                onClick={(e) => addNutrient("primary", e)}
              >
                Adicionar Nutriente 1º Nível
              </button>
              <button
                className={styles.addListButton}
                onClick={(e) => addNutrient("secondary", e)}
              >
                Adicionar Nutriente 2º Nível
              </button>
              <button
                className={styles.addListButton}
                onClick={(e) => addNutrient("third", e)}
              >
                Adicionar Nutriente 3º Nível
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </form>
    </section>
  );
};

export default Form;
