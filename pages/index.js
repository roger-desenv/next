import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link href="/about">
        <a>Página About</a>
      </Link>
    </div>
  )
}

export default Index