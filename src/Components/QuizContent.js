import React from 'react';
import StarRating from './StarRating';

const QuizContent = ({
    currentQuestion,
    totalQuestions,
    category,
    difficulty,
    question,
    options,
    selectedAnswers,
    onAnswer,
    onNextQuestion, 
    scores,
    progressPercentage,
    correctAnswer
}) => {
    const isAnswered = selectedAnswers[currentQuestion];
    const isCorrect = isAnswered && isAnswered.selected === correctAnswer;

    return (
        <div className="relative max-w-2xl w-full mx-auto bg-karry-600 rounded-b-xl rounded-t-lg shadow-xl h-full md:h-[600px] animate-fade-in">
            {/* Top Progress Bar */}
            <div className="absolute rounded-full top-0 left-0 w-full h-2 bg-gray-200">
                <div
                    className="h-full rounded-full bg-gray-600"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

            <div className="p-6 mt-2">
                <div className="mb-6">
                    <h2 className="text-xl font-bold">Question {currentQuestion + 1} of {totalQuestions}</h2>
                    <div className="text-sm text-gray-600">
                        <span className="font-semibold">Entertainment:</span> {category}
                    </div>
                    <StarRating rating={difficulty} />
                </div>

                <div className="mb-8">
                    <p className="text-xl font-semibold mb-6">{question}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-10">
                        {options.map((option) => {
                            const isSelected = isAnswered && isAnswered.selected === option;
                            const isWrong = isSelected && option !== correctAnswer;

                            return (
                                <button
                                    key={option}
                                    onClick={() => !isAnswered && onAnswer(option)}
                                    disabled={isAnswered}
                                    className={`group relative flex items-center w-full p-4 
                                        bg-karry-500 rounded-lg transition-all
                                        ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-chablis'}
                                        ${isSelected && !isAnswered ? 'bg-chablis' : ''}
                                        ${isSelected && isCorrect ? 'bg-green-100' : ''}
                                        ${isWrong ? 'bg-red-100' : ''}
                                        ${!isSelected && correctAnswer === option && isAnswered ? 'bg-green-100' : ''}
                                    `}
                                >
                                    <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center
                                        ${!isAnswered && isSelected ? 'border-vivid-tangerine-600 border-2' : ''}
                                        ${!isAnswered && !isSelected ? 'border-karry-600 border-2' : ''}
                                        ${isSelected && isCorrect ? 'border-green-500 border-2' : ''}
                                        ${isWrong ? 'border-red-500 border-2' : ''}
                                        ${!isSelected && correctAnswer === option && isAnswered ? 'border-green-500 border-2' : ''}
                                    `}>
                                        {isSelected && (
                                            <div className={`w-2.5 h-2.5 rounded-full
                                                ${!isAnswered ? 'bg-vivid-tangerine' : ''}
                                                ${isCorrect ? 'bg-green-500' : ''}
                                                ${isWrong ? 'bg-red-500' : ''}
                                            `}></div>
                                        )}
                                    </div>
                                    <span className="text-left">{option}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Show Correct/False Message */}
                    {isAnswered && (
                        <div className={`mt-6 text-xl text-center font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {isCorrect ? 'Correct!' : 'Sorry!'}
                        </div>
                    )}
                    {/* Next Question Button */}
                    {isAnswered && (
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={onNextQuestion}
                                className="px-6 py-2 bg-vivid-tangerine text-white rounded-lg shadow-lg hover:bg-vivid-tangerine-600 transition"
                            >
                                Next Question
                            </button>
                        </div>
                     )} 
                </div>

                <div className="mt-10">
                    <div className="flex justify-between text-base font-semibold text-gray-600 mb-1">
                        <span>Score: {scores.current}%</span>
                        <span>Max Score: {scores.max}%</span>
                    </div>
                    <div className="h-5 bg-white rounded-full overflow-hidden relative">
                        {/* Correct answers */}
                        <div className="absolute h-full bg-green-500 left-0" style={{ width: `${scores.correctWidth}%` }}></div>
                        {/* Incorrect answers */}
                        <div className="absolute h-full bg-red-500" style={{
                            left: `${scores.correctWidth}%`,
                            width: `${scores.incorrectWidth}%`
                        }}></div>
                        {/* Remaining questions */}
                        <div className="absolute h-full bg-white border border-gray-200" style={{
                            left: `${scores.correctWidth + scores.incorrectWidth}%`,
                            width: `${scores.remainingWidth}%`
                        }}></div>
                        {/* Potential maximum score section */}
                        <div className="absolute h-full bg-blue-500" style={{
                            left: `${scores.correctWidth + scores.incorrectWidth}%`,
                            width: `${scores.max - (scores.correctWidth + scores.incorrectWidth)}%`
                        }}></div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default QuizContent;
