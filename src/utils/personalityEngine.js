import { answerScale } from "../data/questions";
import { personalityTypes } from "../data/personalityTypes";

export function calculatePersonality(answers, questions) {
  const scores = { introvert: 0, leader: 0, researcher: 0, strategist: 0 };
  questions.forEach((q) => {
    const weight = answerScale[answers[q.id] || "no"];
    Object.entries(q.map).forEach(([key, value]) => {
      scores[key] += weight * value;
    });
  });
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  return { scores, type: personalityTypes[winner] };
}
