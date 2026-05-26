import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { personalityQuestions } from "../data/questions";

export default function ExtendedTest(){
  const nav = useNavigate();
  const [answers,setAnswers]=useState({});
  const submit=()=>{localStorage.setItem("personalityAnswers", JSON.stringify(answers));nav("/results");};
  return <main className="max-w-[420px] mx-auto p-4 space-y-4">{personalityQuestions.map((q)=><div key={q.id} className="card p-4"><p className="mb-2">{q.text}</p><div className="flex gap-2">{[["yes","Да"],["partial","Частично"],["no","Нет"]].map(([v,l])=><button key={v} onClick={()=>setAnswers({...answers,[q.id]:v})} className={`px-2 py-1 rounded-lg border ${answers[q.id]===v?"bg-indigo-600 text-white":""}`}>{l}</button>)}</div></div>)}<button onClick={submit} className="w-full py-3 rounded-xl bg-indigo-600 text-white">Смотреть результат</button></main>
}
