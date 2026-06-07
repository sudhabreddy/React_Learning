1. npm init -- to initiate npm packages
when you run this command in terminal, you will be asked with multiple questions to configure npm in our project.

once the command completed, you will see package.json file.

2. npm install -D parcel -- to install parcel. Parcel is a bundler
(make sure to use capital D)
-d is for creating dev dependency. 

3. ~ = > updates minor versions
    ^ => updates major version

    ~ = > Locks the minor version, so the middle version number cannot change.

^ => Locks the major version, so the first digit remains fixed.

4. Package.json.lock =>  tracks exact version of the package installed

5. add .gitignore to exclude files which do not want to push to git.

6. Tree shaking works by analyzing your code and determining which parts are actually needed to render your application. It then removes any code that is not explicitly imported or used.

7. add list of browsers supported safely.

8. useEffect comes from react library. its called everytime component rendered.

    useEffect(
        () => {},[]
    );
3 cases of useEffect

[] is dependency array, its not manadatory. if no [], useEffect is called evrytime component renders.
if [] is empty, useEffect is called on only initial render, means when components is first time loaded.
if there is value provide for [], useEffect is call everytime value is updated.

{} is call back function.

9. useState is used to define local state variables inside the component.
never declare outside the component, inside any of the loops.

10. route -- npm i react-router-dom

in App.jsx, import the router library. 

declare the routes

render the route object

11. useRouteError to handle router.
12. Children Routes 
13. Outlet -- like a tunnel, all components routs go through outlet 
14. never use anchor tag, use Link tag from 'react-router-dom' lib.
15. 2 types of routing in web apps.
client side routing
server side routing

16. Dynamic routing bansed on query parameters.
17. https://corsproxy.io/
18. https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 
life cycle events.
19. class component

1. Constuctor
2. render
3. mount

1. parent constructor
2. parent render
3. child1 constructor
4. child1 render
5. child2 constructor
6. child2 render
7. child1 mount
8. child 2 mount
9. parent mount

20. API calls are usually made in mount life cycle event.

21. class component life cycle events should not be compared with functional components hooks.

22. unmounting is important in SPA as it is important to unloaded the things.
ex: setTimer

23. Bundling/ chunking / lazy loading / code splitting / on demand loading, all refers to same code spliting

24. lazy module is used to load the code on demand. Suspend is  used as fallback UI untill the code loads on demand.

have a look at how Grocery module is implemented.

25. Shimmer UI is used to show like progerssbar. refer youtube 
26. Sass vs scss

27 Chakra UI, MUI ui, bootstrap, ant design , tailwind ui.

28.Higher order component: wrapper component. takes a component as input, modifies it and returns a component.

29. add react developer tool to debug the application.

30. controlled and uncontrolled components

40. Map, filter, reduce

41. props drilling : values passed from parent to child and childe to its child.

even if parent component does not use the props and its child needs props data, you end up in passing data to parent component.

45. to avoid props drilling, use context. ex: to keep info about logged in user.

    createContext from react. 
46. using the context in class component <userContext.Consumer>
<userContaext.Provider>

47. Redux is state management library for react.
its not mandatory. use it only it required.
redux is not part of react. it's a separate library. 
its's not the only library used for state management. Zustand is also one of the lib for same purpose.

48. Using Redux, its easy to debug the application using redux dev tools.

49. Redux can be used with any other lib as well.

React-redux - old way of writing code.

50. Redux-toolkit is new way of writing code.

# Redux toolkit
- install redux toolkit (@reduxjs/toolkit) and react-redux
- Build store
- Connect store to app
- create cart slice
- dispatch action
- read data in cart using selector

while subscribing to a store, subscribig to right portion of store is very imortant for performance. 










