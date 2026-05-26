export const interestQuestions = [
  { id: 1, text: "Мне нравится анализировать данные и искать закономерности.", trait: "analytics" },
  { id: 2, text: "Я легко нахожу общий язык с новыми людьми.", trait: "communication" },
  { id: 3, text: "Мне интересно придумывать нестандартные решения.", trait: "creativity" },
  { id: 4, text: "Я люблю организовывать людей и процессы.", trait: "management" },
  { id: 5, text: "Мне нравится изучать новые цифровые инструменты.", trait: "technology" },
  { id: 6, text: "Я получаю удовольствие от решения сложных задач.", trait: "analytics" },
  { id: 7, text: "Мне комфортно выступать перед аудиторией.", trait: "communication" },
  { id: 8, text: "Я часто генерирую креативные идеи.", trait: "creativity" },
  { id: 9, text: "Мне нравится брать ответственность за результат команды.", trait: "management" },
  { id: 10, text: "Я хочу работать в технологичной сфере.", trait: "technology" },
  { id: 11, text: "Я внимателен к деталям и точности.", trait: "analytics" },
  { id: 12, text: "Мне интересно помогать людям развиваться.", trait: "communication" }
];

export const personalityQuestions = [
  { id: 1, text: "Предпочитаю работать в тишине и самостоятельно.", map: { introvert: 2, researcher: 1 } },
  { id: 2, text: "Легко беру инициативу в команде.", map: { leader: 2, strategist: 1 } },
  { id: 3, text: "Мне нравится глубоко изучать новую тему.", map: { researcher: 2, introvert: 1 } },
  { id: 4, text: "Часто соединяю креатив и стратегию.", map: { strategist: 2, leader: 1 } },
  { id: 5, text: "Мне важно иметь четкий план действий.", map: { strategist: 2, researcher: 1 } },
  { id: 6, text: "Я получаю энергию от общения с людьми.", map: { leader: 2, strategist: 1 } },
  { id: 7, text: "Я люблю искать причины и логику в происходящем.", map: { introvert: 1, researcher: 2 } },
  { id: 8, text: "Мне нравится запускать новые проекты.", map: { leader: 1, strategist: 2 } },
  { id: 9, text: "Мне проще сосредоточиться на одной задаче.", map: { introvert: 2, researcher: 1 } },
  { id: 10, text: "Я люблю вдохновлять других на изменения.", map: { leader: 2, strategist: 1 } }
];

export const answerScale = {
  yes: 2,
  partial: 1,
  no: 0,
};
