import Product from "../components/product";
import path from "path";
import { promises as fs } from "fs";

export default async function Category({ params }){
    const { category } = await params;
    const jsonDirectory = path.join(process.cwd(), "public/data");
    const fileContents = await fs.readFile(jsonDirectory + "/products.json", "utf8");
    const data = JSON.parse(fileContents);
    const filteredData = category ? data.filter((item) => item.category === category) : data;
    const result = filteredData.sort((a, b)=>{
        if(a.new && !b.new) return -1;
        if(!a.new && b.new) return 1;
        return 0;
    });
    return(
        <section className="headphones-products-section">
            {
                result.map((item, index)=>
                    <Product key={item.id} categoryImage={item.categoryImage} tagNew={item.new} productName={item.name} description={item.description} url={`/${category}/${item.slug}`} direction={(index+1)%2 === 0 && "reverse-direction"}/> 
                )
            }
        </section>
    )
}