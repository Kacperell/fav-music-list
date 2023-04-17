import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";

const LanguageSwitcher = () => {
  const { locale, locales, push } = useRouter();

  const handleLanguageSwitch = (newLocale: string) => {
    push("/", "/", { locale: newLocale });
  };

  return (
    <>
      {locales?.map((newLocale) => (
        <Link key={newLocale} href="/" locale={newLocale} passHref>
          <Button
            disabled={newLocale === locale}
            color="secondary"
            variant={"outlined"}
            onClick={() => handleLanguageSwitch(newLocale)}
          >
            {newLocale}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default LanguageSwitcher;
