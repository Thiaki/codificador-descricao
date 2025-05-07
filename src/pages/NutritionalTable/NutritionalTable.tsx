import { useState } from "react";
import './NutritionalTable.module.scss';

import { InputTextProps } from "../../components/common/Form/Form";
import Form from "../../components/common/Form/Form";
import ResultCode from "../../components/common/ResultCode/ResultCode";

import { Portions } from "./NutritionalTableCodes/Portions";
import { DailyValues } from "./NutritionalTableCodes/DailyValues";
import { Nutrient, NutrientProps } from "./NutritionalTableCodes/Nutrient";

const NutritionalTable = () => {
    const [capsules, setCapsules] = useState<string>("2 cápsulas");
    const [milligrams, setMilligrams] = useState<string>("1,5g");

    const [inputNutrients, setInputNutrients] = useState<NutrientProps[]>([
        {
            type: "primary",
            nutrient: { name: "Nutriente" },
            quantity: { name: "0" },
            dailyValue: { name: "0" },
        },
    ]);

    const handleChange = (
        index: number,
        field: "nutrient" | "quantity" | "dailyValue",
        value: string
    ) => {
        const newInputs = [...inputNutrients];
        const updatedField = {
            ...newInputs[index][field],
            name: value,
        };
        newInputs[index] = {
            ...newInputs[index],
            [field]: updatedField,
        };
        setInputNutrients(newInputs);
    };

    const itemsNutrient: NutrientProps[] = inputNutrients.map((input, index) => ({
        type: input.type,
        nutrient: {
            name: input.nutrient.name,
            onChange: (value: string) => handleChange(index, "nutrient", value),
        },
        quantity: {
            name: input.quantity.name,
            onChange: (value: string) => handleChange(index, "quantity", value),
        },
        dailyValue: {
            name: input.dailyValue.name,
            onChange: (value: string) => handleChange(index, "dailyValue", value),
        },
    }));

    const addNutrient = (
        type: "primary" | "secondary" | "third",
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        setInputNutrients(prev => [
            ...prev,
            {
                type,
                nutrient: { name: "Nutriente" },
                quantity: { name: "0" },
                dailyValue: { name: "0" },
            }
        ]);
    };

    const inputText: InputTextProps[] = [
        {
            label: "Quantidade de cápsulas:",
            id: "capsules",
            onChange: setCapsules,
            value: capsules,
        },
        {
            label: "Gramagem do produto:",
            id: "milligrams",
            onChange: setMilligrams,
            value: milligrams,
        },
    ];

    const finalCode =
        Portions({ capsules, milligrams }) +
        itemsNutrient.map(nutrient => nutrient.nutrient.name ? Nutrient(nutrient) : "").join('') +
        DailyValues();

    return (
        <>
            <Form
                title="Tabela Nutricional"
                itemsText={inputText}
                itemsNutrient={itemsNutrient}
                addNutrient={addNutrient}
            />
            <ResultCode text={finalCode} />
        </>
    );
};

export default NutritionalTable;
