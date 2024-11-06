export default async function Header({params}){
    const {category} = await params;
    return(
        <header>
            <h2 className="cat-header-title">{category}</h2>
        </header>
    )
}