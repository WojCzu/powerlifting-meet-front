import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const SingleMeetPage = () => {
  const router = useRouter();
  return (
    <Layout title={`Zawody ${router.query.slug}`}>
      {/* TODO: change title to meet title */}
      <h1>Single Meet Page</h1>
    </Layout>
  );
};

export default SingleMeetPage;
