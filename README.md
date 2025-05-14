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





