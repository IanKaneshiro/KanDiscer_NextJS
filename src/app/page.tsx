import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1>Welcome to KanDiscer</h1>
            <p>
              Your one-stop shop for disc golf. Discover new discs, check their
              flight paths, and organize them into your bags. Explore and
              navigate new courses, or keep scores at ones you already know.
              KanDiscer has everything you need to improve your game and have
              more fun on the course.
            </p>
            <div className={styles.infoButtons}>
              <button className={styles.btns}>Browse Discs</button>
              <button className={styles.btns}>Get Started</button>
            </div>
          </div>
        </div>
        <div>
          <img
            className={styles.img}
            src="https://res.cloudinary.com/dmkyocbqi/image/upload/v1695679466/diavolo-disc-golf-cary-nc-4_r4otk7.jpg"
            alt="Disc golf basket with forest backdrop"
          />
        </div>
      </div>
      <div className="home__info_container">
        <div>
          <img
            className={styles.img}
            src="https://res.cloudinary.com/dmkyocbqi/image/upload/v1698600968/Screenshot_2023-10-29_103542_g1mtvx.png"
            alt="Course map"
          />
        </div>
        <div className={styles.info}>
          <h1>Courses</h1>
          <p>
            Check out brand-new score-keeping feature, allowing you to
            meticulously track your rounds and improve your game. It's the
            ultimate companion for disc golf enthusiasts, offering an immersive
            and interactive way to play
          </p>
          <div className={styles.infoButtons}>
            <button className={styles.btns}>Browse Courses</button>
          </div>
        </div>
      </div>
    </main>
  );
}
