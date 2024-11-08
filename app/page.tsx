
import Link from "next/link";
import Comp1 from "./component/page";


export default function Home() {
  return (
    <div>

      <h1>
      Sir this is home page
        </h1>
        <br/>

<Comp1/>


<br/>

link for about page<Link href="/about">About...clickme</Link>

<br/>
 link for about All product page <Link href="/products">All Products...clickme</Link>
 <br/> 
    </div>
  );
}
