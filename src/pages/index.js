import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default function Index({ title = 'Amine Neggazi' }) {
  return (
    <>
      <link rel="icon" href="wave-emoji.ico"></link>
      <title>{ title }</title>
      <Layout />
      <Hero />
    </>
  )
}
