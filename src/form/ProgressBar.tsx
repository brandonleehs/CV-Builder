export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <section className="grid gap-2 p-4">
      <div className="flex items-center justify-between text-sm">
        <p>Progress</p>
        <p className="font-bold">{progress}%</p>
      </div>
      <div className="rounded-sm bg-gray-200 dark:bg-gray-100">
        <div
          className="h-2 w-full rounded-sm bg-orange-600 transition-[width]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </section>
  );
}
