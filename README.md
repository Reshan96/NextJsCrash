# NextJsCrash
Crash course for NextJs

## SEO

search engines may suffer when searching for client side rendering pages due to:

1. Delayed content rendering - when search engine crawler visits page it sees and empty HTML shell therefore it must execute the JS to view the actual content. Some search engines may not fully render or wait for JS to finish executing. 

2. JS rendering limitations - Crawlers may not fully support on JS rendering at all.

3. Longer crawling and indexing times - JS rendering is resource intensive and slower than HTML parsing. And Search engines may defer or delay indexing JS heavy content due to processing cost.

4. Content Flicker or Late Loading - Some crawlers may capture the page state before it fully loads, leading to incomplete indexing

5. Broken Links and Routing Issues - Single Page Applications (SPAs) using CSR often rely on client-side routing.




## Hot Module Reloading (HMR)
Hot Module Reloading (HMR) is a development feature that allows your application to update modules in the browser without a full reload, preserving the state of your app.

 ### Why Use HMR?
🔥 Faster development: Changes reflect instantly without reloading the whole app.

🧪 Preserve state: If you’re editing a React component, the app doesn’t lose its state (like form data or scroll position).

🛠️ Efficient debugging: Helps you focus on the changed part without resetting everything else.

### 💡 How HMR Works (High-level)

You change a file in your project (e.g., a React component).

The development server (e.g., Webpack, Vite, or Next.js) detects the change.

Only the changed module is recompiled and pushed to the browser via WebSocket.

The browser replaces the old module without doing a full page reload.

## Code splitting 
Code splitting is a technique where your JavaScript code is split into smaller chunks that can be loaded on-demand, reducing initial load time and improving performance — and Next.js handles this automatically for pages and routes.

### Automatic Per-Page Code Splitting
Each page in the /pages directory gets its own JavaScript bundle, meaning only the JS needed for the current route is loaded.

### 📁 Shared Code Splitting (Commons Chunk)
Next.js automatically creates a common bundle for modules used across multiple pages (e.g., react, axios, utils.js). This avoids duplication and speeds up navigation.

Whenever utilizing a client side management feature such as hooks, state management (useState etc.) remember to use the ```'use client';``` directive on top of the code.

## Routing 

- When routing is required use the name of the folder created inside the ```app``` folder as the route. For example if /user is required then create a folder named ```"user"``` inside app folder and create page.js inside that folder. 
- For nested routing you should create folder inside the required nested routing folder. (Eg: /user/admin -> inside the user folder create ```admin``` folder then include a page.js
-for dynamic routing when creating the folder wrap the name with square brackets. For example, /:userId -> then folder name should be [userId].js. This user Id can be accessed via below code snippet.

```
import {useRouter} from 'next/router'

export default function Page(){
    const router = userRouter()
    return <p> UserId: {router.query.userId}</p>
}
```

## Special file names

### error.js

Including this file in your app folder or route folders you can handle error automatically when occurs.
Specify how the error should be handled inside the error.js. <strong> This should be a client side rendering file in order to
catch the errors. 

```
'use client';

import {useEffect} from 'react';

const Error = ({error, reset}) => {
    useEffect (() => {
        console.error(error);
    },[error]);
}
.....
```

### loading.js
This will automatically applied when pages in the relevant folder are loading.

## Data Fetching

### SSR - Server Side Rendering
Each request to the server triggers a new rendering cycle and data fetch ensuring data is always update.
```
async function Page({params}){
    const res = await fetch(
        `https://somethingToBeFetched/${params.id}`,
        {cache:'no store'}
    );

    const data = await res.json()
    .....
}
```
```cache: 'no store'``` ensures this does not store data in cache and re-fetches data every time.

### SSG - Static Site Generation
 Removing cache storing gives ability to store data once fetched. This can be used in incidence where content does not
 change frequently. 

 ### ISR - Incremental Static Generation

```
const res = await fetch(
        `https://somethingToBeFetched/${params.id}`,
        {next:{revalidate:10}}
    );
```
This will statically fetch data in build time but we can specify a revalidation time to check the data again in a given
interval. So it will fetch or refresh content when within a given refresh time.

## api/route defining
There are 2 ways you can handle api routes in nextJs
1. file based route handling - you can create  a `api` folder and include <strong>route.js</strong>
2. Create a route handler within the <strong>app</strong> folder itself. - But when creating a `/` type routes this will
interfere with the existing page routes with the same name. 
For and example, '/users' can be either a page route or an api route which NextJs wont be able to distinguish. 

1st method is preferred. To create an api route, 

`http://localhost:3000/api/users` -> 
create a  <strong> app folder -> create `api` folder -> inside create `users` folder -> create `route.js`</strong>

## SEO
To enhance SEO NextJs provides 2 different options to manage metadata of the website.

1. Static metadata
2. Dynamic metadata

### Static metadata

To add static metadata, on the top of your page.js

```
export const metadata - {
    title:'Anything that suits'
}

and the output looks like below,

<head>
    <title>Anything that suits</title>
</head>
```

### Dynamic metadata
In case you want to specify the metadata based on the dynamic content such as parameters passed to the page,

```
export async function generateMetadata({params,searchParams}){
    const product = await getProduct(params.id);
    return {title: product:title};
}

and the output,

<head>
    <title>{{Product Name}}</title>
</head>
```