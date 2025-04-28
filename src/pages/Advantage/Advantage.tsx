import { useState } from 'react';
import Form, { InputListProps, ListProps } from '../../components/common/Form/Form';
import ResultCode from '../../components/common/ResultCode/ResultCode';
import { addItemList } from '../../utils/addItemList';

const Advantage = () => {
    const [advantage, setAdvantage] = useState<ListProps[]>([{ text: "" }]);
    const finalCode = advantage
        .map((item) => `${item.text ? `<li>${item.textBold ? `<strong>${item.textBold}:</strong>` : ""}${item.text}</li>` : ""}`)
        .join("");

    const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        addItemList<ListProps>(e, setAdvantage, { text: "", textBold: "" })
    }

    const inputList: InputListProps[] = advantage.map((item, index) => ({
        bold: true,
        label: `Benefício ${index + 1}: `,
        id: `advantage-${index}`,
        onChange: (value: ListProps) => {
            setAdvantage((prevAdvantage) =>
                prevAdvantage.map((adv, i) =>
                    i === index ? { text: value.text, textBold: value?.textBold } : adv
                )
            );
        },
        items: item,
    }));

    return (
        <>
            <Form title="Benefícios" itemsList={inputList} addItemList={handleAddItem} />
            <ResultCode text={finalCode} />
        </>
    )
}

export default Advantage;
