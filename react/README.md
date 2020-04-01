# React vs. Vue

## Goal
The goal of this independent study is to build a simple React application and draw comparisons to Vue to better understand Single Page Applications from a broader perspective.

## Approach
The approach I've decided to take is to follow this [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html), which involves building a Tic-Tac-Toe game in React.  Through building this application, I anticipate I will encounter similar terminology and concepts to the ones we've learned in the e28 course.  I will make note of notable similarities and differences and write down my conclusions.  I will also supplement my learning by reading online blogs and discussions that compare the two frameworks.

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

4. Remove generic template code:
```
cd my-app
cd src
rm -f *
cd ..
```
5. Insert Tic Tac Toe template code:

Add `src/index.css`:
```css
body {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
}

ol, ul {
  padding-left: 30px;
}

.board-row:after {
  clear: both;
  content: "";
  display: table;
}

.status {
  margin-bottom: 10px;
}

.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}

.square:focus {
  outline: none;
}

.kbd-navigation .square:focus {
  background: #ddd;
}

.game {
  display: flex;
  flex-direction: row;
}

.game-info {
  margin-left: 20px;
}
```

Add `src/index.js`:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

```
6. Start the Tic Tac Toe application:
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