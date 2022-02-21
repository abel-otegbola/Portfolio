import Image from 'next/image';
import Styles from '../../styles/Home.module.css'

const Whatido = () => {
    return (
        <>
        <section>
            <div className={Styles.heading}>
                <h1>WHAT I DO</h1>
                <p>My expertise and what I offer</p>
            </div>
            <div className={Styles.content}>
                <div className={Styles.content_box}>
                    <div className={Styles.texts}>
                        <h3>Website designs</h3>
                        <p>With the knowledge of UI/UX design, I create amazing, user driven and satisfactory website designs.</p>
                    </div>
                </div>
                <div className={Styles.content_box}>
                    <div className={Styles.texts}>
                        <h3>Mobile app designs</h3>
                        <p>Using also UI/UX design knowledge, I create unique and excellent mobile app designs.</p>
                    </div>
                </div>
                <div className={Styles.content_box}>
                    <div className={Styles.texts}>
                        <h3>Frontend development</h3>
                        <p>Using of front end development tools such as HTML, CSS, JAVASCRIPT, REACT, I create frontend for websites.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Whatido;