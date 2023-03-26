export const questionsHeavy = [
  {
    question: 'Когда в России празднуют день ВМФ?',
    answers: ['2 августа', '19 марта', '2-е воскресение июля', 'Посл. воскресение июля'],
    correctAnswer: 'Посл. воскресение июля',
    incorrectAnswer: ['19 марта', '2 августа']
  },
  {
    question: 'Когда в России празднуют день ВМФ?',
    answers: ['2 августа', '19 марта', '2-е воскресение июля', 'Посл. воскресение июля'],
    correctAnswer: 'Посл. воскресение июля',
    incorrectAnswer: ['19 марта', '2 августа']
  },
  {
    question: '	Кличка основателя группы Коррозия металла',
    answers: ['Скелет', 'Паук', 'Ручейник', 'Горшок'],
    correctAnswer: 'Паук',
    incorrectAnswer: ['Скелет', 'Горшок']
  },
  {
    question: 'Какой вопрос, по определению, не требует ответа?',
    answers: ['Каверзный', 'Философский', 'Экзаменационный', 'Риторический'],
    correctAnswer: 'Риторический',
    incorrectAnswer: ['Каверзный', 'Философский']
  },
  {
    question: 'Сколько стран входит в состав Великобритании?',
    answers: [4, 6, 3, 1],
    correctAnswer: 4,
    incorrectAnswer: [3, 1]
  },
  {
    question: 'Кто из перечисленных ниже лиц НЕ является египетским фараоном?',
    answers: ['Сети', 'Акхенотеп', 'Смендес', 'Имхотеп'],
    correctAnswer: 'Имхотеп',
    incorrectAnswer: ['Смендес', 'Акхенотеп']
  },
];

export let questionRandItemHeavy = Math.floor(Math.random()*questionsHeavy.length);
