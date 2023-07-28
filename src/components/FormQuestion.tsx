import React from 'react';
import { FormQuestionModel } from '../models/models';

interface FormQuestionProps {
    question: FormQuestionModel;
    handleUserAnswer: (answer: string) => void;
    handleNextQuestion: () => void;
}
const FormQuestion = ({ question, handleUserAnswer, handleNextQuestion }: FormQuestionProps) => {

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userInput = formData.get('userInput') as string;
        handleUserAnswer(userInput);
    };

    return (
        <div>
            <div>{question.content}</div>
            
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="userInputName" required />
                <input type="email" name="userInputEmail" required />
                <button type="submit">Submit</button>
            </form>

            <button onClick={handleNextQuestion}> Next </button>

        </div>
    )
}

export default FormQuestion