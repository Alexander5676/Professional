import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-slate-50/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-[420px] mx-auto p-4 flex justify-between">
        <Link to="/" className="font-semibold">CareerPath MVP</Link>
        <Link to="/plan" className="text-sm text-indigo-600">Мой план</Link>
      </div>
    </header>
  );
}
