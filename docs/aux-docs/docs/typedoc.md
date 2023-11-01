<h1 align="Center">TypeDoc - Code Documentation</h1>

<h4 align="center">

![TypeDoc](../../img/typedoc.PNG)

</h4>

# **TypeDoc - Code Documentation**

TypeDocs


TypeStrong/typedoc: Documentation generator for TypeScript projects. (github.com)

Installation:

```
npm install typedoc --save-dev
```

or specific version:

```
npx typedoc --version
```

Config:
 
```
{
    "compilerOptions": {
        "target": "ES2018",
        "outDir": "./dist",
        "rootDir": "./src",
        "noEmitOnError": true,
        "module": "CommonJS"
    },
    "typedocOptions": {
        "entryPoints": ["./src/**/*"],
        "theme": "default",
        "out": "./TypeDoc"
      },
      "include": [
        "src/*.ts",
        "src/**/*.ts",
        "src/**/*.js"
      ],
      "exclude": [
        "node_modules",
        "src/**/*.spec.ts",
        "src/**/*.spec.js"
      ]
}
```

Run:

```
npx typedoc
```

<hr>

## What is TypeDoc?
TypeDoc is a documentation generator for TypeScript, a tool which reads your TypeScript source files, parses comments contained within them, and generates a static site containing documentation for your code.

TypeDoc generates documentation based on your exports. It will follow re-exports to document reflections documented in other files

// $ npx typedoc src/index.ts

/** Documented! */
export function direct() {
    return 1;
}

// Also documented.
export { indirect } from "./other";

// Not documented as it is not visible to your module's consumers.
function localHelper() {}

<br>

## Installation:

Requirements
TypeDoc requires Node.js to be installed on your system. If you haven't done that already, head over to their site and follow their install instructions.

Installing TypeDoc is available as a node package. Using npm ensures that all relevant dependencies are setup correctly. You can choose to either install locally to your project or globally to the CLI.

TypeDoc aims to support the two latest TypeScript releases for the latest release. Depending on the scale of breaking changes introduced in a new TypeScript version, a given version may support more versions of TypeScript.

TypeDoc Version	TypeScript Version(s)
0.25	4.6 through 5.2
0.24	4.6 through 5.1
0.23	4.6 through 5.0
0.22	4.0 through 4.7
0.21	4.0 through 4.4
0.20	3.9 through 4.2
0.19	3.9 through 4.0
Installation
If you want to use TypeDoc from your command line in a project, use the API in your project code, or TypeDoc in an npm script, a local installation is the recommended approach. First install TypeDoc in your project:

$ npm install typedoc --save-dev

By saving TypeDoc to the project package.json file with the previous command, anyone who runs npm install on the project will have typedoc installed at the specific version required for the project.

The name of TypeDoc's executable is typedoc. To verify that it works, you can now invoke the CLI in your project using npx (npx is a tool bundled with npm), passing TypeDoc the --version argument:

$ npx typedoc --version

TypeDoc 0.23.0
Using TypeScript 4.7.2 from /home/gerrit/typedoc/node_modules/typescript/lib
Command line interface
The CLI can be used both from your terminal or from npm scripts. All arguments that are not passed with flags are parsed as entry points. Use either the --out or --json arguments to define the format and destination of your documentation.

typedoc --out docs src/index.ts
JSON Configuration
Instead of passing all arguments via the command line, the CLI also supports reading TypeDoc configuration from json files.

typedoc.json
When running typedoc from the CLI, you can define options in a json file named typedoc.json.

{
    // Comments are supported, like tsconfig.json
    "entryPoints": ["src/index.ts"],
    "out": "docs"
}
tsconfig.json
TypeDoc options can be defined within an existing tsconfig.json file. Use a typedocOptions section to define options as a json model.

{
    "compilerOptions": {
        "normalTypeScriptOptions": "here"
    },
    "typedocOptions": {
        "entryPoints": ["src/index.ts"],
        "out": "docs"
    }
}

**Source:** <a href="https://typedoc.org/guides/installation/">TypeDoc - Installation</a>