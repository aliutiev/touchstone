export type QuestionType = 'slide' | 'multiple-choice' | 'form';

export interface SlideQuestionModel {
    type: 'slide';
    title: string;
    content: string;
}

export interface MultipleChoiceQuestionModel {
    type: 'multiple-choice';
    title: string;
    content: string;
    options: string[];
    correctOption: number;
}

export interface FormQuestionModel {
    type: 'form';
    title: string;
    content: string;
    fields: (TextField | EmailField | DropdownField)[];
}

export interface TextField {
    type: 'text';
    label: string;
    required: boolean;
}

export interface EmailField {
    type: 'email';
    label: string;
    required: boolean;
}

export interface DropdownField {
    type: 'dropdown';
    label: string;
    options: string[];
    required: boolean;
}