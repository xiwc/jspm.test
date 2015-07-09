System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "npm:lodash-node@3.10.0/modern/internal/arraySome",
      "npm:lodash-node@3.10.0/modern/internal/equalByTag",
      "npm:lodash-node@3.10.0/modern/lang/isObject",
      "npm:lodash-node@3.10.0/modern/internal/isObjectLike",
      "npm:lodash-node@3.10.0/modern/internal/baseProperty",
      "npm:lodash-node@3.10.0/modern/internal/isLength",
      "npm:lodash-node@3.10.0/modern/lang/isArguments",
      "npm:lodash-node@3.10.0/modern/lang/isArray",
      "npm:lodash-node@3.10.0/modern/internal/isIndex",
      "npm:lodash-node@3.10.0/modern/object/keysIn",
      "npm:lodash-node@3.10.0/modern/lang/isTypedArray",
      "npm:lodash-node@3.10.0/modern/utility/identity",
      "github:components/jquery@2.1.4/jquery",
      "npm:underscore@1.8.3/underscore",
      "npm:lodash-node@3.10.0/modern/internal/equalArrays",
      "npm:lodash-node@3.10.0/modern/lang/isFunction",
      "npm:lodash-node@3.10.0/modern/internal/getLength",
      "npm:lodash-node@3.10.0/modern/internal/shimKeys",
      "npm:lodash-node@3.10.0/modern/internal/bindCallback",
      "github:components/jquery@2.1.4",
      "npm:underscore@1.8.3",
      "npm:lodash-node@3.10.0/modern/lang/isNative",
      "npm:lodash-node@3.10.0/modern/internal/isArrayLike",
      "npm:lodash-node@3.10.0/modern/internal/getNative",
      "npm:lodash-node@3.10.0/modern/object/keys",
      "npm:lodash-node@3.10.0/modern/internal/equalObjects",
      "npm:lodash-node@3.10.0/modern/internal/baseIsEqualDeep",
      "npm:lodash-node@3.10.0/modern/internal/baseIsEqual",
      "npm:lodash-node@3.10.0/modern/lang/isEqual",
      "lib/bootstrap",
      "lib/main"
    ]
  }
});

System.config({
  "map": {
    "components/jquery": "github:components/jquery@2.1.4",
    "jquery": "github:components/jquery@2.1.4",
    "lodash-node": "npm:lodash-node@3.10.0",
    "myname": "npm:underscore@1.8.3",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:lodash-node@3.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

