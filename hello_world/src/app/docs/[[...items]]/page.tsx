export default async  function Docs(
    {params}: Readonly<{params: Promise<{ items: string[] }>}>,
) {
const { items } = await params;
if (items?.length == 1) {
   return <h1>Docs for {items[0]}</h1>;
}  
if (items?.length == 2) {
   return <h1>Docs for {items[0]} and {items[1]}</h1>;
}

return <h1>Docs for {items?.join(', ')}</h1>;
}