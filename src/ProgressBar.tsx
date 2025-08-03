export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <section className="grid gap-2 p-4">
      <div className="flex items-center justify-between text-sm">
        <p>Progress</p>
        <p className="font-bold">{progress}%</p>
      </div>
      <div
        className="h-2 w-full rounded-sm transition-all"
        style={{
          backgroundImage: `linear-gradient(to right, #ea580c ${progress}%, #f3f4f6 ${progress}%)`,
        }}
      ></div>
    </section>
  );
}
