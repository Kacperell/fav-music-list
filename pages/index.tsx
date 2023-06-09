import FavMusisc from "@/components/FavMusic";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { GetServerSidePropsContext } from "next";

export default function Home() {
  return (
    <>
      <LanguageSwitcher />
      <main>
        <FavMusisc />
      </main>
    </>
  );
}
export async function getStaticProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
