<h1 align="center">Prettier - Opinioned Code Formatter</h1>

<h4 align="center">

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--ppp8j6Rw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://m4nu56.dev/images/java-prettier-formatting/prettier.png">

</h4>

# Prettier - Opinioned Code Formatter

## **What is Prettier?**

* Prettier is an opinionated code formatter with support for:

* JavaScript (including experimental features)
>* JSX
>* Angular
>* Vue
>* Flow
>* TypeScript
>* CSS, Less, and SCSS
>* HTML
>* Ember/Handlebars
>* JSON
>* GraphQL
>* Markdown, including GFM and MDX v1
>* YAML

* It removes all original styling* and ensures that all outputted code conforms to a consistent style. (See this blog post)

* Prettier takes your code and reprints it from scratch by taking the line length into account.

* For example, take the following code:

````bash
foo(arg1, arg2, arg3, arg4);
````

* It fits in a single line so it’s going to stay as is. However, we've all run into this situation:

````bash
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
````

* Suddenly our previous format for calling function breaks down because this is too long. Prettier is going to do the painstaking work of reprinting it like that for you:

````bash
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne(),
);
````

* Prettier enforces a consistent code style (i.e. code formatting that won’t affect the AST) across your entire codebase because it disregards the original styling* by parsing it away and re-printing the parsed AST with its own rules that take the maximum line length into account, wrapping code when necessary.

<br>

**Source:** <a href="https://prettier.io/docs/en/">Prettier - What is Prettier?</a>

<br>

## **Installation**

* (Via npm) First, install Prettier locally:

````bash
npm install --save-dev --save-exact prettier
````

<br>

* Then, create an empty config file to let editors and other tools know you are using Prettier:

````bash
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
````

<br>

* Next, create a **.prettierignore** file to let the Prettier CLI and editors know which files to not format. Here’s an example:

````bash
# Ignore artifacts:

build
coverage
````
<br>

#### **Tip!**

    - Base your .prettierignore on .gitignore and .eslintignore (if you have one).
    - Another tip! If your project isn’t ready to format, say, HTML files yet, add *.html.

* Now, format all files with Prettier (Via npm):
    
````bash
npx prettier . --write
````

* What is that **npx** thing? npx ships with npm and lets you run locally installed tools. We’ll leave off the npx part for brevity throughout the rest of this file!

* **Note:** If you forget to install Prettier first, npx will temporarily download the latest version. That’s not a good idea when using Prettier, because we change how code is formatted in each release! It’s important to have a locked down version of Prettier in your **package.json**. And it’s faster, too.

* <code>prettier --write .</code> is great for formatting everything, but for a big project it might take a little while. You may run <code>prettier --write app/</code> to format a certain directory, or <code>prettier --write app/components/Button.js</code> to format a certain file. Or use a glob like <code>prettier --write "app/**/*.test.js"</code> to format all tests in a directory (see fast-glob for supported glob syntax).

* If you have a CI setup, run the following as part of it to make sure that everyone runs Prettier. This avoids merge conflicts and other collaboration issues!

````bash
npx prettier . --check
````

<code>--check</code> is like <code>--write</code>, but only checks that files are already formatted, rather than overwriting them. prettier --write and prettier --check are the most common ways to run Prettier.

<br>

### **Set up your editor:**

* Formatting from the command line is a good way to get started, but you get the most from Prettier by running it from your editor, either via a keyboard shortcut or automatically whenever you save a file. When a line has gotten so long while coding that it won’t fit your screen, just hit a key and watch it magically be wrapped into multiple lines! Or when you paste some code and the indentation gets all messed up, let Prettier fix it up for you without leaving your editor.

* See Editor Integration for how to set up your editor. If your editor does not support Prettier, you can instead run Prettier with a file watcher.

* **Note:**

>* Don’t skip the regular local install! Editor plugins will pick up your local version of Prettier, making sure you use the correct version in every project. (You wouldn’t want your editor accidentally causing lots of changes because it’s using a newer version of Prettier than your project!)

* And being able to run Prettier from the command line is still a good fallback, and needed for CI setups.

<br>

### **ESLint (and other linters)** 

* If you use ESLint, install eslint-config-prettier to make ESLint and Prettier play nice with each other. It turns off all ESLint rules that are unnecessary or might conflict with Prettier. There’s a similar config for Stylelint: stylelint-config-prettier

* (See Prettier vs. Linters to learn more about formatting vs linting, Integrating with Linters for more in-depth information on configuring your linters, and Related projects for even more integration possibilities, if needed.)

### **Git hooks**

* In addition to running Prettier from the command line (<code>prettier --write</code>), checking formatting in CI, and running Prettier from your editor, many people like to run Prettier as a pre-commit hook as well. 

* This makes sure all your commits are formatted, without having to wait for your CI build to finish.

* For example, you can do the following to have Prettier run before each commit:

<br>

#### 1. Install husky and lint-staged (Via npm):

````bash
npm install --save-dev husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
````

#### 2. Add the following to your package.json:

````bash
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
````

* **Note:** If you use ESLint, make sure lint-staged runs it before Prettier, not after.

* See <a href="https://prettier.io/docs/en/precommit">Pre-commit Hook</a> for more information.

## Summary

* To summarize, we have learned to:

>* Install an exact version of Prettier locally in your project. This makes sure that everyone in the project gets the exact same version of Prettier. Even a patch release of Prettier can result in slightly different formatting, so you wouldn’t want different team members using different versions and formatting each other’s changes back and forth.

>* Add a **.prettierrc.json** to let your editor know that you are using Prettier.

>*  Add a **.prettierignore** to let your editor know which files not to touch, as well as for being able to run <code>prettier --write .</code> to format the entire project (without mangling files you don’t want, or choking on generated files).

>* Run <code>prettier --check .</code> in CI to make sure that your project stays formatted.

>* Run Prettier from your editor for the best experience.

>* Use **eslint-config-prettier** to make Prettier and ESLint play nice together.

>* Set up a **pre-commit hook** to make sure that every commit is formatted.

<br>

**Source:** <a href="https://prettier.io/">Prettier - Home Page</a>

<br>
<br>
<hr>
<p align="center">&lt;&lt;&lt;&copy;<a href="https://github.com/sandroffdsantos" target="blank">Sandro Santos</a>&gt;&gt;&gt;</p>