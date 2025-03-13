import React, { useState, useEffect } from "react";
import quizData from "../data/quizData.json";
import StartPopup from "./StartPopup";
import ResultPopup from "./ResultPopup";
import QuizContent from "./QuizContent";

const decodeString = (str) => {
    try {
        return decodeURIComponent(str);
    } catch {
        return str;
    }
};

const processQuizData = (data) => {
    return data.map((item, index) => ({
        id: index + 1,
        totalQuestions: data.length,
        category: decodeString(item.category).replace("Entertainment:", ""),
        type: item.type,
        difficulty: item.difficulty,
        question: decodeString(item.question),
        correct_answer: decodeString(item.correct_answer),
        options: [...item.incorrect_answers.map(decodeString), decodeString(item.correct_answer)]
            .sort(() => Math.random() - 0.5)
    }));
};

const getDifficultyRating = (difficulty) => {
    switch (difficulty.toLowerCase()) {
        case 'easy': return 1;
        case 'medium': return 2;
        case 'hard': return 3;
        default: return 5;
    }
};

export default function QuizApp() {
    const [processedQuizData, setProcessedQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showStart, setShowStart] = useState(true);

    useEffect(() => {
        const processed = processQuizData(quizData);
        setProcessedQuizData(processed);
    }, []);

    const calculateScores = () => {
        const totalQuestions = processedQuizData.length;
        const answeredQuestions = Object.keys(selectedAnswers).length;
        const correctAnswers = Object.values(selectedAnswers).filter(answer => answer.isCorrect).length;
        const incorrectAnswers = answeredQuestions - correctAnswers;
        const remainingQuestions = totalQuestions - answeredQuestions;

        const currentScorePercentage = (correctAnswers / totalQuestions) * 100;
        const maxPossibleScore = ((correctAnswers + remainingQuestions) / totalQuestions) * 100;

        return {
            current: Math.round(currentScorePercentage),
            max: Math.round(maxPossibleScore),
            correctAnswers,
            incorrectAnswers,
            remainingQuestions,
            correctWidth: (correctAnswers / totalQuestions) * 100,
            incorrectWidth: (incorrectAnswers / totalQuestions) * 100,
            remainingWidth: (remainingQuestions / totalQuestions) * 100
        };
    };

    const handleAnswer = (selectedOption) => {
        const currentQuizData = processedQuizData[currentQuestion];
        const isCorrect = selectedOption === currentQuizData.correct_answer;

        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion]: { selected: selectedOption, isCorrect }
        });

        if (isCorrect) {
            setScore(score + 15);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion < processedQuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswers({});
    };

    if (!processedQuizData.length) {
        return <div className="text-center p-6">Loading...</div>;
    }

    if (showStart) {
        return (
            <StartPopup
                totalQuestions={processedQuizData.length}
                onStart={() => setShowStart(false)}
            />
        );
    }

    if (showResult) {
        const scores = calculateScores();
        return (
            <ResultPopup
                totalQuestions={processedQuizData.length}
                correctAnswers={scores.correctAnswers}
                score={score}
                onRestart={restartQuiz}
            />
        );
    }

    const currentQuizData = processedQuizData[currentQuestion];
    const scores = calculateScores();
    const progressPercentage = ((currentQuestion + 1) / processedQuizData.length) * 100;

    return (
        <div className="max-w-2xl w-full mx-auto">
            <QuizContent
                currentQuestion={currentQuestion}
                totalQuestions={processedQuizData.length}
                category={currentQuizData.category}
                difficulty={getDifficultyRating(currentQuizData.difficulty)}
                question={currentQuizData.question}
                options={currentQuizData.options}
                selectedAnswers={selectedAnswers}
                onAnswer={handleAnswer}
                scores={scores}
                progressPercentage={progressPercentage}
                correctAnswer={currentQuizData.correct_answer}
                onNextQuestion={handleNextQuestion}
            />

        
            
        </div>
    );
}
