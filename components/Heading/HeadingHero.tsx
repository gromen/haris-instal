type HeadingHeroProps = {
  children: React.ReactNode;
  id: string;
};

export default function HeadingHero({ id, children }: HeadingHeroProps) {
  return (
    <section id={id} className="scroll-mt-28 pt-16">
      <div className="container mx-auto p-4">
        <h3 className="text-black mb-4 text-center text-2xl font-bold lg:mb-8 lg:text-4xl">
          {children}
        </h3>
      </div>
    </section>
  );
}
