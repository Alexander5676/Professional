export default function ProgressBar({ value }) {
  return <div className="h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full bg-indigo-500" style={{ width: `${value}%` }} /></div>;
}
