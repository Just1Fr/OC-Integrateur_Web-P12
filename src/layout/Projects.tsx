import Carousel from '../components/Carousel'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  const cards = PROJECTS.map((project, index) => (
    <ProjectCard project={project} key={index} />
  ))

  return (
    <section
      id='projects'
      className='flex flex-col gap-5 overflow-x-hidden rounded-xl border-2 border-(--border) bg-(--bg) p-5 shadow-(--shadow)'
    >
      <h2 className='text-3xl text-(--text-muted) md:text-4xl lg:text-5xl'>
        Projets notables
      </h2>
      <Carousel slides={cards} />
    </section>
  )
}
