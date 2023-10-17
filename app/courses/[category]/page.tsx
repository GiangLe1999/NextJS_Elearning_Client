import CategoryTag from "@/components/all-courses-page/category-tag";
import CourseCard from "@/components/course-card";
import Heading from "@/components/heading";
import { ICategory } from "@/components/home-page/categories";
import { IFetchedCourse } from "@/components/home-page/courses";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { getAllCategories, getCourseByCategory } from "@/lib/fetch-data";
import { NextPage } from "next";

interface Props {
  params: { category: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const data = await getCourseByCategory(params.category);
  const courses: IFetchedCourse[] = data.courses;
  const categories: ICategory[] = await getAllCategories();

  return (
    <>
      <Heading
        title={`${data.category} Courses | E-Learning`}
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
                {courses.length} {data.category} Courses
              </span>{" "}
              available for you
            </p>

            <CategoryTag categories={categories} exclude={data.category} />

            <div className="grid grid-cols-3 gap-6 mt-10">
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
