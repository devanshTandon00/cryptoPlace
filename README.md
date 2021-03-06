# Step-by-Step Setup for the Application

1. Clone the application to local
2. `cd frontend` and `npm install`. Then run, `cd backend` and `npm install`.
3. Now, from the `frontend` folder, run `npm run dev` to access `localhost:3000` and `localhost:5050`.
4. Set up config for the MongoDB cluster. To do so, add a config.json file under /src/Config. config.example.json is a template that you can copy. Simply add the url instead of the plethora of X's.
5. Please make sure the `Insert Final Newline` setting is enabled in VS Code. Navigate to File > Preferences > Settings, then search for `Insert Final Newline`.
6. Should be good to go from there. Have fun coding! ^^b

# Commands That Are Good to Know

### `npm install`

Updates your node dependencies to the latest versions.

### `npm run dev`

Run both the frontend and the backend of the application.

### `npm start`

Runs the backend server.

# VSCode Snippets That Are Good to Know

### `file:class`

Shortcut to get boilerplate code for class components

### `file:function`
Shortcut to get boilerplate code for function components

### `file:model`
Shortcut to get boilerplate code for MongoDB Model files

### `file:route`
Shortcut to get boilerplate code for Route files

### `file:apifunction`
Shortcut to get boilerplate code for APIFunction files

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

###

for Devansh

- Routes defined in App.js are just for the frontend
- Routes defined in backend such as /user/users, we call fetch in the frontend on these routes to access the data

To Do:

- Add dynamic navbar showing user name after logging in
