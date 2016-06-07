//custom dir definitions
module.exports = function(dirs, mode) {

  switch (mode) {

    //invoked after setting src and dist main dir (set custom src/dist dir here; REMEMBER TO UPDATE SOURCE MAP SETTINGS)
    case 'main':
      //change src directory to source_dir
      // dirs.src.main = dirs.app + 'source_dir/';

      //change dist directory to "../public_html"
      // dirs.dist.main = dirs.app + '../public_html/';
      break;

    //change particular src/dist subdirectories, add custom dirs here
    case 'sub':
      //change src images subdirectory from "img" to "images"
      // dirs.src.img = dirs.src.main + 'images/';

      //change dist JS subdirectory from "js" to "scripts"
      // dirs.dist.js = dirs.dist.main + 'scripts/';

      //custom dir: watch and copy contents of "php" dir from src to dist
      // dirs.custom.documents = {
      //   from: dirs.src.main + 'php/**/*.php',
      //   to: dirs.dist.main + 'php/',  //set to null to just watch the dir without copying (e.g. external backend views)
      //   inject: {
      //     //main task, receives stream and { id: dirName, dirInfo: dirInfo } as a second parameter
      //     src: true,   //function must return: a stream (if canceled) or a glob array passed to the src
      //     limit: true, //gulp-changed plugin
      //     dest: true,

      //     //watch task, receives undefined and { id, dirInfo } with id and definition as a second parameter
      //     watch: true,

      //     //clean task, receives current glob to delete (see the clean task injector docs) and { id, dirInfo } with id and definition as a second parameter
      //     //not needed to disable if "to" is null
      //     clean: true
      //   }
      // }

      break;
  }
}