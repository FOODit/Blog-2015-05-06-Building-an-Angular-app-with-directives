module.exports = function(grunt) {
  var _ = require('lodash');

  /**
   * Generates a module for the app, using one of the existing
   * templates.
   * @param {String} type (common|components|pages)
   */
  grunt.task.registerTask('buildModule', 'Creates a module.', function(type, name) {
    var scriptsPath = './src/',
        acceptedTypes = {
          common: 'common',
          component: 'components',
          page: 'pages'
        },
        path;

    if (type && name && acceptedTypes[type]) {
      path = scriptsPath + acceptedTypes[type] + '/' + name;

      if (grunt.file.isDir(path)) {
        // Module exists
        grunt.log.error('A ' + name + ' module already exists in ' + type + '.');
      } else {
        // Module is new, create it
        buildModule(name, type, path);
      }
    } else {
      // Missing parameters
      grunt.log.error(this.name + ' requires a type (' + Object.keys(acceptedTypes).join('|') + ') and a name (in camelCase).');
    }
  });

  /**
   * Builds a module.
   *
   * @param {String} name
   * @param {String} type
   * @param {String} path
   */
  function buildModule (name, type, path) {
    // Start building
    grunt.log.subhead('> building ' + name + ' module at ' + path + '\n');

    // Create directory
    grunt.file.mkdir(path);

    // Create files
    createFilesFromTemplate(name, type, path);

    // Feedback module successfully created
    logModuleCreateSuccess(name, type);
  };

  /**
   * Generates files from the templates into a given
   * module folder
   *
   * @param {String} name Module's name
   * @param {String} type Module's type
   * @param {String} path Folder to build the files to
   */
  function createFilesFromTemplate (name, type, path) {
    var templatesPath = './module-builder/templates/',
        filePathPrefix,
        filePath,
        filePathAbsolute,
        fileContent;

    grunt.file.recurse(templatesPath + type, function (abspath, rootdir, subdir, filename) {
      filePathPrefix = subdir ? subdir + '/' : '';
      filePath = filePathPrefix + filename.replace('moduleName', name);
      filePathAbsolute = path + '/' + filePath;
      fileContent = processTemplate(name, grunt.file.read(abspath));

      grunt.file.write(filePathAbsolute, fileContent);

      grunt.log.writeln(filePath + ' created.');
    });
  };

  /**
   * Processes a template, passing in the required data.
   * @param   {String} name - Module name
   * @param   {String} content - Template content
   *
   * @returns {String} String containing the resulting html.
   */
  function processTemplate (name, content) {
    var templateConfig = {
      moduleName: name,
      _: _
    };

    return grunt.template.process(content, { data: templateConfig });
  };

  /**
   * Outputs a message to the console, after the module is created.
   * This message may contain usefult information, as how to integrate
   * this module in the app, for example.
   *
   * @param {String} name Module name.
   * @param {String} type As in acceptedTypes.
   */
  function logModuleCreateSuccess (name, type) {
    var messages = {
      common: 'To use it, import it where required, using angularApp.common.' + name + '.',
      component: 'To use it inside a page or component, import it in that page or component\'s .module, as angularApp.components.' + name + '. You can them refer to it in the directive\'s html as <fit-' + _.kebabCase(name) + '></fit-' + _.kebabCase(name) + '>.',
      page: 'To activate, import it in the app.module.js, as angularApp.pages.' + name + '. You will need to add "' + _.kebabCase(name) + '" manually to the regex in Gruntfile\'s `appConfig.rewriteRules` and also to `urlrewrite.xml`.'
    };

    grunt.log.writeln('\n');
    grunt.log.ok(name + ' module created under ' + type + '.');
    grunt.log.subhead('\n' + messages[type]);
  };
};
