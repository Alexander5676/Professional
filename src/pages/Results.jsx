import { Link } from "react-router-dom";
import { interestQuestions, personalityQuestions } from "../data/questions";
import { scoreInterestAnswers, normalizeTraitScores } from "../utils/scoring";
import { calculatePersonality } from "../utils/personalityEngine";
import { getRecommendations } from "../utils/recommendationEngine";
import ProgressBar from "../components/ProgressBar";
import ProfessionCard from "../components/ProfessionCard";
import RecommendationBlock from "../components/RecommendationBlock";

export default function Results(){
  const interestAnswers = JSON.parse(localStorage.getItem("interestAnswers") || "{}");
  const personalityAnswers = JSON.parse(localStorage.getItem("personalityAnswers") || "{}");
  const traits = normalizeTraitScores(scoreInterestAnswers(interestAnswers, interestQuestions));
  const personality = calculatePersonality(personalityAnswers, personalityQuestions);
  const recs = getRecommendations(traits, personality.type.id);
  localStorage.setItem("careerResults", JSON.stringify({ traits, personality: personality.type, recommendations: recs }));

  const addToPlan=(profession)=>{
    const plan = JSON.parse(localStorage.getItem("careerPlan")||"[]");
    const tasks = profession.roadmap.map((t,idx)=>({id:`${profession.id}-${idx}`, title:t, done:false, deadline:""}));
    localStorage.setItem("careerPlan", JSON.stringify([...plan, ...tasks.filter(t=>!plan.find(p=>p.id===t.id))]));
  }

  return <main className="max-w-[420px] mx-auto p-4 space-y-4">
    <div className="card p-4"><h2 className="font-bold">{personality.type.title}</h2><p className="text-sm mt-2">Сильные стороны: {personality.type.strengths.join(", ")}</p><p className="text-sm text-slate-600">Зоны роста: {personality.type.weaknesses.join(", ")}</p></div>
    <div className="card p-4 space-y-2">{Object.entries(traits).map(([k,v])=><div key={k}><div className="flex justify-between text-sm"><span>{k}</span><span>{v}%</span></div><ProgressBar value={v} /></div>)}</div>
    {recs.map((p)=><ProfessionCard key={p.id} profession={p} onAdd={addToPlan} />)}
    <RecommendationBlock title="Рекомендации по развитию" items={["Выделяйте 30 минут в день на обучение", "Соберите портфолио из 2-3 проектов", "Найдите ментора или сообщество"]} />
    <div className="grid grid-cols-2 gap-2"><Link to="/report" className="py-2 text-center rounded-lg border">Полный отчет</Link><Link to="/articles" className="py-2 text-center rounded-lg border">Статьи</Link></div>
  </main>
}
