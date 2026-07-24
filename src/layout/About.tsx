export default function About() {
  return (
    <section className='flex flex-col items-center gap-5 p-5 text-center'>
      <h2
        id='about'
        className='text-3xl text-(--text-muted) md:text-4xl lg:text-5xl'
      >
        Parcours
      </h2>
      <p className='max-w-3xl text-lg leading-relaxed md:text-xl'>
        Je suis actuellement en fin de formation Intégrateur Web.
        <br />
        J'ai précédemment obtenu un Bac Spé Maths-NSI, et prévois de poursuivre
        vers un parcours Développeur logiciel, pour m'orienter d'avantage vers
        le back-end.
        <br />
        <br />
        Les technologies que je maîtrise : HTML, CSS, JavaScript, TypeScript,
        React, SASS, Tailwind CSS, Python, RegEx, AutoHotkey
        <br />
        Des outils que je connais bien : Git, GitHub, Figma, Notion
        <br />
        D'autres langages avec lesquels j'ai pu expérimenter : C++, SQL, Lua,
        C#, Kotlin, Rust
      </p>
    </section>
  )
}
