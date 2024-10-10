import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center">
          <h3 className="">
            Made with 🩷 by Prakhar Prasun using Next.js.
          </h3>
          <div className="">
            {/*<a*/}
            {/*  href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"*/}
            {/*  className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"*/}
            {/*>*/}
            {/*  Read Documentation*/}
            {/*</a>*/}
            {/*<a*/}
            {/*  href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}*/}
            {/*  className="mx-3 font-bold hover:underline"*/}
            {/*>*/}
            {/*  View on GitHub*/}
            {/*</a>*/}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
