module.exports = function(grunt) {
  grunt.initConfig({


    cacheBust: {
      options: {
        assets: ['path/to/assets/**/*.{js,css}'],
        deleteOriginals: true
      },
      taskName: {
        files: {
          src: ['path/to/index.html']
        }
      }
    },
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
