# react_boilerplate_techpulse
React Single Page Application for TechPulse UI.

## Steps to run application in localhost ##

1. Clone the repo.
    ```sh
    git clone git@github.azc.ext.hp.com:SWApps/react_boilerplate_techpulse.git
    ```
2. Connect to VPN
3. Run the command -
    ```sh
    npm config set proxy http://web-proxy.in.hpicorp.net:8080
    ```
4. Remove package-lock.json file if present
5. Run the command -
    ```sh
    npm install
    ```
6. Run the command -
    ```sh
    npm start
    ```
7. Open browser of your choice -
	```sh
	http://localhost:3010/
	```

## Resources links and Docs ##
Resources:

Webpack:
https://www.youtube.com/watch?v=WDpxqopXd9U
https://css-tricks.com/introduction-webpack-entry-output-loaders-plugins/
https://medium.com/swlh/how-make-better-optimization-with-webpack-and-splitchunk-in-the-production-96bd273c56ca

Webpack-bundle-analyzer speed optimization:
https://medium.com/@hamidihamza/optimize-react-web-apps-with-webpack-bundle-analyzer-6ecb9f162c76

Steps:

(package.json) npm init -y

react react-dom npm i react react-dom

babel, jsx transpiler, sass, css npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader sass-loader sass webpack webpack-cli webpack-dev-server style-loader

style-loader: allows style tag in html for sass and css webpack: allows us to bundle, server allows you to run code sass: sass allow, and loader allow to convert it to css css: allow css to render file-loader: allows import of html and other files babel: transpiler

Create .babelrc for setting up transpiler env.

Create webpack.config.js which will create bundle and sent to browser it runs in node env not in browser

install mini-css-extract-plugin to extract css file

install webpack-bundle-analyzer analyze which module is taking maxium space

install win-node-env for NODE_ENV

