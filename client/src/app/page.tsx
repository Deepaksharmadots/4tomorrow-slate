import Image from "next/image";

const links = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs",
    text: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Learn",
    text: "Learn about Next.js in an interactive course with quizzes.",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Templates",
    text: "Explore starter templates for Next.js.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Deploy",
    text: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export default function Home() {
  return (
    <main className="container py-5">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-5">
        <p className="mb-0">
          Get started by editing <code>src/app/page.tsx</code>
        </p>
        <a
          className="d-inline-flex align-items-center gap-2 text-decoration-none text-body"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>

      <div className="text-center my-5">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="row row-cols-1 row-cols-lg-4 g-4">
        {links.map((link) => (
          <div className="col" key={link.title}>
            <a
              className="card h-100 text-decoration-none"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body">
                <h2 className="h5 card-title">{link.title}</h2>
                <p className="card-text text-body-secondary mb-0">{link.text}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
