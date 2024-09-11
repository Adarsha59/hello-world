import Link from "next/link";

const LinktoHere = () => {
  return (
    <>
      <Link href="/admin/dashboard">Click here for admin dashboard </Link>
      <br />
      <Link href="/admin/profile">Click here for admin profiles </Link>
      <br />
      <Link href="/blog/blogpost/1">Click here for blog </Link>
    </>
  );
};

export default LinktoHere;
