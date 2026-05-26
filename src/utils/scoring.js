import { answerScale } from "../data/questions";

export function scoreInterestAnswers(answers, questions) {
  const totals = { analytics: 0, communication: 0, creativity: 0, management: 0, technology: 0 };
  questions.forEach((q) => {
    totals[q.trait] += answerScale[answers[q.id] || "no"];
  });
  return totals;
}

export function normalizeTraitScores(raw) {
  const max = Math.max(...Object.values(raw), 1);
  return Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, Math.round((v / max) * 100)]));
}
