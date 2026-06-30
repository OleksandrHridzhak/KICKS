import styles from './Banner.module.css'
import bgPhoto from '@/assets/discout-banner-photo.jpg'
import Wrapper from '@/shared/Wrapper/Wrapper'


function Banner(){
    return (
        <Wrapper>
            <div className={styles.bannerBlock}>
                <img src={bgPhoto} alt="" className={styles.bannerImg} />

                <div className={styles.content}>
                    <span className={styles.eyebrowTitle}>
                        Limited time only
                    </span>
                    <h2 className={styles.title}>
                        Get 30% off
                    </h2>
                    <p className={styles.description}>
                        Sneakers made with your comfort in mind so you can put all of your focus into your next session.
                    </p>

                </div>
            </div>
        </Wrapper>
    )
}


export default Banner