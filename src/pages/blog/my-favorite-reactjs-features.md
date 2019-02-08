---
title: "My Favorite ReactJS Features"
date: "2019-02-03"
author: "Derek Fletes"
timeToRead: 5
tags: ["reactjs"]
---

Hi! As the title says, I am going to talk about my favorite ReactJS features. Before I get into that, let me talk about how I started using React.

Eight months ago I chose ReactJS as my JavaScript framework of choice. I wanted to build web applications and React seemed like a solid choice given its popularity among developers, large support community, and widespread use on real world software teams.

I've now used React in 4-5 personal projects so I think I am starting to gain a pretty good understanding of its main features. I just recently used React to build my [first big project](http://producer-forum.herokuapp.com/) and I am extremely pleased with the results.

Ok, enough back story. Here are my 5 favorite ReactJS features:

1. Components
2. JSX
3. State & Props
4. Conditional Rendering & Lists
5. Fragments

## Components
I first started to learn code by copying designs of my favorite websites with HTML and CSS. I learned how quickly things can get messy when working with just one HTML and one CSS file. 

Components introduced me to the concept of modular code. Meaning that one single application is created with many independently run parts. This feeds into the two reasons why I really like React components:

1. Consolidation of HTML & JavaScript files 
2. React components + CSS modules = complete component independence 

In React components, JavaScript and HTML live in unity. Combining HTML & JavaScript makes so much sense because they are pretty much exclusive to one another. This combination makes it so easy to control the flow of data into an application. I think this makes for a great developer experience. 

I really did not like the idea of global cascading CSS files. One CSS file could range thousands of lines. While there are ways to manage this, I always felt like there could be a better way. That better way (for me personally) was CSS modules. With CSS modules you can have locally scoped CSS. So each component can have their own independent styles. 

I have really grown to enjoy creating React components with CSS modules because you can create independently managed components out of one ReactJS file:

```javascript
import React, { Component } from 'react';
// CSS file imported here
import { container } from './example.css';

class Example extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: ''
        }
    }
    
    // JavaScript goes here
    
    render() {
        // HTML goes here
        return (
            <div className={container}>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}
```

And one CSS file:

```css
.container {
    /* container styles */
}
```

## JSX
When I first started learning NodeJS I was exposed to templating using libraries like handlebars, ejs, & pug. JSX pretty is similar and there are two reasons why I like using it:

1. Templating (as previously mentioned) & JavaScript computations
2. Consolidation of HTML & JavaScript files

Templating in JSX is really what makes it ideal for building user interfaces. Being able to pull data into an application create template from state and props makes react so satisfying and easy to understand. I have enjoyed using this pattern, even though it felt like it took me a while to adjust.

Apart from templating I really like being able to make computations within JSX. Take the example below:

```js
import React from 'react';
import { distanceInWords } from 'date-fns';

const PostDate ({ date }) => (
    <div>
        <p>Comment posted :
        {`${distanceInWords(new Date(parseInt(date)), new Date)} ago`}
        </p>
    </div>
);
```

There is a pretty cool JavaScript library called date-fns. This allows you to easily compute time intervals with some built-in functions. The function I chose to use in one of my applications will compute how many minutes, hours, or days ago a comment was posted. JSX allows you to take props or state and make computations against that. Definitely one of my most used features to date.

## State & Props
State & Props are some of the biggest reasons people use React. There are two features of state & props that I particularly like:

1. Virtual DOM
2. Data flow

The virtual DOM is talked about a lot as THE premier feature. Basically it watches state updates and only re-renders the pieces of your application that has experienced data changes. This is pretty convenient especially on applications that bring in a lot of data and allow user inputs.

I also love state and props because of the combination of stateful components and stateless components. A popular pattern is to use only a select few number of components to pull in the majority of application data and then pass this data into other components as props. The `Example` component below brings in data from an API and passes it into a child component `TodoList`:

```javascript
import React, { Component } from 'react';
import TodoList from './todolist';

class Example extends Component {
    constructor(props) {
        super (props);
        
        this.state = {
            todos: []
        }
    }
    // fetch data from an api & set to state
    componentDidMount() {
        fetch('api.com/todos')
            .then(response => response.json())
            .then(data => this.setState({ todos: data.todos }));
    }
    
    render() {
        // pass fetch data to TodoList component
        return (
            <div>
               <TodoList todos={this.state.todos} /> 
            </div>
        )
    }
}
```

The TodoList component does then only has to worry about displaying the data passed into it:

```javascript
import React from 'react';

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo => <li>{todo}</li>)}
    </ul>
);
```

## Conditional Rendering & Loops
The above example introduces loops, which is my favorite React features. A large majority of data will be presented in loops. React uses the `.map()` JavaScript function to loop through data and render HTML. Seemingly simple, yet I find this incredibly elegant. This also makes for some easy to understand code. Array passed into function, function renders HTML with this data. 

In addition to loops, React can also conditionally render data. Let's say you have a parent component that passes in a bio to the `User` component. You can only choose to render the component if a user has actually created a bio with the && operator:

```javascript
import React from 'react';

const User = ({ bio }) => (
    <div>
        {bio && <p>{bio}</p>}
    </div>
);
```

I find myself using this a lot. It prevents a lot of unnecessary re-renders. Another form of conditional rendering is the ternary operator. It is basically a condensed if statement. Let's say you have passed authentication status into the `Login` component. You can choose to either render the `Welcome` component or the `PleaseSignIn` component based on that auth status:

```javascript
import React from 'react';
import Welcome from './welcome';
import PleaseSignIn from './please-sign-in';

const Login = ({ authenticated }) => (
    <div>
        {authenticated ? (
            <Welcome />
        ) : (
            <PleaseSignIn />
        )}
    </div>
);
```

## Fragments
The previous example also feeds into the last React feature I want to talk about, Fragments. Notice there is a div element kind of just hanging out with no real purpose. In bigger applications this can get messy. React normally makes you have a parent element when rendering HTML. But in a case like above the div element is basically useless. We can rewrite the example with Fragments so that there is no unnecessary rendering of a div:

```javascript
import React, { Fragment } from 'react';
import Welcome from './welcome';
import PleaseSignIn from './please-sign-in';

const Login = ({ authenticated }) => (
    <Fragment>
        {authenticated ? (
            <Welcome />
        ) : (
            <PleaseSignIn />
        )}
    </Fragment>
);
```

React will just render the `Welcome` or `PleaseSignIn` component without a wrapper div. Pretty nice!

## Conclusion
Wow this post was much longer than anticipated. Props to you if you got this far. React has so far been a great developer experience for me. This makes me excited to learn new languages and frameworks in the future. Stay tuned for more updates on what I have been learning. Cheers!

