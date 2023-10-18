import CategoryTag from "@/components/all-courses-page/category-tag";
import CourseCard from "@/components/course-card";
import Heading from "@/components/heading";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { getAllCategories, getAllCoursesData } from "@/lib/fetch-data";
import { FC } from "react";
import { ICategory } from "@/components/home-page/categories";
import { IFetchedCourse } from "@/components/home-page/courses";

interface Props {}

const page: FC<Props> = async (props): Promise<JSX.Element> => {
  const courses = (await getAllCoursesData()) as IFetchedCourse[];
  const categories = (await getAllCategories()) as ICategory[];

  return (
    <>
      <Heading
        title="All Courses | E-Learning"
        description="E-Learning is a software application for the administration, documentation, tracking, reporting, automation, and delivery of educational."
      />
      <div className="min-h-screen">
        <Header />
        <div className="container mt-28 mb-14">
          <div>
            <h2 className="section-title">
              <p>
                Expand Your Career{" "}
                <span className="text-gradient font-bold">Opportunity</span>
              </p>
              <p>With Our Courses</p>
            </h2>

            <p className="font-semibold text-tertiary dark:text-dark_text text-center mb-6 text-lg">
              We found{" "}
              <span className="text-gradient font-bold">
                {courses.length} Courses
              </span>{" "}
              available for you
            </p>

            <CategoryTag categories={categories} allCourses />

            <div className="mt-10 main-grid">
              {courses.map((course) => (
                <CourseCard key={course._id.toString()} course={course} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default page;
