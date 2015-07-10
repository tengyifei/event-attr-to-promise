System.config({
  "defaultJSExtensions": true,
  "transpiler": "traceur",
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  }
});

System.config({
  "map": {
    "bluebird": "npm:bluebird@2.9.33",
    "traceur": "github:jmcriffey/bower-traceur@0.0.90",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.90",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:bluebird@2.9.33": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

