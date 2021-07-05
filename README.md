# OnRadar

## How to use

Clone this repository:

    git clone https://github.com/tomsoderlund/nextjs-pwa-firebase-boilerplate.git [MY_APP]
    cd [MY_APP]

Remove the `.git` folder since you want to create a new repository

    rm -rf .git

Install dependencies:

    yarn  # or npm install

Set up the database (if you don’t need a database, see “How to remove/replace Firebase as database” below):

1. Go to https://console.firebase.google.com/ and create a new project, a new web app, and a new Cloud Firestore database.
2. Copy the `firebaseConfig` (from when setting up the Firebase web app) to `lib/data/firebase.js`
3. Edit the `.env.local` file, setting the `NEXT_PUBLIC_FIREBASE_API_KEY` value.

Start it by doing the following:

    yarn dev

In production:

    yarn build
    yarn start

If you navigate to `http://localhost:3004/` you will see a web page with a list of articles (or an empty list if you haven’t added one).

## Modifying the app to your needs

### Change app name and description

Do search/replace for the `name` “nextjs-pwa-firebase-boilerplate” and `description` “Next.js serverless PWA with Firebase and React Hooks” to something else.

Change the `name` and `short_name` in `public/manifest.json`.

Change the `version` in `package.json` to `0.1.0` or similar.

### Renaming “Article” to something else

The main database item is called `Article`, but you probably want something else in your app.

Rename the files:

    mv hooks/articles.js hooks/{newName}s.js

    mkdir -p components/{newName}s
    mv components/articles/AddArticleForm.js components/{newName}s/Add{NewName}Form.js
    mv components/articles/ArticleDetails.js components/{newName}s/{NewName}Details.js
    mv components/articles/ArticleList.js components/{newName}s/{NewName}List.js
    mv components/articles/ArticleListItem.js components/{newName}s/{NewName}ListItem.js
    rm -r components/articles

    mkdir pages/{newName}s
    mv "pages/articles/[slug].js" "pages/{newName}s/[slug].js"
    rm -r pages/articles

Then, do search/replace inside the files for different casing: `article`, `Article`, `ARTICLE`.

### Change port number

Do search/replace for `3004` to something else.

### How to remove/replace Firebase as database

Delete `lib/data/firebase.js` and modify `hooks/articles.js`.

### Change visual theme (CSS)

1. Change included CSS files in `pages/_app.js`
2. Change CSS in `public/app.css`
3. Change font(s) in `PageHead.js`
4. Change colors in `public/manifest.json`

### Login/Signup with Firebase Authentication

You need to enable Email/Password authentication in https://console.firebase.google.com/project/YOURAPP/authentication/providers

## Deploying on Vercel

> Note: If you set up your project using the Deploy button, you need to clone your own repo instead of this repository.

Setup and deploy your own project using this template with [Vercel](https://vercel.com). All you’ll need is your Firebase Public API Key.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fbutterops%2Fonradar&env=NEXT_PUBLIC_FIREBASE_API_KEY&envDescription=Enter%20your%20public%20Firebase%20API%20Key&envLink=https://github.com/tomsoderlund/nextjs-pwa-firebase-boilerplate#deploying-with-vercel)
