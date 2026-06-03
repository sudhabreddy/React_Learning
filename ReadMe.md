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






