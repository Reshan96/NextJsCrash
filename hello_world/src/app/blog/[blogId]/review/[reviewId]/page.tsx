import {notFound} from "next/navigation";

export default async function Reviews(
     {params}: Readonly<{params: Promise<{ blogId:string, reviewId:string }>;}>
){

    const { blogId, reviewId } = await params;
    if(parseInt(reviewId) < 0){
        notFound();
    }
    return <h1>Review {reviewId} for blog {blogId}</h1> 

}