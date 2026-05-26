import { useMemo, useState } from "react";
import ProgressBar from "../components/ProgressBar";

export default function Plan(){
  const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem("careerPlan")||"[]"));
  const progress=useMemo(()=>tasks.length?Math.round((tasks.filter(t=>t.done).length/tasks.length)*100):0,[tasks]);
  const update=(id,patch)=>{
    const next=tasks.map(t=>t.id===id?{...t,...patch}:t); setTasks(next); localStorage.setItem("careerPlan",JSON.stringify(next));
  }
  return <main className="max-w-[420px] mx-auto p-4 space-y-3"><div className="card p-4"><div className="flex justify-between"><h1 className="font-bold">План развития</h1><span>{progress}%</span></div><ProgressBar value={progress} /></div>{tasks.map(t=><div key={t.id} className="card p-3 flex items-center gap-2"><input type="checkbox" checked={t.done} onChange={e=>update(t.id,{done:e.target.checked})}/><input value={t.title} onChange={e=>update(t.id,{title:e.target.value})} className="flex-1"/><input type="date" value={t.deadline||""} onChange={e=>update(t.id,{deadline:e.target.value})} className="text-xs border rounded"/></div>)}</main>
}
