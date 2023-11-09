
import { useThemeStore } from "@/store/themeStore";
import Link from "next-intl/link";
import Theme from "./Theme";

export default function Header() { 


  return <div className="h-20 gap-7">
    <span>Header</span>
    <Link href='/' className="ml-7" locale='en'>English</Link>
    <Link href='/' className="ml-7" locale='zh'>Chinese</Link>
    <Theme />
  </div>
}
