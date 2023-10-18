import { IFetchedCourse } from "@/components/home-page/courses";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CourseDetail from "@/components/single-course-page/course-detail";
import { getCoursePublicDetails } from "@/lib/fetch-data";
import { NextPage } from "next";

interface Props {
  params: { id: string };
}

export const generateMetadata = async ({ params }: Props) => {
  const courseDetail = (await getCoursePublicDetails(
    params.id
  )) as IFetchedCourse;

  return {
    title: `${courseDetail.name} | E-Learning`,
    description: courseDetail.description,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
};

const page: NextPage<Props> = async ({ params }) => {
  const courseDetail = (await getCoursePublicDetails(
    params.id
  )) as IFetchedCourse;

  return (
    <>
      <Header />
      <CourseDetail courseDetail={courseDetail} courseId={params.id} />
      <Footer />
    </>
  );
};

export default page;
