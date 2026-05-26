import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticleDetail(){
  const {id}=useParams();
  const article=articles.find(a=>a.id===id);
  if(!article) return <main className="max-w-[420px] mx-auto p-4">Статья не найдена</main>;
  return <main className="max-w-[420px] mx-auto p-4"><article className="card p-4"><h1 className="font-bold text-xl">{article.title}</h1><p className="text-xs text-slate-500 mt-1">{article.category}</p><p className="mt-3 text-slate-700">{article.content}</p></article></main>
}
