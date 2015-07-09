# jspm.test
jspm test.

1. Install jspm CLI:
`npm install jspm -g`

2. Create a project:
`npm install jspm --save-dev`

`jspm init`

3. Install any packages from the jspm Registry, GitHub or npm:
```
    jspm install npm:lodash-node
    jspm install github:components/jquery
    jspm install jquery
    jspm install myname=npm:underscore
```

4. Bundle(扎捆合并) for production
`jspm bundle lib/main --inject`
Alternatively, use `jspm bundle-sfx lib/main` to create a bundle script that can be used on its own with a <script> tag independent of config.js and system.js.

### Install Browsersync
`npm install -g browser-sync`

### Start Browsersync
`browser-sync start --server --files "css/*.css"`

