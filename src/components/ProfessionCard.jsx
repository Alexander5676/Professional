import { Link } from "react-router-dom";

export default function ProfessionCard({ profession, onAdd }) {
  return (
    <div className="card p-4 space-y-2 hover:shadow-md transition">
      <div className="flex justify-between"><h3 className="font-semibold">{profession.title}</h3><span className="text-indigo-600">{profession.match}%</span></div>
      <p className="text-sm text-slate-600">{profession.description}</p>
      <p className="text-sm">{profession.salary}</p>
      <div className="flex gap-2">
        <button onClick={() => onAdd(profession)} className="px-3 py-2 text-sm rounded-lg bg-indigo-600 text-white">Добавить в план</button>
        <Link to={`/profession/${profession.id}`} className="px-3 py-2 text-sm rounded-lg border">Подробнее</Link>
      </div>
    </div>
  );
}
