import Link from "next/Link";
import Image from "next/image";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Image src="/images/profile.jpg" width={400} height={400}></Image>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
