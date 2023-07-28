import React, { useState } from 'react';
import questionsData from '../data/questions.json';
import SlideQuestion from '../components/SlideQuestion';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';
import FormQuestion from '../components/FormQuestion';

import { SlideQuestionModel, MultipleChoiceQuestionModel, FormQuestionModel, QuestionType } from '../models/models';


const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const currentQuestion = questionsData[currentQuestionIndex] as SlideQuestionModel | MultipleChoiceQuestionModel | FormQuestionModel || null;
    const [userAnswers, setUserAnswers] = useState<Record<number, string | number>>({}); // Record to store question index and user answer

    const renderQuestion = () => {
        switch (currentQuestion.type) {
            case 'slide':
                return <SlideQuestion question={currentQuestion}
                    handleNextQuestion={handleNextQuestion}
                />;
            case 'multiple-choice':
                return <MultipleChoiceQuestion
                    question={currentQuestion}
                    handleUserAnswer={handleUserAnswer}
                    handleNextQuestion={handleNextQuestion} 
                    />;
            case 'form':
                return <FormQuestion
                    question={currentQuestion}
                    handleUserAnswer={handleUserAnswer}
                    handleNextQuestion={handleNextQuestion}
                />;
            default:
                return null;
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex: number) => prevIndex + 1);
    };


    const handleUserAnswer = (answer: string | number) => {
        const formattedAnswer = currentQuestion.type === 'multiple-choice' ? String(answer) : answer;
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [currentQuestionIndex]: formattedAnswer,
        }));
    };

    return (
        <div>
            {renderQuestion()}

        </div>
    )
}

export default Quiz