# About This File

In order to assist our volunteers in understanding [the Continuous Integration file](../.github/workflows/ci.yaml), this README will be providing links and additional insights.

This will not be a complete explanation - you can learn more [here](https://docs.github.com/en/actions/learn-github-actions).

[Continous Integration](https://docs.gitlab.com/ee/ci/introduction/) is what developers call the automatic process of linting (checking code for style errors or errors in general), testing, and other checks BEFORE your branch is merged (integrated). This is done usually through platforms that are running "jobs" for these various tasks.

Here we're using [GitHub Workflows](https://docs.github.com/en/actions/using-workflows) as our CI runner to execute these tasks for us.

# Structure Explanations

You can understand the workflow file [here](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#understanding-the-workflow-file).

## On

Learn more about this [here](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on).

In our case, as of early June 2023, it is being proposed to use [filters](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#using-filters) - specifically on:
- push to **master** (direct merge)
- PR to (current "main branch") **v1-mvp**

We are currently discussing with original volunteer about also adding **master** to the PR section, since people should not be making a direct merge to **master**.

## Jobs:  Build Steps

### Uses

In the `jobs > build > steps` section, there are some `uses` that include:  `actions/checkout@vX` (where X is a number)

This relates to the GitHub Actions marketplace [checkout](https://github.com/marketplace/actions/checkout) action. This was determined from [here](https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions#adding-an-action-from-github-marketplace).

This allows the action to checkout your repo.

### Run

This allows you to [run/execute scripts](https://docs.github.com/en/actions/learn-github-actions/essential-features-of-github-actions#adding-scripts-to-your-workflow) in your workflow runner(s), like lint & formatting checkers.

As of early June 2023, the current proposed CI config file has the following to run:
- [format-check](https://www.npmjs.com/package/format-check) - published a year ago (2022) but unclear README
- [lint-check](https://www.npmjs.com/package/lint-check) - uploaded 2 years ago (2021)

We have proposed instead the following:
- [eslint](https://www.npmjs.com/package/eslint) (over 32M weekly downloads and last updated June 2, 2023)
- [prettier](https://www.npmjs.com/package/prettier) (over 29M weekly downloads with last update April 2023)
