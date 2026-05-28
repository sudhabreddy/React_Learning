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




