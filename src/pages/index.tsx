import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import HomeLayout from "@/layouts/HomeLayout";

import Hero1 from "@/components/HeroSection/hero-1";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <HomeLayout>
      <Hero1 />
    </HomeLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
