export default function RecommendationBlock({ title, items }) {
  return (
    <section className="card p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </section>
  );
}
