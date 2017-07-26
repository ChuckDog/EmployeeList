module.exports = function (grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options : {
            banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
         my_target: {
            files: [
                {
                    expand: true,
                    src: ['js/EmployeeListComponent.js'], 
                    dest: 'dist/'
                }
            ]
        }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
}