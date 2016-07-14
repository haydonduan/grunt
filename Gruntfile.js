//module.exports = function (grunt) {
//  // 项目配置
//  grunt.initConfig({
//    pkg: grunt.file.readJSON('package.json'),
//    uglify: {
//      options: {
//          banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> created by owl*/\n'
//      },
//      "owl": {
//        "files": {
//          'dest/libs.min.js': ['src/zepto.js', 'src/underscore.js', 'src/backbone.js']
//        }
//      }
//     // build: {
//     //   src: 'src/libs.js',
//     //   dest: 'dest/libs.min.js'
//     // }
//    },
//  // concat: {
//  //    options: {
//  //      separator: ';'
//  //    },
//  //    dist: {
//  //      src: ['src/zepto.js', 'src/underscore.js', 'src/backbone.js'],
//  //      dest: 'src/libs.js'
//  //    }
//  //  }
//  });
//  // 加载提供"uglify" 'concat'任务的插件
//  // ^#$@ uglify 包含 concat的功能, uglify需要配置
//  //    "my_target": {
//  //      "files": {
//  //        'dest/libs.min.js': ['src/zepto.js', 'src/underscore.js', 'src/backbone.js']
//  //      }
//  //    }
//  //
//  grunt.loadNpmTasks('grunt-contrib-uglify');
//
//  grunt.loadNpmTasks('grunt-contrib-requirejs');
//  //grunt.loadNpmTasks('grunt-contrib-concat');
//  // 默认任务
//  grunt.registerTask('default', ['uglify']);
//
//}






module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  //为了介绍自定义任务搞了一个这个
  grunt.registerTask('build', 'require demo', function () {
    //任务列表
    var tasks = ['requirejs'];
    //源码文件
    var srcDir = 'src';
    //目标文件
    var destDir = 'dest';
    //设置参数
    grunt.config.set('config', {
      srcDir: srcDir,
      destDir: destDir
    });
    //设置requireJs的信息
    var taskCfg = grunt.file.readJSON('gruntCfg.json');
    var options = taskCfg.requirejs.main.options,
        platformCfg = options.web,
        includes = platformCfg.include,
        paths = options.paths;
    var pos = -1;
    var requireTask = taskCfg.requirejs;
    options.path = paths;
    options.out = platformCfg.out;
    options.include = includes;
    //运行任务
    grunt.task.run(tasks);
    grunt.config.set("requirejs", requireTask);
  });
}
