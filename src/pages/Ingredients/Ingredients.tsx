import { useState } from 'react';
import Form, { InputListProps, InputTextProps, ListProps } from "../../components/common/Form/Form";
import ResultCode from "../../components/common/ResultCode/ResultCode";
import { addItemList } from '../../utils/addItemList';

const Ingredients = () => {
    const [textIngredients, SetTextIngredients] = useState<string>("");
    const [listIngredients, setListIngredients] = useState<ListProps[]>([{ text: "" }]);

    const finalCode = `<strong>${textIngredients}</strong> <br /> <br />` +
        listIngredients.map((item) => `<li>${item.text}</li>`).join("");

    const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        addItemList<ListProps>(e, setListIngredients, { text: "", textBold: "" })
    }

    const inputText: InputTextProps[] = [
        {
            label: "Ingredientes:",
            id: "ingredients",
            onChange: (value: string) => SetTextIngredients(value),
            value: textIngredients,
        }
    ]

    const inputList: InputListProps[] = listIngredients.map((item, index) => ({
        bold: false,
        label: `Ingrediente ${index + 1}: `,
        id: `ingredients-${index}`,
        onChange: (value: ListProps) => {
            setListIngredients((prevAdvantage) =>
                prevAdvantage.map((adv, i) =>
                    i === index ? { text: value.text, textBold: value?.textBold } : adv
                )
            );
        },
        items: item,
    }));

    return (
        <>
            <Form title="Ingredientes" itemsText={inputText} itemsList={inputList} addItemList={handleAddItem} />
            <ResultCode text={finalCode} />
        </>
    )
}

export default Ingredients;
