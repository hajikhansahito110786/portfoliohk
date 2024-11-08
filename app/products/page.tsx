import Link from "next/link";

//const async Products=()=>{
export default async function Products(){
const fetchdata=await fetch("https://jsonplaceholder.typicode.com/posts");

const res = await fetchdata.json();


return(
  <div> 
 

<h3>product list </h3>
  <ol>  


{
res.map((item:{userid:number,id:number,title:string,body:string},i:number)=>{
 // console.log(item);

  
//<h3>************ </h3>
return(

<li key={item.id}><Link href={`/products/${item.id}`}> {item.title}{item.id} {i}  </Link></li>

)



})
}
</ol>    
</div>


);

}
