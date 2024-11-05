import Link from "next/link";

export default function NavigationTabs(){
    return(
        <ul className="navigation-tabs">
            <li>
                <Link href="/">HOME</Link>
            </li>
            <li>
                <Link href="/headphones">HEADPHONES</Link>
            </li>
            <li>
                <Link href="/speakers">SPEAKERS</Link>
            </li>
            <li>
                <Link href="/earphones">EARPHONES</Link>
            </li>
        </ul>
    )
}