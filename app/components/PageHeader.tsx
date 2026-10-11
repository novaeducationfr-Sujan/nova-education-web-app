type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#052f63] px-5 py-20 text-white lg:px-8">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#d9a321]/20" />
      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-7xl">
        <p className="font-bold uppercase tracking-[0.2em] text-[#f4cf68]">
          {eyebrow}
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
          {description}
        </p>
      </div>
    </section>
  );
}
