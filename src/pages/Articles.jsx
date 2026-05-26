import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { articles, articleCategories } from "../data/articles";

export default function Articles(){
  const [q,setQ]=useState(""); const [cat,setCat]=useState("Все");
  const filtered=useMemo(()=>articles.filter(a=>(cat==="Все"||a.category===cat)&&`${a.title} ${a.excerpt}`.toLowerCase().includes(q.toLowerCase())),[q,cat]);
  return <main className="max-w-[420px] mx-auto p-4 space-y-3"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Поиск" className="w-full rounded-lg border p-2"/><div className="flex gap-2 overflow-auto">{articleCategories.map(c=><button key={c} onClick={()=>setCat(c)} className={`px-3 py-1 rounded-full border ${cat===c?"bg-indigo-600 text-white":""}`}>{c}</button>)}</div>{filtered.map(a=><Link to={`/articles/${a.id}`} key={a.id} className="card p-4 block"><h3 className="font-semibold">{a.title}</h3><p className="text-sm text-slate-600">{a.excerpt}</p></Link>)}</main>
}
