## Getting the project ready

1. Create a new directory named `awesome-p2p-chat`. You can do that by simply opening terminal in a desired location and entering the following command:

```bash
    mkdir awesome-p2p-chat
```

2. Inside the directory, you need to _initialize node_. Node might ask you details like the package name, version, author, etc. as per your wish or simply keep the defaults. For initializing, enter into the newly created directory by using the command `cd awesome-p2p-chat`. Then run the following command for initialization:

```bash
    npm init
```

3. Install **libp2p** (version 0.27.6) implementation for node. For the same, run the command:

```bash
    npm i libp2p@0.27.6
```

> Make sure you install **v0.27.6**, this tutorial is incompatible with the future versions at the moment.

> Cool Tip: After you complete every module (other than 0), you would have something that you can run. For that, you can simply enter `node run index.js` from terminal of the root directory of the project. But that's for later. Let's Jump into the next module and start the magic!
