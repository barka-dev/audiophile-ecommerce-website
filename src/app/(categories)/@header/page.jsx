'use client'
import { usePathname } from "next/navigation"

export default function Header(){
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];
    return(
        <header>
            <h2 className="cat-header-title">{lastSegment}</h2>
        </header>
    )
}