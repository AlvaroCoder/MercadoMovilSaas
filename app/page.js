import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex w-full h-screen items-center justify-center">
        <Link className='p-7 bg-blue-600 rounded-lg shadow-md' href={"/dashboard"}><p>Iniciar Sesión</p></Link>
    </main>
  )
}
