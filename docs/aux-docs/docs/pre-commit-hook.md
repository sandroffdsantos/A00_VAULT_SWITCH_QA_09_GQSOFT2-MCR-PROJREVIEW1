

#Install the lint-staged module od NodeJs as a dev. dependency
CLI: npm install --save-dev lint-staged

#Install the hodule module od NodeJs as a dev. dependency
CLI: npm install --save-dev husky


# Add a .husky/pre-commit file to set the "pre-commit Hook" with a shell script that will trigger the linters included in the lint-staged script to be added in the "package.json".
CLI: npx husky-init

The following script should appear in the "package.json" file:

{
  "scripts": {
    "prepare": "husky install"
  },
}

# Add to the "package.json" file the following scripts:
// This will execute the "lint-staged" commands when triggered by the husky pre-commit hook, upon a commit of the staged files (git add .)

{
  "scripts": {
    "precommit": "lint-staged",
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run precommit"
    }
  },
  "lint-staged": {
    "src/**/*.{ts,tsx,js,jsx,css,scss,html}": [
      "prettier --write"
    ]
  },
}



# Add to the "package.json" file the following property:
// This will set the "linters" to be executed and the directories/ file types to be included on the pre-commit hook.

{
  },
  "lint-staged": {
    "src/**/*.{ts,tsx,js,jsx,css,scss,html}": [
      "prettier --write"
    ]
  },
}

# Testing a Pre-commit Hook with Prettier

CLI: git add .
CLI git commit - "Pre-commit Hook trial"


