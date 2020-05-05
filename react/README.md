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

### Step 2: Overview

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
1. The starter code provides us with 3 components `Square`, `Board`, and `Game`
2. `Square#render` returns a `<button>`
3. `Board#render` returns a 3x3 of `<Square />` components
4. `Game#render` returns a `<Board />` component and space for game metadata

#### Passing Data through Props

Through the tutorial, we learn to pass props from a parent component to a child component by passing value (1-9) from `Board` to `Square`:

[See changes to index.jsx](https://github.com/lmfilman/e28/commit/f3376e3b8367d8c7215ce0df3e10c2a45302ab61)

<img src="https://github.com/lmfilman/e28/raw/master/react/wiki/passing_props.png" width="200">

#### Making an Interactive Component

Next, we learn how to handle a click event and store state on a component.  If the `Square` has been clicked, we store the value "X" on the component.

[See changes to index.jsx](https://github.com/lmfilman/e28/commit/cbcec857822962c3cc66839ce74d17c0689400e7)

<img src="https://github.com/lmfilman/e28/raw/master/react/wiki/setting_state_and_event_handling.png" width="200">

#### Developer Tools

Similar to the Vue Devtools extension we downloaded to our browsers earlier in the semester, there exist React Devtools, which let us inspect our tree of Components and their state:

<img src="https://github.com/lmfilman/e28/raw/master/react/wiki/react_dev_tools.png" width="600">

### Step 3: Completing the Game

[Link to Tutorial](https://reactjs.org/tutorial/tutorial.html#completing-the-game)

#### Lifting State Up

We currently have the `Square` component managing state (value: [X, O, null]).  We want to lift the state up from the Child `Square` component to the Parent `Board` component so it's easier to manage overall game state and determine whether someone has won.

In the next set of changes, we construct the state in the `Board` constructor in an Array and pass the values down to the Child `Square`s.  Additionally, we pass a method `onClick` from the `Board` to the `Square` components that the `Square` component can call to notify the Board when a click event has occurred.  This is similar to how we emit events in Vue.

[See changes to index.jsx](https://github.com/lmfilman/e28/commit/1cdc555c8fc54e5eeec301cf47dc18e04c00b310)

#### Taking Turns

In the next set of changes, we alternate whose turn it is (X or O) by storing `xIsNext` state on the `Board`.  When we `handleClick`, we use `xIsNext` to determine the value of the square clicked, and then we toggle the value.

[See changes to index.jsx](https://github.com/lmfilman/e28/commit/dcf38edb4fe1727859e6cadcbdf9a7e7cf2be9f3)

#### Declaring a Winner

We now want to add the ability to determine whether a player has won.  We use a helper function `calculateWinner` that iterates through each of the rows, columns, & diagonals, and checks against the board to see if any of these lines have all Xs or all Os, and returns the winner.  We use this function in `Board#render` to calculate the winner if there is one, and set the game status.  We also use this function in `Board#handleClick` to determine whether we should continue to handle clicks or freeze the board.

[See changes to index.jsx](https://github.com/lmfilman/e28/commit/caba87e044d465e381ee091b3dc822af0a3aea95)

### Step 4: Adding Time Travel

[Link to Tutorial](https://reactjs.org/tutorial/tutorial.html#adding-time-travel)

#### Storing a History of Moves

We want to be able to store a history of the board and allow the player to jump to past points in time.  We achieve this by keeping an array of `history`, and adding a representation of the board (`squares`) to `history` each time the board changes.

Since the `Game` component will require access to `history` to allow for jumping back in time, it makes sense to "Lift state up" again.  In the next set of changes we lift state from `Board` to `Game`, and move click handling and winner calculation to `Game`.  `Board` is now just responsible for rendering 9 `Square`s & propagating click events up to `Game`.

<img src="https://github.com/lmfilman/e28/raw/master/react/wiki/storing_history_of_moves.png" width="600">

[See changes to index.jsx](https://github.com/lmfilman/e28/commit/8e46eca26657b7579de8246112b5284dfb78f7f2)

#### Implementing Time Travel

In the final portion of the tutorial, we want to add a list of buttons enabling the user to jump to a past point in time.  Similar to keys in Vue, we need to pass a unique `key` to each component so React can efficiently manage the list.

When a user clicks one of these buttons (ex. "Go to move #1"), we set the `stepNumber` and use this value to determine which `squares` board from `history` to display.

[See changes to index.jsx](https://github.com/lmfilman/e28/commit/3b61a50ee1f7b06939592fa7954cb7c7d01d9f80)

## Additional Readings
* ["I created the exact same app in React and Vue. Here are the differences."](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd) - Blog post on Medium by Sunil Sandhu
* ["Comparison with Other Frameworks"](https://vuejs.org/v2/guide/comparison.html) - Article on VueJS.org

## Conclusions from Tutorial & Readings
* Both Vue & React have command line tools to bootstrap the creation of a new app (create-react-app vs. vue-cli)
* Both Vue & React have browser dev tool plugins
* Vue's `.vue` single file components incorporate HTML, JS, and CSS, whereas React's `.jsx` files only incorporate HTML & JS.
* Vue components store data in `data`, and React components store data in `state`
* In Vue, we can mutate data directly (`this.foo = 'bar'`).  In React, we cannot alter the data directly, and must call `setState`, like `this.setState({ foo: 'bar' })`.  Vue implements state observation, whereas in React we must explicitly tell the system we are changing the state so that it runs the proper lifecycle hooks & re-renders properly.
* Vue and React both allow for passing props from parent to child components.  One thing I preferred in Vue over React is that the child component defines the list of props separate from their usage within the component.
* Vue and React both expect lists of components to use unique keys for efficient list rendering.
* In Vue, child components emit events which parents listen for.  In React, child components have access to parent functions via `this.props`.
* Vue and React both have straightforward syntax for defining event handlers, but Vue allows for modifiers (ex. `v-on:keyup.enter='submitGuess'`) whereas React does not.


## Sources
* [Reactjs.org - "Tutorial: Intro to React"](https://reactjs.org/tutorial/tutorial.html)
* [Github - "Create React App"](https://github.com/facebook/create-react-app)
* [Medium - "I created the exact same app in React and Vue. Here are the differences."](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd)
* [VueJS.org - "Comparison with Other Frameworks"](https://vuejs.org/v2/guide/comparison.html)
