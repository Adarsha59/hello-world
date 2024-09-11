"use client";
import { useRouter } from "next/navigation";

const LearnuseRouter = () => {
  const router = useRouter();
  console.log("the router is ", router);
  return (
    <>
      <h1>this is yoho</h1>
      <br />
      <button onClick={() => router.push("/admin/dashboard")}>
        Go to admin dashboard
      </button>
      <br />
    </>
  );
};

export default LearnuseRouter;
