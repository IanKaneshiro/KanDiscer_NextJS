import Link from "next/link";
import style from "./courses.module.css";

const CoursesLandingPage = () => {
  return (
    <div className="course-landing__container">
      <div className={style.startRound}>
        <button>Add Course</button>
      </div>
      <div className={style.main}>
        <Link href="courses/courseId">Stewart Pond</Link>
      </div>
    </div>
  );
};

export default CoursesLandingPage;
