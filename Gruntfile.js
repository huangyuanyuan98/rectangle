module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['rectangle.js']        
    },
   
    csslint: {
      options: {
        csslintrc: '.csslintrc'                    
      },
      src: '*.css'             
    },

    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'                  
      },
      src: '*.html'               
    },

    mochacli: {
      options: {
        reporter: 'spec',
        bail: true                              
      },
      all: ['test/*.js'] 
    },
  
    mocha_istanbul: {
      coverage: {
        src: 'test'                
      }      
    },

    mocha: {
      test: {
          src: ['test/index.html']               
      },
      options: {
          run: true,
          reporter: 'Spec'                       
      }    
    },
  });

grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-htmlhint');
grunt.loadNpmTasks('grunt-eslint');
grunt.loadNpmTasks('grunt-mocha-cli');
grunt.loadNpmTasks('grunt-mocha-istanbul');
grunt.loadNpmTasks('grunt-mocha');

grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
grunt.registerTask('cover', ['mocha_istanbul']);
grunt.registerTask('check-cover', ['istanbul_check_coverage']);
grunt.registerTask('unitTest', ['mocha']);
};
