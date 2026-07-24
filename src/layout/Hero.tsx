export default function Hero() {
  return (
    <section
      id='hero'
      className='flex flex-col items-center justify-around gap-5 p-5 text-center lg:mt-[5dvh] xl:mt-[10dvh]'
    >
      <h1 className='text-5xl md:text-6xl lg:text-7xl'>
        Portfolio
        <span className='block text-(--text-muted)'>Développeur</span>
      </h1>
      <p className='max-w-3xl text-lg leading-relaxed md:text-xl'>
        Bienvenue sur mon portfolio ! Je m'appelle Justin, et suis passionné
        d'informatique.
        <br />
        J'aime résoudre des problèmes en cherchant la solution la plus optimisée
        possible.
      </p>
    </section>
  )
}
