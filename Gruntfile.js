module.exports = function(grunt) {
  
  // Load the module builder
  require('load-grunt-tasks')(grunt);
  require('./module-builder/module-builder.js')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    appSettings: {
      build: 'dist/',
      source: 'src/',
      index: 'index.html',
      styles: '/styles',
      images: '/images',
      bower: 'bower_components/',
      port: 9100
    },
    
    testSettings: {
      port: 9001
    },
    
    wiredep: {
      dist: {
        src: [
          '<%= appSettings.build + appSettings.index %>'
        ],
        
        ignorePath: /\.\.\//,
        
        // Using absolute urls
        fileTypes: {
          html: {
            detect: {
              js: /<script.*src=['"](.+)['"]>/gi,
              css: /<link.*href=['"](.+)['"]/gi
            },
            replace: {
              js: '<script src="/{{filePath}}"></script>',
              css: '<link rel="stylesheet" href="/{{filePath}}" />'
            }
          }
        }
      }
    },

    includeSource: {
      options: {
        basePath: '<%= appSettings.build %>',
        baseUrl: '/',
        templates: {
          html: {
            js: '<script src="{filePath}"></script>'
          }
        }
      },
      
      dist: {
        files: {
          '<%= appSettings.build + appSettings.index %>': '<%= appSettings.source + appSettings.index %>'
        }
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: '<%= appSettings.source + appSettings.styles %>',
          cssDir: '<%= appSettings.build + appSettings.styles %>',
          imagesDir: '<%= appSettings.source + appSettings.images %>',
          importPath: ['./bower_components', './<%= appSettings.source + appSettings.styles %>'],
          httpImagesPath: '<%= appSettings.images %>',
          require: [ 'sass-globbing' ]
        }
      }
    },
    
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= appSettings.source %>',
            dest: '<%= appSettings.build %>',
            src: [
              '{common,components,pages}/**/*.html',
              'data/*.json',
              '**/*.js'
            ]
          },
          
          {
            expand: true,
            dot: true,
            cwd: './',
            dest: '<%= appSettings.build %>',
            src: [
              '<%= appSettings.bower %>/**/*.js'
            ]
          }
        ]
      }
    },
    
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '<%= appSettings.build %>{,*/}',
              '.sass-cache/'
            ]
          }
        ]
      }
    },
    
    connect: {
      dist: {
        options: {
          base: '<%= appSettings.build %>',
          port: '<%= appSettings.port %>',
          hostname: 'localhost',
          keepalive: true
        }
      }
    },
    
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        port: '<%= testSettings.port %>',
        singleRun: true
      }
    }
  });
  
  // Default task(s).
  grunt.registerTask('default', 'build');
  
  grunt.registerTask('test', 'karma');
  
  grunt.registerTask('serve', [
    'build',
    'connect'
  ]);
  
  grunt.registerTask('build', [
    'clean',
    'copy',
    'compass',
    'includeSource',
    'wiredep'
  ]);

};
