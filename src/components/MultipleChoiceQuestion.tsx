import React, { useState, useEffect } from 'react'

import { MultipleChoiceQuestionModel } from '../models/models';

interface MultipleChoiceQuestionProps {
    question: MultipleChoiceQuestionModel;
    handleUserAnswer: (answer: string | number) => void; // Function received as a prop from Quiz component
    handleNextQuestion: () => void;
}

const MultipleChoiceQuestion = ({ question, handleUserAnswer, handleNextQuestion }: MultipleChoiceQuestionProps) => {

    const handleOptionSelect = (optionIndex: number) => {
        const selectedOption = question.options[optionIndex];
        setSelectedOption(optionIndex)
        handleUserAnswer(selectedOption);
    };

    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const isNextButtonDisabled = selectedOption === null;

    useEffect(() => {
        setSelectedOption(null);
    }, [question]);


    return (
        <div>
            <h1>
                {question.title}
            </h1>
            <div>
                {question.content}
            </div>
            {question.options.map((option, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        name="answer"
                        value={index}
                        onChange={() => handleOptionSelect(index)}
                    />
                    {option}
                </label>
            ))}
            <button onClick={handleNextQuestion} disabled={isNextButtonDisabled} >Next</button>
        </div>
    )
}

export default MultipleChoiceQuestion