# Test1

Install the angular project in angular cli 


# Add Pluginn  grunt-cache-bust

=>` npm install grunt-cache-bust --save-dev `  this cammand to install the pluggin


# Add  Gruntfile

=>add  `gruntfile.js`


# Add  Grunt BrowserSync plugin

=>`npm install browser-sync grunt-browser-sync --save-dev ` add this plugin


# setup gruntfile
=> module.exports = function(grunt) {
  grunt.initConfig({
    // ... other tasks ...
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'path/to/built/files/**/*' // specify the files that should trigger a reload
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './path/to/built/files' // specify the directory that should be served
          }
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-browser-sync');
 
  grunt.registerTask('default', ['browserSync', /* other tasks */]);
}; 




# grunt run this command terminal

=> `grunt `
=> succefuly response =>Running "browserSync:dev" (browserSync) task
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:3000
    External: http://192.168.10.253:3000
 ---------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ---------------------------------------
[Browsersync] Serving files from: ./path/to/built/files
[Browsersync] Watching files...

Done.






# setup to deploy Angular app to an IIS Web server — Complete Setup

 tutorial link =>  ` https://levelup.gitconnected.com/how-to-deploy-angular-app-to-an-iis-web-server-complete-setup-337997486423 `


 # Enable IIS Service in windows 
    

    1. => In Windows, navigate to Control Panel > Programs > Programs and Features > Turn Windows features on or off (left side of the screen). 
    2. => Select the Internet Information Services check box. Select OK.
      
      Then to open it, simply search for IIS Manager in the search bar.




#  Configure Angular to output files in the development build


   => packege.json file script add "build:dev": "ng build -- watch"


# Add a new application in IIS



    1.copy the file path of the output files, in our case the files from dist/my-app
    2.Right Click on Default Web Site > Add Application
    3.fill the alias field with the route from which you want to serve the application (localhost/my-app)



#  IIS permissions

    1.IIS also creates IUSR as the default user to access files via IIS. So we need to make sure that both IUSR and IIS_USRS has read access to files/folders.

    2.To do so, Right Click on the Folder -> Properties -> Security Tab > See if IUSR and IIS_USRS are in Group or user names list, If No,

    3.Click Edit -> Add -> Advanced -> Find Now -> Select IUSR and click OK




#  create configfile

  =><system.webServer>
  <rewrite>
    <rules>
      <rule name="Angular Routes" stopProcessing="true">
        <match url=".*" />
        <conditions logicalGrouping="MatchAll">
          <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
          <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
        </conditions>
        <action type="Rewrite" url="./index.html" />
      </rule>
    </rules>
      </rewrite>
      </system.webServer>
      </configuration>


      => add file in angular.json 



 # Install URL rewrite 

 # Give IIS Users and IUser - Full Access of the Deployment Folder





