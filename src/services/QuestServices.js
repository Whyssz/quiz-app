import { useHttp } from '../hooks/http.hooks';

export const useQuestServices = () => {
  const { request, process, setProcess, clearError } = useHttp();

  const _apiUrl = 'https://quizapi.io/api/v1/questions';
  const _apiKey = 'apiKey=fL6AYo5FW5uUcql80I9HXMcPlo2WhM2w10a0vabf';
  //in case of expansion
  const _baseLimit = 10;
  const _baseOfSet = 0;

  const getJSQuestions = async (limit = _baseLimit) => {
    const res = await request(
      `${_apiUrl}?${_apiKey}&category=code&difficulty=Easy&limit=${limit}&tags=JavaScript`
    );
    return res.map(_transformQuestion);
  };

  const _transformQuestion = (question) => {
    return {
      question: question.question,
      answers: question.answers,
      correct: question.correct_answers,
    };
  };

  return { process, setProcess, clearError, getJSQuestions };
  //js {https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=code&difficulty=Easy&limit=10&tags=JavaScript}
  //html {https://quizapi.io/api/v1/questions?apiKey=fL6AYo5FW5uUcql80I9HXMcPlo2WhM2w10a0vabf&category=code&difficulty=Easy&limit=10&tags=HTML}
  //devops {https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=devops&difficulty=Easy&limit=10}
};
