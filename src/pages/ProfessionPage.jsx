import { useParams } from "react-router-dom";
import { professions } from "../data/professions";

export default function ProfessionPage(){
  const {id}=useParams();
  const p=professions.find(x=>x.id===id);
  if(!p) return <main className="max-w-[420px] mx-auto p-4">Профессия не найдена</main>;
  return <main className="max-w-[420px] mx-auto p-4"><div className="card p-4 space-y-2"><h1 className="font-bold text-xl">{p.title}</h1><p>{p.description}</p><p className="text-sm">Средняя зарплата: {p.salary}</p><h3 className="font-semibold">Навыки</h3><ul className="list-disc pl-5">{p.skills.map(s=><li key={s}>{s}</li>)}</ul><h3 className="font-semibold">Roadmap</h3><ul className="list-decimal pl-5">{p.roadmap.map(s=><li key={s}>{s}</li>)}</ul><h3 className="font-semibold">Курсы</h3><ul className="list-disc pl-5">{p.courses.map(s=><li key={s}>{s}</li>)}</ul></div></main>
}
