import React from 'react'

 export default async function Product({params}:{params:{product:string}})  {
 //export default async function Product(props:any)  {
//
const fetchdata=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`);
//const fetchdata=await fetch(`https://jsonplaceholder.typicode.com/posts/`);

const res = await fetchdata.json();
//console.log(res);


//

//const fetchdata1=await fetch(`https://jsonplaceholder.typicode.com/posts/${res.id}`);



//

console.log('{ params: {}, searchParams: {} }');

//
//console.log(props);
  console.log(params.product);
  return (

    <div>Product detail invidual
      <p>

developed by haji khan 323607

      </p>
     <p> {params.product} </p>
      <p>title </p>
      <p>{res.title} </p>
      <p>id </p>
      <p>{res.id} </p>
      <p>body </p>
      <p>{res.body} </p>
    </div>
  )
}
