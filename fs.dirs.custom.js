//custom dir definitions
module.exports = function(dirs, mode) {

  switch (mode) {

    //invoked after setting the src dir (set custom src dir here; REMEMBER TO UPDATE SOURCE MAP SETTINGS)
    case 'src':
      //e.g.
      // dirs.src.main = dirs.app + 'source_dir/';
      break;

    //invoked after setting the dist dir (change particular src subdirectories and/or set custom dist dir here)
    case 'dist':
      //when removing Swig support
      dirs.src.views.scripts = dirs.src.views.main;

      //change src images subdirectory from "img" to "images"
      // dirs.src.img = dirs.src.main + 'images/';

      //change dist directory to "../public_html"
      // dirs.dist.main = dirs.app + '../public_html/';
      break;

    //invoked after setting all dirs (change particular dist subdirectories and/or set custom dir modifications/definitions here)
    case 'all':
      //change dist JS subdirectory from "js" to "scripts"
      // dirs.dist.js = dirs.dist.main + 'scripts/';

      //watch and copy contents of "php" dir from src to dist
      // dirs.custom.documents = {
      //   dev: true,    //copied also for dev tasks
      //   clean: true,  //deletes the directory in dist on clean task
      //   from: dirs.src.main + 'php/**' + '/*.php',
      //   to: dirs.dist.main + 'php/'  //set to null to just watch the dir without copying (e.g. external backend views)
      // }
      break;
  }
}