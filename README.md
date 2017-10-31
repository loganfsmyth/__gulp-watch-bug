This repo triggers a bug in gulp-watch by running the following two commands

    $(npm bin)/gulp

to start the watcher, then in a separate terminal:

    touch packages/dep/package.json
