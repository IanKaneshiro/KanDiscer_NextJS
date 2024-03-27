import Link from "next/link";
import style from "./courses.module.css";

const CoursesLandingPage = () => {
  return (
    <div className="course-landing__container">
      <div className="course-landing-start-round">
        <button>Add Course</button>
      </div>
      <div className="course-landing__main">
        <Link href="courses/courseId">Stewart Pond</Link>
      </div>
    </div>
  );
};

export default CoursesLandingPage;
