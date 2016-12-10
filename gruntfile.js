module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js' : ['_/components/js/script.js'] 
				} // files
			} // my_target
		}, // uglify

		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass

		watch: 	{
				options: 	{ livereload: true },
				scripts: 	{
						files: ['_/components/js/*.js'],
						tasks: ['uglify']
				}, //scripts

					sass: 	{
						files: 	['_/components/sass/*.scss', '_/components/sass/base/*.scss','_/components/sass/layouts/*.scss','_/components/sass/modules/*.scss'],
						tasks: 	['compass:dev']
						

					}, // sass
				

					html: 	{
						files:['*.html']
					} //html
	 		
				} // watch
	})	// initConfig
		grunt.registerTask('default','watch');

} // exports