import { useState } from "react";
import './NutritionalTable.module.scss';

import { InputTextProps } from "../../components/common/Form/Form";
import Form from "../../components/common/Form/Form";
import ResultCode from "../../components/common/ResultCode/ResultCode";

import { Portions } from "./NutritionalTableCodes/Portions";
import { DailyValues } from "./NutritionalTableCodes/DailyValues";
import { Nutrient, NutrientProps } from "./NutritionalTableCodes/Nutrient";
import { addItemList } from "../../utils/addItemList";

const NutritionalTable = () => {
    const [capsules, setCapsules] = useState<string>("2 cápsulas");
    const [milligrams, setMilligrams] = useState<string>("1,5g");
    const [nutrients, setNutrients] = useState<NutrientProps[]>([{ type: "primary", nutrient: "primary", quantity: "0", dailyValue: "0" }]);

    const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        // addItemList(e, setNutrients, { type: "primary", nutrient: "primary", quantity: "0", dailyValue: "0" })
    }

    const inputText: InputTextProps[] = [
        {
            label: "Quantidade de cápsulas:",
            id: "capsules",
            onChange: (value: string) => setCapsules(value),
            value: capsules,
        },
        {
            label: "Gramagem do produto:",
            id: "milligrams",
            onChange: (value: string) => setMilligrams(value),
            value: milligrams,
        }
    ]

    const itemsNutrient: NutrientProps[] = nutrients.map((nutrient) => ({
        type: nutrient.type,
        nutrient: nutrient.nutrient,
        quantity: nutrient.quantity,
        dailyValue: nutrient.dailyValue
    }))

    const finalCode = 
        Portions({ capsules, milligrams }) +
        itemsNutrient.map((nutrient) => nutrient.nutrient ? Nutrient(nutrient) : "").join('') +
        DailyValues()

    return (
        <>
            <Form title="Tabela Nutricional" itemsText={inputText} itemsNutrient={itemsNutrient} addItemList={handleAddItem} />
            <ResultCode text={finalCode} />
        </>
    )
}

export default NutritionalTable;