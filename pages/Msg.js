import Head from 'next/head'
import Styles from '../styles/Msg.module.css'
import { server } from '../components/config/urls';


export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/getMessage`)
    const data = await res.json()
    console.log(data)
    return {
        props: { msgs: data }
    }
}


const Msg = ({ msgs }) => {
    
    return (
        <>
        <Head>
            <title>Abel | messages</title>
        </Head>
        <div className={Styles.msgs}>
            <div className={Styles.heading}>
                <h1>MESSAGES</h1>
                <p>My current messages</p>
            </div>
            <div className={Styles.body}>
                {
                    msgs.map(msg => (
                        <div className={Styles.msg} key={msg.id}>
                            <h2>{msg.name}</h2>
                            <h3>{msg.email}</h3>
                            <p>{msg.message}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Msg;