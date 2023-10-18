import Categories from "@/components/home-page/categories";
import Courses from "@/components/home-page/courses";
import FAQ from "@/components/home-page/faq";
import Features from "@/components/home-page/features";
import Hero from "@/components/home-page/hero";
import Reviews from "@/components/home-page/reviews";
import Testimonials from "@/components/home-page/testimonials";
import { getAllFAQs } from "@/lib/fetch-data";
import { NextPage } from "next";
import { IFaq } from "./admin/faq/page";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Heading from "@/components/heading";
import { pageConstants } from "@/constants";

interface Props {}

export const generateMetadata = () => {
  return {
    title: "E-Learning | Learn From On-Demand Courses",
    description: pageConstants.siteDescription,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
};

const page: NextPage<Props> = async () => {
  const faqs = (await getAllFAQs()) as IFaq[];

  return (
    <>
      <Heading
        title="E-Learning"
        description="Find your favorite courses and learn at E-Learning"
      />
      <Header />
      <div className="min-h-screen">
        <Hero />
        <Courses />
        <Categories />
        <Features />
        <Testimonials />
        <Reviews />
        <FAQ faqs={faqs} />
      </div>
      <Footer />
    </>
  );
};

export default page;
