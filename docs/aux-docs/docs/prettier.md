<h1 align="center">Prettier - Opinioned Code Formatter</h1>

<h4 align="center">

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--ppp8j6Rw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://m4nu56.dev/images/java-prettier-formatting/prettier.png">

</h4>

# **Sources:**

https://www.youtube.com/watch?v=ZXW6Jn6or1w&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=26&t=840s

https://www.youtube.com/watch?v=__eiQumLOEo&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=25&t=14s

https://www.youtube.com/watch?v=fslNny60HzI&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=24

https://www.youtube.com/watch?v=THCtQ7CkV1g&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=23&t=6s

https://www.youtube.com/watch?v=DqfQ4DPnRqI&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=22&t=48s

https://www.youtube.com/watch?v=_ssKvmZqSnk&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=21&t=404s

https://www.youtube.com/watch?v=8k-b-7rJAeU&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=20&t=403s

https://www.youtube.com/watch?v=kBk_367zbkQ&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=19&t=22s

https://www.youtube.com/watch?v=-qHA6zbOdLc&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=18&t=15s

https://www.youtube.com/watch?v=182_X9iqCqo&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=17&t=145s

https://www.youtube.com/watch?v=0uW_Grx1Pc0&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=16

https://www.youtube.com/watch?v=qod6E738cc4&list=PLNUYovYiu9oZmN4d2z-Mhbbf5VdMpKwwo&index=15&t=13s

<br>

1. **Source:** <a href="https://prettier.io/">Prettier - Home Page</a>

2. **Source:** <a href="https://prettier.io/docs/en/">Prettier - What is Prettier?</a>

3. **Source:** <a href="https://prettier.io/docs/en/editors">Prettier - VS Code Editor Integration</a>

4. **Source:** <a href="https://prettier.io/docs/en/install">Prettier - Installation</a>

5. **Source:** <a href="https://prettier.io/docs/en/options">Prettier - Format Options</a>

6. **Source:** <a href="https://prettier.io/docs/en/ignore">Prettier - Ignoring Code</a>

7. **Source:** <a href="https://stackoverflow.com/questions/65635648/how-can-i-base-a-prettierignore-file-on-gitignore">How can I base a .prettierignore file on .gitignore? - Stack Overflow</a>

8. **Source:** <a href="https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code#step-2-formatting-code-on-save">Prettier - Format on Save</a>

9. **Source:** <a href="https://prettier.io/docs/en/watching-files">Prettier - Format on Change</a>

10. **Source:** <a href="https://prettier.io/docs/en/precommit">Prettier - Pre-commit Hook</a>

11. **Source:** <a href="https://prettier.io/docs/en/cli.html#list-different">Prettier - CLI</a>

<br>

## Video Tutorials - Prettier / Husky / Lint-staged Set up:

1. **<a href="https://www.youtube.com/watch?v=THCtQ7CkV1g">Code Made Simple - How to fail fast with Husky - npm git commit hooks</a>**

2. <a href="https://www.youtube.com/watch?v=DqfQ4DPnRqI">Web Dev Simplified - How To Setup Prettier</a>

3. **<a href="https://www.youtube.com/watch?v=_ssKvmZqSnk">Monsterlessons Akademy - Lint Staged With Husky for Pre-commit Validations</a>**

4. <a href="https://www.youtube.com/watch?v=182_X9iqCqo">Automate Code Formatting with Pre-commit Hooks: Husky, lint-staged & Prettier</a>

5. <a href="https://www.youtube.com/watch?v=8k-b-7rJAeU">Kevin Powell - Formatting your code is a waste of time - use Prettier instead</a>

6. <a href="https://www.youtube.com/watch?v=-qHA6zbOdLc">Git hooks with Husky - No bad commits any more</a>

7. <a href="https://www.youtube.com/watch?v=ChKBhmsnXKI">JavaScript Talks - React Course - Ep 1.1 - Setup Prettier</a>

<br>

# Prettier - Opinioned Code Formatter

## **What is Prettier?**

- Prettier is an opinionated code formatter with support for:

- JavaScript (including experimental features)

  > - JSX
  > - Angular
  > - Vue
  > - Flow
  > - TypeScript
  > - CSS, Less, and SCSS
  > - HTML
  > - Ember/Handlebars
  > - JSON
  > - GraphQL
  > - Markdown, including GFM and MDX v1
  > - YAML

- It removes all original styling\* and ensures that all outputted code conforms to a consistent style. (See this blog post)

- Prettier takes your code and reprints it from scratch by taking the line length into account.

- For example, take the following code:

```bash
foo(arg1, arg2, arg3, arg4);
```

- It fits in a single line so it’s going to stay as is. However, we've all run into this situation:

```bash
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

- Suddenly our previous format for calling function breaks down because this is too long. Prettier is going to do the painstaking work of reprinting it like that for you:

```bash
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne(),
);
```

- Prettier enforces a consistent code style (i.e. code formatting that won’t affect the AST) across your entire codebase because it disregards the original styling\* by parsing it away and re-printing the parsed AST with its own rules that take the maximum line length into account, wrapping code when necessary.

<br>

**Source:** <a href="https://prettier.io/docs/en/">Prettier - What is Prettier?</a>

<br>

## **Installation**

### 1. Install VS Code Extension "Prettier - Code formatter".

- **Source:** <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">VS Code Marketplace - Prettier Code formatter</a>

- **Source:** <a href="https://www.npmjs.com/package/prettier">npm - Prettier</a>

<br>

### 2. Install Prettier locally in your project:

#### 2.1 For latest stable version of Prettier:

```bash
npm install --save-dev --save-exact prettier
```

<br>

#### 2.2 Install specific version of Prettier:

- **Example:** Install Prettier version 2.6.0

> - npm install prettier@2.6.0 --save-dev

```bash
npm install prettier@<prettier version> --save-dev
```

<br>

## 3. Config file

- Then, create an empty config file to let editors and other tools know you are using Prettier:

```bash
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

<br>

## 4. Add a .prettierignore file

- Next, create a **.prettierignore** file to let the Prettier CLI and editors know which files to not format. Here’s an example:

```bash
# Ignore artifacts:

build
coverage
```

<br>

#### 4.1 **Tip!**

- Base your .prettierignore on .gitignore and .eslintignore (if you have one).

- You can actually pass a flag to your prettier command --ignore-path and then give it the path of your .gitignore file so it will use that instead of the .prettierignore file.

```bash
prettier --ignore-path .gitignore
```

- Another tip! If your project isn’t ready to format, say, HTML files yet, add \*.html.

<br>

## 5. Format your code!

### 5.1 "npx prettier. --write"

- Now, format all files with Prettier (Via npm):

```bash
npx prettier . --write
```

- What is that **npx** thing? npx ships with npm and lets you run locally installed tools. We’ll leave off the npx part for brevity throughout the rest of this file!

- **Note:** If you forget to install Prettier first, npx will temporarily download the latest version. That’s not a good idea when using Prettier, because we change how code is formatted in each release! It’s important to have a locked down version of Prettier in your **package.json**. And it’s faster, too.

- <code>prettier --write .</code> is great for formatting everything, but for a big project it might take a little while. You may run <code>prettier --write app/</code> to format a certain directory, or <code>prettier --write app/components/Button.js</code> to format a certain file. Or use a glob like <code>prettier --write "app/\*_/_.test.js"</code> to format all tests in a directory (see fast-glob for supported glob syntax).

- If you have a CI setup, run the following as part of it to make sure that everyone runs Prettier. This avoids merge conflicts and other collaboration issues!

<br>

### 5.2 "npx prettier. --check"

```bash
npx prettier . --check
```

<code>--check</code> is like <code>--write</code>, but only checks that files are already formatted, rather than overwriting them. prettier --write and prettier --check are the most common ways to run Prettier.

<br>

## 6. **Set up your editor:**

- Formatting from the command line is a good way to get started, but you get the most from Prettier by running it from your editor, either via a keyboard shortcut or automatically whenever you save a file. When a line has gotten so long while coding that it won’t fit your screen, just hit a key and watch it magically be wrapped into multiple lines! Or when you paste some code and the indentation gets all messed up, let Prettier fix it up for you without leaving your editor.

- See Editor Integration for how to set up your editor. If your editor does not support Prettier, you can instead run Prettier with a file watcher.

- **Note:**

> - Don’t skip the regular local install! Editor plugins will pick up your local version of Prettier, making sure you use the correct version in every project. (You wouldn’t want your editor accidentally causing lots of changes because it’s using a newer version of Prettier than your project!)

- And being able to run Prettier from the command line is still a good fallback, and needed for CI setups.

<br>

### 6.1 **ESLint (and other linters)**

- If you use ESLint, install eslint-config-prettier to make ESLint and Prettier play nice with each other. It turns off all ESLint rules that are unnecessary or might conflict with Prettier. There’s a similar config for Stylelint: stylelint-config-prettier

- (See Prettier vs. Linters to learn more about formatting vs linting, Integrating with Linters for more in-depth information on configuring your linters, and Related projects for even more integration possibilities, if needed.)

<br>

### 6.2 **Git hooks**

- In addition to running Prettier from the command line (<code>prettier --write</code>), checking formatting in CI, and running Prettier from your editor, many people like to run Prettier as a pre-commit hook as well.

- This makes sure all your commits are formatted, without having to wait for your CI build to finish.

- For example, you can do the following to have Prettier run before each commit:

<br>

#### 6.2.1. Install husky and lint-staged (Via npm):

```bash
npm install --save-dev husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

#### 6.2.2. Add the following to your package.json:

```bash
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

- **Note:** If you use ESLint, make sure lint-staged runs it before Prettier, not after.

- See <a href="https://prettier.io/docs/en/precommit">Pre-commit Hook</a> for more information.

## Summary

- To summarize, we have learned to:

> - Install an exact version of Prettier locally in your project. This makes sure that everyone in the project gets the exact same version of Prettier. Even a patch release of Prettier can result in slightly different formatting, so you wouldn’t want different team members using different versions and formatting each other’s changes back and forth.

> - Add a **.prettierrc.json** to let your editor know that you are using Prettier.

> - Add a **.prettierignore** to let your editor know which files not to touch, as well as for being able to run <code>prettier --write .</code> to format the entire project (without mangling files you don’t want, or choking on generated files).

> - Run <code>prettier --check .</code> in CI to make sure that your project stays formatted.

> - Run Prettier from your editor for the best experience.

> - Use **eslint-config-prettier** to make Prettier and ESLint play nice together.

> - Set up a **pre-commit hook** to make sure that every commit is formatted.

<br>

## **Sources:**

1. **Source:** <a href="https://prettier.io/">Prettier - Home Page</a>

2. **Source:** <a href="https://prettier.io/docs/en/">Prettier - What is Prettier?</a>

3. **Source:** <a href="https://prettier.io/docs/en/editors">Prettier - VS Code Editor Integration</a>

4. **Source:** <a href="https://prettier.io/docs/en/install">Prettier - Installation</a>

5. **Source:** <a href="https://prettier.io/docs/en/options">Prettier - Format Options</a>

6. **Source:** <a href="https://prettier.io/docs/en/ignore">Prettier - Ignoring Code</a>

7. **Source:** <a href="https://stackoverflow.com/questions/65635648/how-can-i-base-a-prettierignore-file-on-gitignore">How can I base a .prettierignore file on .gitignore? - Stack Overflow</a>

8. **Source:** <a href="https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code#step-2-formatting-code-on-save">Prettier - Format on Save</a>

9. **Source:** <a href="https://prettier.io/docs/en/watching-files">Prettier - Format on Change</a>

10. **Source:** <a href="https://prettier.io/docs/en/precommit">Prettier - Pre-commit Hook</a>

11. **Source:** <a href="https://prettier.io/docs/en/cli.html#list-different">Prettier - CLI</a>

<br>

## **Video Tutorials - Prettier / Husky / Lint-staged Set-up:**

1. **<a href="https://www.youtube.com/watch?v=THCtQ7CkV1g">Code Made Simple - How to fail fast with Husky - npm git commit hooks</a>**

2. <a href="https://www.youtube.com/watch?v=DqfQ4DPnRqI">Web Dev Simplified - How To Setup Prettier</a>

3. **<a href="https://www.youtube.com/watch?v=_ssKvmZqSnk">Monsterlessons Akademy - Lint Staged With Husky for Pre-commit Validations</a>**

4. <a href="https://www.youtube.com/watch?v=182_X9iqCqo">Automate Code Formatting with Pre-commit Hooks: Husky, lint-staged & Prettier</a>

5. <a href="https://www.youtube.com/watch?v=8k-b-7rJAeU">Kevin Powell - Formatting your code is a waste of time - use Prettier instead</a>

6. <a href="https://www.youtube.com/watch?v=-qHA6zbOdLc">Git hooks with Husky - No bad commits any more</a>

7. <a href="https://www.youtube.com/watch?v=ChKBhmsnXKI">JavaScript Talks - React Course - Ep 1.1 - Setup Prettier</a>

<br>
<br>
<hr>
<p align="center">&lt;&lt;&lt;&copy;<a href="https://github.com/sandroffdsantos" target="blank">Sandro Santos</a>&gt;&gt;&gt;</p>
