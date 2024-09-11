import GataDataFetch from "@/components/GataDataFetch";
import LearnuseRouter from "@/components/LearnuseRouter";
import LinktoHere from "@/components/LinktoHere";
import UseImage from "@/components/UseImage";

export default function Home() {
  return (
    <>
      <LearnuseRouter />
      <LinktoHere />
      <UseImage />
      <br />
      <hr />
      <h1>Welcome to Next.js!</h1>
      <GataDataFetch />
    </>
  );
}
