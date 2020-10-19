# Contributing

Here you'll find some guidelines on the "best practices" for contributing to `jslibp2p-chat-tutorial`.

- Open [issues on our GitHub](https://github.com/shresthagrawal/jslibp2p-chat-tutorial/issues)
- Install node; For Unix-based consoles, open terminal and use the following command to install node - `sudo apt-get install nodejs`. Also install the node package manager, NPM, using the command - `sudo apt-get install npm`.
- Install **docsify** using the command `npm i docsify-cli -g`.
- Fork and clone the [repository](https://github.com/shresthagrawal/jslibp2p-chat-tutorial)
- Open terminal from the location of the cloned repository and from bash, run `docsify serve` to start a live server (local-host) in your browser.
- You can simply contribute by committing and pushing changes to a branch of your original fork and then by creating a Pull Request to the upstream repository.

## Environment Set-up

This repository utilises Prettier/ESlint/Babel with pre-commit hooks (thanks to Husky/Lint-staged) to ensure formatting styles stay standardized when making a contribution.

Before you start on a pull-request, make sure you have `node` and `npm` (or equivalent) installed on your system and then execute the following in your cloned repository:

```
cd jslibp2p-chat-tutorial/
npm i
```

This will ensure your local repository has everything it needs to enforce the basic styling guidelines enforced in the repository!

### Editor Linting

If your chosen editor supports it, enable Prettier/ESlint plugins for smoother integration.
