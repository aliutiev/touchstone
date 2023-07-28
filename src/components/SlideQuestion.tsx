// src/components/SlideQuestion.tsx
import React from 'react';
import { SlideQuestionModel } from '../models/models';

interface SlideQuestionProps {
    question: SlideQuestionModel;
    handleNextQuestion: () => void; 
}


const SlideQuestion = ({ question, handleNextQuestion }: SlideQuestionProps) => {

    return (
        <div>
            <h1>{question.title}</h1>
            <p>{question.content}</p>
            <button onClick={handleNextQuestion} >Next</button>
        </div>
    )
}

export default SlideQuestion
