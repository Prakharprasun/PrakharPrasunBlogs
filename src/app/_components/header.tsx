import Link from "next/link";

const Header = () => {
  return (
    <h2 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      <Link href="/" className="hover:underline">
        Prakhar Prasun Blogs
      </Link>
    </h2>
  );
};

export default Header;
