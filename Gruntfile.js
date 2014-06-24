//'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
/*    jshint: {
      options: {
        "force": true
        //jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'library/js/*.js',
        '!library/js/scripts.min.js',
        '!library/js/libs/*.js'
      ]
    },*/
    sass: {
      dist: {
        options: {
          style: 'compressed',
          
          // Source maps are available, but require Sass 3.3.0 to be installed
          // https://github.com/gruntjs/grunt-contrib-sass#sourcemap
          sourcemap: true
        },
        files: {
          'library/css/main.min.css': 'library/sass/main.min.scss'
          
        }
      }
    },



/*        compass: {
      dist: {
        options: {
        sassDir: 'library/sass',
        cssDir: 'library/css',
        //config: 'config.rb',
        environment: 'development',
        
      relativeAssets: true

        }
      }
    },*/

        autoprefixer: {

      options: {
        browsers: ['last 2 version', 'ie 9']
      },
      dist: {
                files: {
          'library/css/main.min.css': 'library/css/main.min.css'
        }


      }
    },

    uglify: {
      dist: {
        files: {
          'library/js/scripts.min.js': [
/*            'library/js/plugins/bootstrap/transition.js',
            'library/js/plugins/bootstrap/alert.js',
            'library/js/plugins/bootstrap/button.js',
            'library/js/plugins/bootstrap/carousel.js',
            'library/js/plugins/bootstrap/collapse.js',
            'library/js/plugins/bootstrap/dropdown.js',
            'library/js/plugins/bootstrap/modal.js',
            'library/js/plugins/bootstrap/tooltip.js',
            'library/js/plugins/bootstrap/popover.js',
            'library/js/plugins/bootstrap/scrollspy.js',
            'library/js/plugins/bootstrap/tab.js',
            'library/js/plugins/bootstrap/affix.js',*/
            // 'library/js/plugins/*.js',
            'library/js/scripts.js'
            //'library/js/_*.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'library/js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/library/js/scripts.min.js.map'
        }
      }
    },
/*    version: {
      options: {
        file: 'lib/scripts.php',
        css: 'library/css/main.min.css',
        cssHandle: 'roots_main',
        js: 'library/js/scripts.min.js',
        jsHandle: 'roots_scripts'
      }
    },*/
    watch: {
        options: {
    livereload: true,
  },
/*      sass: {
        files: [
          'library/sass/*.scss'
          // 'library/sass/bootstrap/*.scss'
        ],
        tasks: ['sass', 'autoprefixer']
      },*/

/*      scss: {
        options: {
          livereload: false
        },
        files: ["library/sass/*.scss", "library/sass/bootstrap/*.scss"],
        //tasks: ["compass", "autoprefixer", "version"]
        tasks: ["compass", "autoprefixer"]
      },*/
      css : {
        files: ["library/sass/**/*.scss"],
        tasks: ["sass","autoprefixer"],
            options: {
      spawn: false,
      //livereload: true
        }
      },


      scripts: {
        files: [
          'library/js/*.js'
        ],
       // tasks: ['jshint', 'uglify', 'version']
        tasks: ['uglify'],
            options: {
            spawn: false,
          }
      },


      /*livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'library/css/main.min.css',
          'library/js/scripts.min.js',
          //'templates/*.php',
          '*.php'
        ]
      }*/
    },
      html:{
    files: ['*.php'],
    tasks: [],
    options: {
      spawn: false,
    }
  },
    clean: {
      dist: [
        'library/css/main.min.css',
        'library/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  // grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  //grunt.loadNpmTasks('grunt-wp-version');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    // 'compass',
    'sass',
    'autoprefixer',
    'uglify'
    //'version'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
