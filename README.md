## Standard HTML5 boilerplate with SASS, Livereload, Guard and Sprockets

Certain requirements needs to be fulfilled in order to run and compile the project.

### Ruby dependencies
  * Guard  - ([https://github.com/guard/guard](https://github.com/guard/guard))
  * Sprockets - ([https://github.com/pferdefleisch/guard-sprockets](https://github.com/pferdefleisch/guard-sprockets))
  * Live reload - ([https://github.com/guard/guard-livereload](https://github.com/guard/guard-livereload))
  * Sass - ([http://sass-lang.com/](http://sass-lang.com/))
  * Compass - ([http://compass-style.org/](http://compass-style.org/))
  * RVM - ([https://rvm.io/](https://rvm.io/))

### Additional dependencies
  * Homebrew - ([https://github.com/mxcl/homebrew](https://github.com/mxcl/homebrew))
  * NPM - ([https://npmjs.org/](https://npmjs.org/))

### Installing JSHint
After installing NPM it's time to install JSHint with `npm install -g jshint`

### Installing Gem dependencies
Just run `bundle install` in project root.

### Running Guard
Guard uses SASS / Compass for CSS preprocessing. All SASS files are located in the `sass` folder. Guard also uses Sprockets for
Javascript minification and concatination. All JavaScript files are located in the `scripts` folder.

Run guard with `bundle exec guard`.
