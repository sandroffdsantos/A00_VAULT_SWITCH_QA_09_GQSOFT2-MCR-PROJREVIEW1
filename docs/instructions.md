<h1 align="center">Project Coding Standards Guide Book</h1>

<h4 align="center">

<img src="https://portotechhub.com/wp-content/uploads/2022/12/SWitCH_QA.png" alt="SwitchQA" title="SwitchQA" width="600px">

</h4>

# Project Coding Standards Guide Book

## **Overview:**

*  This document is intended to be a guide for the development of the project, in order to ensure that the code is written in a uniform way, with the same standards and conventions, so that it is easier to read and understand by all members of the group.

* This documents gathers the coding standards and industry good practices that the group has agreed upon in terms of code formating, code documenting and processess, that will be used throughout the development of the project.

<br>

## 1. Dev. Dependencies / VS Extensions / Node Js Modules:

* **Prettier - Opinioned Code Formatter**

>* Version: 2.6.0

>* <a href="https://prettier.io/">Prettier Home Page</a>

<br>

* **TypeDoc**

>* Version: 0.21.10

>* <a href="https://typedoc.org/">TypeDoc Home Page</a>

<br>

* **Husky**

>* Version: 8.0.0

>* <a href="https://typedoc.org/">TypeDoc Home Page</a>

<br>

* **Lint-Staged**

>* Version: 12.0.0

>* <a href="https://typedoc.org/">TypeDoc Home Page</a>

<br>

## 2. Code Styling Formating:

* **Prettier** has been set as the default code formatter for this project via **"settings.json"** file.

````json
{
    "editor.formatOnSave": true,
    "editor.defaultFoldingRangeProvider": "esbenp.prettier-vscode",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
}
````

<br>

### 2.1 Prettier fomat on save:

* Prettier has been set to run on save for all html .ts & .tsx files in the project via prettier config file **"prettierrc"**.

````json
{
  "trailingComma": "none",
    "semi": true,
  "singleQuote": false,
  "printWidth": 80,
  "overrides": [
    {
      "files": "*.json",
      "options": {
        "semi": false,
        "tabWidth": 2
      }
    },
    {
      "files": ["*.html", "src/*.ts", "public/*.ts", "public/*.tsx"],
      "options": { "tabWidth": 4 }
    }
  ]
}
````

<br>

### 2.2 Running Prettier on the Project via "Pre-Commit Hook:"

* Prettier has already been configured through a pre-commit hook (Prettier + Husky + Lint-Staged) to run prettier in all files staged for commit.

* Included files to run prettier (limited to project "src/*" & "public/*" folders and .ts & .tsx files only):

```json
{
 },
  "lint-staged": {
    "src/**/*.ts": [
      "prettier --write"
    ],
    "public/**/*.tsx": [
      "prettier --write"
    ]
  },
}
```

<br>

## 3. Code Documentation:

### 3.1 Code Documentation via **TypeDoc**:

* **TypeDoc** set as the default code documentation generator for this project.

* Required to run Typedocs for the entirety of the project repository at the end of each Sprint.

>* Run **TypeDoc** the following command in the project root folder:

```bash
npx typedoc
```

**Note:**

* All documentation generated will be available on the "TypeDoc" directory of the project root folder.

<br>

### 3.2 Naming Convention

* Naming convention Adopted (for  classes, objects, interfaces, methods, functions & variables):

>* Naming convention adopted for all "New instances" developed must be alligned with the funtionality being developed

>* cammelCase syntax adopted for variables, functions & methods

>* Upper case convention adopted for classes, objects, interfaces
	
<br>

### 3.3 Code Documenting

### 3.3.1 General Files:

* Any new files created in the project must have the following header to clarify the purpose of the file:

````typescript
/**
 *
 * @remarks
 * This file is intended to be used for <purpose of the file>
 */
````

<br>

* Any algorythms developed must be documented in a way to understand the input parameters, the output and the purpose of the algorythm:

````typescript
/**
 * 
 * @remarks
 * This class represents the test credentials for the registration/ login of a Member("username" , "email" , "password").
 */
export class ProfileCredentials {
  public username: string;
  public email: string;
  public password: string;

  /**
   * Creates a new instance of the ProfileCredentials class.
   * @param username - The username for the profile.
   * @param email - The email address for the profile.
   * @param password - The password for the profile.
   */
  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  /**
   * Returns the credentials of the admin user.
   * @returns A new instance of the ProfileCredentials class with the admin user's credentials.
   */
  adminUser(): ProfileCredentials {
    return new ProfileCredentials(
      "adminuser",
      "adminUser@gmail.com",
      "adminuser"
    );
  }

  /**
   * Returns the credentials of user number 1.
   * @returns A new instance of the ProfileCredentials class with user number 1's credentials.
   */
  user1(): ProfileCredentials {
    return new ProfileCredentials("user-number1", "user1@gmail.com", "user1");
  }

  /**
   * Returns the credentials of user number 2.
   * @returns A new instance of the ProfileCredentials class with user number 2's credentials.
   */
  user2(): ProfileCredentials {
    return new ProfileCredentials("user-number2", "user2@gmail.com", "user2");
  }
}
````


<br>

### 3.3.2 Test Files

* Any Test Suits must be acompanied by the following header:

````typescript

/******
* @UserStory USXXX
* @Test TCXXX -<Title of the Test>
* @UsDepndency USXXX / USYYY / USZZZ 
*
******/
````

* Inclusion of the AAA (Arrange, Act, Assert) pattern for all Test Cases

<br>

## 4. Code Review:

* **Compulsory the creation of at least 1 new branch for each new functionality to be developed**

* Compulsory Code Review for all Pull Requests (PR's) to the "main" branch

* Code Reviewers to be assigned per each **sub-team** alternately to each PR


<br>

## **Other Sources of Informations:**

* ## [**GitHub Branch Creation CLI**](../github/github.md)

* ## [**Prettier Installation Set-up**](../prettier/prettier.md)

<br>
<br>
<p align="center">&lt;&lt;&lt;&copy;<a href="https://github.com/Departamento-de-Engenharia-Informatica/switch-qa-23-project-switch-qa-23-3" target="blank">Grupo 3</a>&gt;&gt;&gt;</p>