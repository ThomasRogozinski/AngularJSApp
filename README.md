# AngularJSApp

All of this has been setup/tested on: <br /> 
Visual Studio 2013.5 Professional with MSBuild installed. <br />

Run Visual Studio and <br />
Restore Nuget packages (Chutzpah): Select Solution, right click for menu Manage NuGet Packages for Solution/Restore <br />

Run Solution to open index.html <br />
Got to Test Explorer to run tests <br />

if Chutzpah was restored run build and tests from VS or command line: <br />
msbuild build.proj /t:Build <br />
msbuild build.proj /t:Test <br />

alternatively having Node.js, Git, Gulp, Bower and Karma-cli available from command line  <br />
install node_modules: npm install  <br />
and install bower_components: bower install <br />
and run test: karma start
