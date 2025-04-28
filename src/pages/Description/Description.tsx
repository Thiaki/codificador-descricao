import { useState } from 'react';
import './Description.module.scss';
import Form, { InputTextProps } from '../../components/common/Form/Form';
import ResultCode from '../../components/common/ResultCode/ResultCode';

const Description = () => {
    const [description, setDescription] = useState<string>("");

    const inputText: InputTextProps[] = [
        {
            label: "Sobre o produto:",
            id: "description",
            onChange: (value: string) => setDescription(value),
            value: description,
        }
    ]

    return (
        <>
            <Form itemsText={inputText} />
            <ResultCode text={description.replace(/\n/g, '<br />')} />
        </>
    )
}

export default Description
