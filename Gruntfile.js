module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
          banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> created by owl*/\n'
      },
      "owl": {
        "files": {
          'dest/libs.min.js': ['src/zepto.js', 'src/underscore.js', 'src/backbone.js']
        }
      }
     // build: {
     //   src: 'src/libs.js',
     //   dest: 'dest/libs.min.js'
     // }
    },
  // concat: {
  //    options: {
  //      separator: ';'
  //    },
  //    dist: {
  //      src: ['src/zepto.js', 'src/underscore.js', 'src/backbone.js'],
  //      dest: 'src/libs.js'
  //    }
  //  }
  });
  // 加载提供"uglify" 'concat'任务的插件
  // ^#$@ uglify 包含 concat的功能, uglify需要配置
  //    "my_target": {
  //      "files": {
  //        'dest/libs.min.js': ['src/zepto.js', 'src/underscore.js', 'src/backbone.js']
  //      }
  //    }
  //
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  // 默认任务
  grunt.registerTask('default', ['uglify']);
}
