# NetNinjaNextIntro

Net Ninja Next JS Intro

## What is Next.js?

- Framework for creating pre-rendered React-based websites
- Offers both Server Side Rendering (SSR) and Static Site Generation (SSG)

## SSR

- React components are rendered into HTML on the server AS REQUESTED by the client

## SSG

- Complete HTML pages are generated AT BUILD TIME

## Benefits

- React is a Client Side Rendered (CSR) technology - SSR and SSG can often be quicker as there is less processing on the browser side. There are also SEO benefits (web crawlers get full HTML back rather than an emtpy React hook).

# Environment + Setup

To start a Next project, run `npx create-next-app foldername/projectname` - this will boilerplate a new Next application. Note the `npx` command lalows us to run commands directly from the internet (rather than `npm`).

## Boilerplate Walk Through

1. The _pages_ folder holds the views.The entry point to the app is `_app.js`. Each page in a Next app has its own page component (Home, Contact, About etc)
2. The _public_ folder holds public assets (images etc)
3. The _styles_ holds our page styles

Inside the package.json we have access to three scripts:

1. `npm run dev` - start the local dev server on port 3000
2. `npm run build` - runs the build process
3. `npm run start` -

# Next Notes

## Routing

Any new file in the pages folder will automatically have a route created. For example, if you create a new `about.js` file, the browser will automaticzlly be redirected there as `localhost:3000/about`.

Note the only exception is `index.js`, which will always be on the `localhost:3000/` route.

The pages folder can have subfolders too, which will automatically have routes generated: `localhost:3000/subfolder/page` will display the `page` component stored in the `subfolder` directory.

Note that if there is an `index.js` file in a subfolder, the subfolder route will automatically display it (i.e. `localhost:3000/subfolder` would automtically show the `index.js` file inside `subfolder`, if present).

## Components

As well as the page components, we can also 'drop in' smaller custom components as required (navbars, cards etc). These can then be reused inside multiple pages.

We would normally use a dedicated folder inside the project root (note - not inside the `pages` directory).

We can then import these components into our pages (or nested into other components) in the normal React/JS way.

## Linking

In Next, we use the special Next `Link` component to link between views - this means views are rerendered in the browser using JS rather than requests to the server, meaning faster UX.

## Codesplitting

By default, Next automatically _codesplits_ our app - only the JS that is needed for the current view is delivered from the server. When we route to a new view, any extra files are requested from the server. This can be seen in the network tab in Chrome. Note that it doesn't 'redeliver' when we return to a previously viewed page.

When we use `Link` components in our page, next will 'prefetch' the related JS so that should the link be clicked, the code is already available to maintain speed.

## Layout Components

We can use _layout components_ to wrap our app with common components (such as a Navbar) - we create a `Layout` component and wrap our App inside it within the main `_app_.js`component. Note we have to pass `children` props into the `Layout` from `_app.js`.

## Styles

You can add styles in various ways (global styles, `styles.jsx`, CSS modules etc).

A common setup is to have a global style sheet for App wide styles, and then use CSS modules to scope other styles to individual components.

The `globals.css` file that is included in the boilerpate works app wide, as it is imported in the `_app.js` file.

When we import individual CSS files into components, Next automatically pads the CSS values to scope it to _that particular component(s)._ Note CSS modules must follow the `component.modules.css` nameing convention. We import the styles from the appropriate directory and then apply the styles as `className={style.selector}`.

Note that when using CSS modules, **you cannot use element selectors!** You have to use class selectors.

## 404 Page

Next does have a default 404 page, but we can also create a custom one. If we have a dedicated `404.js` file in our `pages` directory, Next will automatically use it for any unfound routes. Note this doesn't actually create a 404 route but acts as a catch all for all unsuccessful route requests.

## Redirects

We can use the native Next `useRouter` hook to redirect after, for example, a form submission.

## Images and Metadata

All static assets in a Next application are placed inside the `public` directory, which will then make them available throughout the application.

One way of accessing them is then simply via an `<img>` tag, as `<img src="/image.jpg>` - note that the src will start to look from the `public` folder, hence the single `/`.

Next 10 introduced the concept of an _image component._ This has a couple of advantages:

1. You have to specify `width` and `height` properties, and the image is made responsive
2. It takes advantage of _lazy loading_ - it will only load when an image is 'scrolled' into view, makimng the page even faster.

'Metadata' sits in the `head' of a normal HTML document, allowing us to set the page title and add other metadata for SEO. We can import the native Next head component and add it to our pages. Note that we have to render the entire component return inside a single element, as in React - we can use _React fragments_ to do this if we are including headers.
