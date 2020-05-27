# Introduction
This folder contains my implementation of the Would You Rather app. This is an assessment project for the Udacity's React-redux course, part of the React Nanodegree Program.

## Requirements
- [Node.js](https://nodejs.org)

## Installation
Here is how you can load the application onto your local machine:

1. Install node.js if you do not have it yet. It comes with npm(node package manager). Make sure that you install node with the PATH variable so you can run node anywhere in your command prompt/terminal.
2. Extract all the files and folders from the zip, add the whole extracted file to a workspace(like visual studio code).
3. In your command prompt/terminal, change directory to the project root.
4. In order to install, run: `npm install`
5. to start the react app, run: `npm start`

Application will start in your default browser at: `localhost:3000`

## Folder structure
|── node_modules            # All project dependencies modules are installed here
├── public                  # built app files to be hosted (index.html etc)
├── package.json            # all project dependencies, scripts to build/run the app
├── src                     # Folder to store all source files 
│   ├── actions             # Redux actions of the app
│   ├── assets              # to store icons, images etc used in app
|   |── components          # React UI components of the app
|   |── middleware          # handles asynchronous actions of the app
│   ├── reducers            # Reducer and store of the app
│   ├── utils               # Dataserver file (for now just data json with dummy APIs)
│   └── index.js            # When the application starts this is the first page that is loaded         
└── README.md               # this file, instructions for building/using the app

## Credits
First, let us take this opportunity to thank all the creative minds for their great products and hard work.

Name | License
------------ | -------------
[React JS](https://github.com/facebook/react) | [LICENSE](https://github.com/facebook/react/blob/master/LICENSE)
[React Redux](https://github.com/reduxjs/react-redux) | [LICENSE](https://github.com/reduxjs/react-redux/blob/master/LICENSE.md)
[React Thunk](https://github.com/reduxjs/redux-thunk) | [LICENSE](https://github.com/reduxjs/redux-thunk/blob/master/LICENSE.md)


## Fonts & Images
- Google Fonts: http://www.google.com/fonts
- Avatar Set: from [www.flaticon.com](http://www.flaticon.com/)
