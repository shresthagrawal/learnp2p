## Getting your system ready
> The complete tutorial could be practiced online in the browser with no local setup, as the tutorial provides an interactive code editor though it is highly recommended to run the code directly from the system. 

### To use the online editor
If you don't want to go through with the process of local installation, you can directly skip to [Chapter 1](1/introduction.md) to continue with the online editor.

### To install everything directly in the system:

1. It is highly recommended to use a good text editor. Some of the most used are [Sublime Text](https://www.sublimetext.com/3), [Visual Studio Code](https://visualstudio.microsoft.com/), [Vim](https://www.vim.org/), [Atom](https://atom.io/)   etc.  

2. You must have access to a terminal in your system. For Windows users, the **node.js terminal** should work.

3. As the tutorial uses the **node.js** implementation of libp2p, you need to install node.js.

    - If you using `MacOS`, use the following command:  
```bash
brew install node
```
    - If you are using `Ubuntu`, or any similar Linux distribution, use the following command to install node:
```bash
sudo apt-get install nodejs
```
	- You can verify if node is correctly installed using one of the following commands: 
```bash
node -v | node -version
```

	- It is also recommended to install the Node Package Manager (npm), which could simply be installed using the following command:
```bash
sudo apt-get install npm
```
	- Similarly, you can verify if that was installed correctly using the command:
```bash
npm -v 
```
    - For other operating systems, please check the [official download page](https://nodejs.org/en/download/) of [node.js](https://nodejs.org/en/).
