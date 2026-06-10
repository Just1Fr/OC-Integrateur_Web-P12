import ThemeBtn from "../components/ThemeBtn"

export default function Navbar() {
  return (
    <header className='sticky flex top-0 left-0 right-0 m-5 p-5 rounded-xl flex-row items-center justify-center bg-(--bg)'>
      <nav>
        <ul className='flex flex-row gap-5'>
          <li><a href='#about'>À propos</a></li>
          <li><a href='#projects'>Projets</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <ThemeBtn className='absolute flex items-center right-0 mr-5 p-2 aspect-square'/>
    </header>
  )
}