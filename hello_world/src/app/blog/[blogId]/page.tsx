export default async function Blog(
    { params,}: Readonly<{ params: Promise<{ blogId: string } > ;}> 
) {

 const blog_Id = (await params).blogId;   
 return <h1>My blog {blog_Id}</h1>
}