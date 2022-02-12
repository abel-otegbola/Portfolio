import Head from 'next/head'
import Header from '../components/Home_components/Header'
import Whatido from '../components/Home_components/Whatido'


export default function Home() {
  return (
    <>
    <Head>
      <title>ABEL | Home</title>
    </Head>
    <div className='component'>
        <Header />
        <Whatido />
    </div>
    </>
  )
}
