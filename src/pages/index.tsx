import * as React from "react"

import type { HeadFC, PageProps } from "gatsby";

import HomeLayout from "@/layouts/HomeLayout";

const IndexPage: React.FC<PageProps> = () => {
  return <HomeLayout>ok cool 1</HomeLayout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
