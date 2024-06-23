import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  const t = useTranslations('Navbar');
  const linkStyle = "font-medium hover:text-my-blue duration-300 transition-all hover:bg-slate-50 h-fit py-2 px-4"

  return (
   <>
    <div className="py-10 flex justify-between">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
        <div className="flex text-sm md:text-base">
            <Link className={linkStyle} href="/">{t("home")}</Link>
            <Link className={linkStyle} href="/">{t("about")}</Link>
            <Link className={linkStyle} href="/">{t("contact")}</Link>
        </div>
    </div>
   </>
  )
}

export default Navbar