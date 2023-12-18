import {
  Box,
  Flex,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import invalidAnim from '../assets/lottie/invalid.json';
import validAnim from '../assets/lottie/valid.json';
import { QuizItem } from '../types/quiz-type';

export function PlayQuiz(p: { quiz: QuizItem[] }) {
  const [answer, setAnswer] = useState<string>();
  const [currentQuizItemIndex, setCurrentQuizItemIndex] = useState<number>(0);
  const currentQuizItem: QuizItem = p.quiz[currentQuizItemIndex];
  const [history, setHistory] = useState<boolean[]>([]);
  const [questionStatus, setQuestionStatus] = useState<
    'valid' | 'invalid' | 'unanswered'
  >('unanswered');
  const [availableAnswers, setAvailableAnswers] = useState<string[]>([]);

  useEffect(() => {
    setAvailableAnswers(
      [
        currentQuizItem.correct_answer,
        ...currentQuizItem.incorrect_answers,
      ].sort(() => Math.random() - 0.5)
    );
  }, [currentQuizItemIndex]);

  useEffect(() => {
    if (answer) {
      const isValid = isValidAnswer(answer);
      if (isValid) {
        setQuestionStatus('valid');
      } else {
        setQuestionStatus('invalid');
      }
      setHistory([...history, isValid]);
    }
  }, [answer]);

  const isValidAnswer = (answer: string): boolean => {
    return answer === currentQuizItem.correct_answer;
  };

  const progressBar = () => {
    return (
      <HStack>
        {p.quiz.map((_, i) => {
          return (
            <Box
              key={i}
              h={3}
              backgroundColor={
                i >= currentQuizItemIndex
                  ? 'gray.200'
                  : history[i] === true
                  ? 'green.300'
                  : 'red.300'
              }
              w={25}
            />
          );
        })}
      </HStack>
    );
  };

  const radioList = availableAnswers.map((availableAnswer: string) => {
    return (
      <Radio key={availableAnswer} value={availableAnswer}>
        <Text
          color={
            questionStatus === 'unanswered'
              ? 'black'
              : isValidAnswer(availableAnswer)
              ? 'green.400'
              : 'red.400'
          }
          dangerouslySetInnerHTML={{ __html: availableAnswer }}
        ></Text>
      </Radio>
    );
  });
  return (
    <Flex direction={'column'} alignItems={'center'} justify={'center'}>
      {progressBar()}
      <Heading
        fontSize={'3xl'}
        mt={100}
        mb={20}
        dangerouslySetInnerHTML={{ __html: currentQuizItem.question }}
      />

      <RadioGroup
        value={answer}
        onChange={questionStatus === 'unanswered' ? setAnswer : undefined}
      >
        <SimpleGrid columns={2} spacing={4}>
          {radioList}
        </SimpleGrid>
      </RadioGroup>
      <Lottie
        style={{ marginTop: 100, height: 150 }}
        animationData={
          questionStatus === 'unanswered'
            ? null
            : questionStatus === 'valid'
            ? validAnim
            : invalidAnim
        }
        loop={false}
        onComplete={() => {
          setCurrentQuizItemIndex(currentQuizItemIndex + 1);
          setQuestionStatus('unanswered');
        }}
      />
    </Flex>
  );
}
