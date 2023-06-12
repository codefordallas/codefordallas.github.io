# About

This file is to help our newer volunteers understand what was implemented and pinpoint appropriate & related resources.

Automated linting & prettier formatting was first introduced with [#49](https://github.com/codefordallas/codefordallas.github.io/pull/49) and has some information there, which will be pulled in here. Additional issues and PRs are [#54](https://github.com/codefordallas/codefordallas.github.io/issues/54), [#57](https://github.com/codefordallas/codefordallas.github.io/pull/57), and [#59](https://github.com/codefordallas/codefordallas.github.io/issues/59).

This specific update is related to [#58](https://github.com/codefordallas/codefordallas.github.io/issues/58).

## Adding The Packages

As per [here](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file) you would run `npm install <package-name> --save-dev`to save them as [`devDependencies`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#devdependencies) in your `package.json` file.

Or in our instance, simply run `npm install` - it is already in our `package.json` file.

1. [install & configure prettier](https://prettier.io/docs/en/install.html)

## Changes To `package.json` File

4 new [**scripts**](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts) added:
- [lint](https://xpepermint.gitbooks.io/nodejs-cheatsheet/content/code-linting.html) will rewrite all processed files (js and jsx) with eslint
- [lint-check](https://xpepermint.gitbooks.io/nodejs-cheatsheet/content/code-linting.html)
- [format](https://prettier.io/docs/en/cli.html#--write) will rewrite all processed files in place (like in our **lint** script)
- [format-check](https://prettier.io/docs/en/cli.html#--check) will output a human-friendly message and a list of unformatted files, if any

Additional [`devDependencies`](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file) (dependencies not necessary to bundle with PROD)) were added - see more about these below. Here are the new ones:
- eslint
- eslint-config-prettier
- eslint-plugin-react
- prettier

# Explanations

Related issue is [#59](https://github.com/codefordallas/codefordallas.github.io/issues/59) for adding Prettier formatting and ESlinting.

## Prettier

[Prettier](https://prettier.io/) is a code formatter used by the javascript community to automatically enforce one code style so there is no arguing about "spaces/tabs", single vs double quotes, etc. It leaves what we call "bike shedding" (arguing about dumb pointless things) at the door.

The `.prettierignore` file tells **Prettier** what NOT to lint for styling as per [here](https://prettier.io/docs/en/ignore.html).

The `.prettierrc.json` is for additional configurations as per [here](https://prettier.io/docs/en/configuration.html).

## ESLint

[Eslint](https://eslint.org/) is used to check code for common errors and automatically correct them. This keeps it easy for reviewers to focus on more complex issues and helps you quickly fix issues.

We're using the React extension here, which is a common extension for react apps.

The `.eslintrc.js` file is our [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files).

Since we are using the config file itself, the default `esLintConfig` section in the `package.json` file was removed. It originally used react-app and Jest:

```
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }
```

**NOTE:** you can disable lint checks by following [this](https://eslint.org/docs/latest/use/configure/rules#disabling-rules).

### Variable Explanations

The `env` variable is used to [specify environments](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments):
- implements [es2021](https://eslint.org/docs/latest/rules/logical-assignment-operators), which includes operator assignments
- tells linter that it will be run in the browser

The `extends` variable allows us to [extend the config file](https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files). We have:
- [eslint:recommended](https://eslint.org/docs/latest/use/configure/configuration-files#using-eslintrecommended) for what the linter suggests
- a [plugin](https://eslint.org/docs/latest/use/configure/configuration-files#using-a-configuration-from-a-plugin) for React recommendations ... more on plugin configuration can be found [here](https://eslint.org/docs/latest/use/configure/plugins)
- prettier

The `parserOptions` allows us to configure a [custom parser](https://eslint.org/docs/latest/use/configure/parser). We currently have ours set to latest `ecmaVersion` and using [module syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) for `sourceType`.

# Future Recommendations

May want to consider integrating [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) or even [prettier-eslint](https://github.com/prettier/prettier-eslint).

Another consideration is Jest for React. It is listed as a [possible environment](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments). - Discussion for another time.

# Additional Resources

- [npm, ESLint, & Prettier](https://btholt.github.io/complete-intro-to-react-v5/eslint-prettier) Intro to React Info
