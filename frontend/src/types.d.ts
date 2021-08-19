export as namespace AppTypes;

export type QuestionType = {
    id: number;
    order: number;
    text: string;
    answers: AnswerType[];
};

export type AnswerType = {
    id: number;
    order: number;
    text: string;
};
