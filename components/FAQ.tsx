type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-lg border border-slate-200 bg-white/82 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/82"
        >
          <summary className="cursor-pointer list-none text-sm font-bold text-slate-950 focus:outline-none group-open:text-blue-700 dark:text-white dark:group-open:text-blue-300">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
