import { useState } from 'react';
import './HowToTake.module.scss';
import Form, { InputTextProps } from '../../components/common/Form/Form';
import ResultCode from '../../components/common/ResultCode/ResultCode';

const HowToTake = () => {
    const [textBold, setTextBold] = useState<string>("");
    const [text, setText] = useState<string>("");
    const finalCode = (`<strong>${textBold}</strong> <br /> <br /> <p>${text}</p>`).replace(/\n/g, '<br />');

    const inputText: InputTextProps[] = [
        {
            label: "Texto em Negrito:",
            id: "textBold",
            onChange: (value: string) => setTextBold(value),
            value: textBold,
        },
        {
            label: "Texto:",
            id: "text",
            onChange: (value: string) => setText(value),
            value: text,
        }
    ];

    return (
        <>
            <Form title="Como Tomar" itemsText={inputText} />
            <ResultCode text={finalCode} />
        </>
    )
}

export default HowToTake;