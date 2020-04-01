# React vs. Vue

## Goal
The goal of this independent study is to build a simple React application and draw comparisons to Vue to better understand Single Page Applications from a broader perspective.

## Approach
The approach I've decided to take is to follow this [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html), which involves building a Tic-Tac-Toe game in React.  Through building this application, I anticipate I will encounter similar terminology and concepts to the ones we've learned in the e28 course.  I will make note of notable similarities and differences and write down my conclusions.  I will also supplement my learning by reading online blogs and discussions that compare the two frameworks.

<img src="https://github.com/lmfilman/e28/raw/master/react/wiki/tic_tac_toe_finished.png" width="500">

## Building Tic-Tac-Toe
### Step 1: Setup local development environment
[Link to Tutorial](https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial)

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

<img src="https://github.com/lmfilman/e28/raw/master/react/wiki/create_react_app_template.png" width="500">

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

<img src="https://github.com/lmfilman/e28/raw/master/react/wiki/tic_tac_toe_template.png" width="250">

### Step 2: Read Overview

[Link to Tutorial](https://reactjs.org/tutorial/tutorial.html#overview)

#### What is React?

> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

1. In React you can define components, which inherit from `React.Component`
2. Components have properties, `props`
3. Components can define a `render` method which define the view, and return a "React element"
4. React developers use "JSX" files which allow for the mixing of HTML & Javascript expressions

```jsx
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

#### Reviewing the Starter Code



## Conclusions
[TODO]

## Sources
* [Reactjs.org - Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
* [Github - Create React App](https://github.com/facebook/create-react-app)
