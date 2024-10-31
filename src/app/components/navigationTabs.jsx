import Link from "next/link";

export default function NavigationTabs(){
    return(
        <ul className="navigation-tabs">
            <li>
                <Link href="">HOME</Link>
            </li>
            <li>
                <Link href="">HEADPHONES</Link>
            </li>
            <li>
                <Link href="">SPEAKERS</Link>
            </li>
            <li>
                <Link href="">EARPHONES</Link>
            </li>
        </ul>
    )
}