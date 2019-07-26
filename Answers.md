- What problem does the context API help solve?

      	Allows us to store state in a central location and use it in any component we want, without having to use prop-drilling.

- In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

      	Actions are objects triggererd by some event in our ui. They must contain a type property, and can also contain a payload. Once triggered that sent the type property and payload to our reducers.

      	Reducers take in the action and payload, and determine how to change the state based on that information.

      	The store is where our global state object is kept. It is immutable, and can only be updated by a reducer. State held in the store can be accessed and used by any component connected to the store. The store is the 'single source of truth' because all actions and resulting state changes must pass through it.

- What is the difference between Application state and Component state? When would be a good time to use one over the other?

      	Application state is data that is accessable anywhere in our app by any component that subscribes to the store. When dealing with a lot of data that needs to be used in a lot of different places, application state is a good choice.

      	Component state is stored locally within individual components. It can be used in that component only, although it can be passed down as props to child components. When dealing with less data that only needs to be used by two or three components, component state can be a good choice.

- Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

      	Redux-thunk is middleware that allows us to run our reducers asynchronously in Redux. It does this by intercepting what is returned by our action creators. Actions are sent on to the reducer, but functions (or thunks) are invoked and will dispatch the action after the function is run.

- What is your favorite state management system you've learned and this sprint? Please explain why!

      	Redux! When the Redux flow finally clicked for me, it really did make reasoning about my app a whole lot easier. Also, being able to use hooks makes it that much easier.
