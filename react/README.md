# React vs. Vue

## Goal
The goal of this independent study is to build a simple React application and draw comparisons to Vue to better understand Single Page Applications from a broader perspective.

## Approach
The approach I've decided to take is to follow this [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html), which involves building a Tic-Tac-Toe game in React.  Through building this application, I anticipate I will encounter similar terminology and concepts to the ones we've learned in the e28 course.  I will make note of notable similarities and differences and write down my conclusions.  I will also supplement my learning by reading online blogs and discussions that compare the two frameworks.

![Tic Tac Toe App Finished](https://github.com/lmfilman/e28/raw/master/react/wiki/tic_tac_toe_finished.png "Tic Tac Toe App Finished")

## Building Tic-Tac-Toe
### Step 1: Setup local development environment

1. In order to run the tutorial in a local development environment, we are first instructed to install a recent version of Node (>=8.10) and npm (>=5.6).  We have already done this in our e28 course.

2. Use the [Create React App](https://github.com/facebook/create-react-app) tool which bootstraps a new React app with the following command:
```
npx create-react-app my-app
```

3. Start the generic template application:
```
cd my-app
npm start
```
We can now visit http://localhost:3000/ and see the following in our browser:

![Create React App Template](https://github.com/lmfilman/e28/raw/master/react/wiki/create_react_app_template.png "Create React App Template")

4. Insert Tic Tac Toe template code

Remove generic template code:
```
cd my-app
cd src
rm -f *
cd ..
```

And add the template Tic Tac Toe code:
* [src/index.css](https://github.com/lmfilman/e28/commit/3c1ee987a6a58e5b45bc5fb7c783e466c3b9365d#diff-6559d78cd553e3c5e67ff94bfe5937cd)
* [src/index.js](https://github.com/lmfilman/e28/commit/3c1ee987a6a58e5b45bc5fb7c783e466c3b9365d#diff-2d21295050da745874acf075fdd6490f)

5. Start the Tic Tac Toe application:
```
npm start
```

We can now visit http://localhost:3000/ and see the following in our browser:

![Tic Tac Toe App Template](https://github.com/lmfilman/e28/raw/master/react/wiki/tic_tac_toe_template.png "Tic Tac Toe App Template")

## Conclusions
[TODO]

## Sources
* [Reactjs.org - Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
* [Github - Create React App](https://github.com/facebook/create-react-app)