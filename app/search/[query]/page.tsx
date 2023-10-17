"use client";

import CourseCard from "@/components/course-card";
import Heading from "@/components/heading";
import { IFetchedCourse } from "@/components/home-page/courses";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import LoadingSpinner from "@/components/loading-spinner";
import NoContentYet from "@/components/no-content-yet";
import { getCoursesByQuery } from "@/lib/fetch-data";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props {
  params: { query: string };
}

const SearchResultPage: NextPage<Props> = ({ params }) => {
  const { query } = params;
  const [courses, setCourses] = useState<IFetchedCourse[]>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourses = async () => {
    setIsLoading(true);
    const fetchedCourses: IFetchedCourse[] = await getCoursesByQuery(query);
    setCourses(fetchedCourses);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Heading
        title={`Resutls for ${query} | E-Learning`}
        description="E-Learning is a software application for the administration, documentation, tracking, reporting, automation, and delivery of educational."
      />
      <div className="min-h-screen">
        <Header />
        <div className="container mt-28 mb-14">
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
              {courses?.length ? courses.length : 0} Courses
            </span>{" "}
            available for you
          </p>

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {courses?.length ? (
                <div className="grid grid-cols-3 gap-6 mt-10">
                  {courses.map((course) => (
                    <CourseCard key={course._id.toString()} course={course} />
                  ))}
                </div>
              ) : (
                <NoContentYet description="" isSearch />
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchResultPage;
