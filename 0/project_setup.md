## Getting the project ready

1. Create a new directory named `awesome-p2p-chat` . 
```bash
    mkdir awesome-p2p-chat
```
2. Inside the directory initialise node. The node might ask details like package name, version, author... you can put any details that you like or just keep the default setup.
```bash
    cd awesome-p2p-chat; npm init
```

3. Instal libp2p (version 0.25.4) implementation for node. From project root directory run
```bash
    npm i libp2p@0.25.4
```

> Make sure you install v0.25.4, the tutorial is incompatible wih the future versions at the moment.


> Tip: After completion of every module (other than 0) you would have something that you can run. To run, enter `node run index.js` from terminal of the root directory of the project.