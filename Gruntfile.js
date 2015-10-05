module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/*.js', // input all files
        dest: 'js/build/<%= pkg.name %>.min.js' // output everything together
      }
    },

    jekyll: {                             // Task
      options: {                          // Universal options
        // src : '<%= app %>'
      },
      dist: {                             // Target
        options: {                        // Target options
          dest: '<%= dist %>',
          config: '_config.yml'
        }
      },
      serve: {                            // Another target
        options: {
          dest: '_site',
          drafts: true,
          watch: true,
          serve: true,
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jekyll:serve']);


};
