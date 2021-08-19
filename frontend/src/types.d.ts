export type QuestionType = {
    id: number;
    order: number;
    text: string;
    answers: AnswerType[];
    selectedAnswerId?: number;
};

export type AnswerType = {
    id: number;
    order: number;
    text: string;
};
