# Frontend test - Questions

## 1. What is the difference between Component and PureComponent? give an example where it might break my app. ##

The main difference between those two is that PureComponent implements the shouldComponentUpdate() whereas Component doesn’t. When we use Component then the child component is also re-rendered if the parent component re-renders itself. However in the PureComponent, the child component only re-renders if the props passed to it changes.

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that? ## 

ShouldComponentUpdate() returning false causes any context update to be no longer propagated to child components. A way to solve that issue is to use context as a dependency injection system instead of store state directly in the context.

## 3. Describe 3 ways to pass information from a component to its PARENT. ## 

**Using Callback Functions**\
In the parent component we create a callback function that will retrieve the data from the child component. Then we pass the callback function to the child as a props from the parent component. The child component calls the parent callback function using props and passes the data to the parent component.

**Using setState**\
We can use state variables defined in parent and pass the setter functions to the child as props for the child to use and update.

**Using Context**\
We can create a context and wrap a component high in the tree (higher than the PARENT). Then we can have the child updating the context and the parent reading from it.

## 4. Give 2 ways to prevent components from re-rendering. ## 

**useMemo() and UseCallback() hooks**\
Both useMemo UseCallback are both performance optimizations that enable the code to re-render components only if there’s a change in the props.

**Replace useState() with useRef()**\
useState() hook is widely used in React applications to re-render the components on state changes. However, there are scenarios where we need to track state changes without re-rendering the components. But, if we use the useRef() Hook, we can track the state changes without causing component re-renderings.

## 5. What is a fragment and why do we need it? Give an example where it might break my app. ##

With React Fragments we can render multiple elements of a component without adding extra div tags. Its syntax is `<> … </>`. That allows for more readable code. It’s easy to break styling for example if we implement css rules that don’t expect extra div elements coming from nested components.

## 6. Give 3 examples of the HOC pattern. ##

In short a Higher Order Component (HOC) is a component that receives another component as a parameter and then we can apply some logic to it before returning it.

One example could be for applying consistent styling to components, so the HOC could be the one having the styling logic and then applying it to the passed component. 

Another example could be for components that are dependent on the same API calls for their data. The HOC could be the one adding the logic to retrieve the date and pass it down to the component.

Yet another example could be to have a math calculation happening in the HOC and then passed down to the component that is dependent on the result of that calculation. 

## 7. what's the difference in handling exceptions in promises, callbacks and async...await. ##

Assuming we can use the same approach to catching errors in all three cases, with that being using a try-catch block, we have differences on how the errors could be thrown in each case. For async functions we normally use throws but with promises we could also use the reject() function. With callbacks it can get tricky since they will be called from a different call stack, which means that thrown errors will propagate to somewhere else in the code. The way to have an error propagate across such callbacks is to use the reject() function instead of throws.

## 8. How many arguments does setState take and why is it async. ##

setState() doesn't immediately mutate the state but creates a pending state transaction. The setState() calls are in fact batched. 

The setState method takes up to 2 arguments. The first argument is for updating the state and can be an object or a callback function. The second argument is a function that’s always run after setState is run.

## 9. List the steps needed to migrate a Class to Function Component. ## 

1. Change the class to a function
2. Remove the render method, keeping everything after & including the return statement
3. Convert all methods to functions
4. Remove references to "this"
5. Remove constructor (change to useState and remove event handler bindings)
6. Replace each of the setState calls with the relevant state variable setter
7. Replace lifecycle methods with hooks like useEffect()

## 10. List a few ways styles can be used with components. ##

1. Inline CSS, with styling added to the element directly using the HTML or JSX
2. Imported from a CSS file, which is a very common approach (e.g. global styling)
3. CSS Modules, where components are paired with their own style file, allowing styles to be localised to the component only (hashed styles)
4. Using an extension language like Sass or Less
5. CSS written in JS, with CSS generated usually as a `<style>` element and attached into the DOM when JS is parsed

## 11. How to render an HTML string coming from the server. ##

We can use the dangerouslySetInnerHTML attribute on a html element so we avoid the escaping happening from JSX. However that approach is considered risky for XSS attacks, hence its naming.
