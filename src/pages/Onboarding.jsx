import { Link } from "react-router-dom";

export default function Onboarding() {
  return (
    <main className="max-w-[420px] mx-auto p-4 pt-10 space-y-6">
      <h1 className="text-3xl font-bold">Найдите карьерный путь</h1>
      <p className="text-slate-600">Пройдите два коротких теста, получите персональный отчет и план развития.</p>
      <Link to="/test" className="block text-center rounded-xl bg-indigo-600 text-white py-3">Начать тест</Link>
    </main>
  );
}
