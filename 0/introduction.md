# What is libp2p?

> Good question! The one-liner pitch is that libp2p is a modular system of protocols, specifications and libraries that enable the development of peer-to-peer network applications.

![Explain me like I'm five](./assets/explain-me.gif)

In easy words, let's suppose you are at a hardware store and want to buy some tools for your toolbox. Now, you see all the available wrenches in the store.

![Explain me like I'm five](./assets/wrenches.jpg)

For most of us, we only want a few sizes of wrenches. So, we pick only the ones that we want.

Similarly, when we build a networking stack (toolbox) for our application, we only need a few protocols & modules (wrenches). So, we should be able to select what protocols and modules we want to use and use them independently.

Libp2p allows you to do the same for networking, as the hardware store does for the hardware tools, i.e. allowing you to select and use only the tools (protocols & modules) that you want to use.

Now, as everyone needs a different set of wrenches, similarily, every application needs a different "bundle" of protocols & modules.

The best way to understand libp2p is to just understand what its each module does which we would learn in more dept in every chapter.

Though The above defination is enough, the best blog that answers this question in more dept is ["What is libp2p?"](https://simpleaswater.com/what-is-libp2p/) by ["Simple As Water"](https://simpleaswater.com/)

# Some Tips before you start

The repository of libp2p is continously changing, which means there can arrise following type of discrepencies:

- The updated version no more supports the api explained in the workshop, in which case you must create an issue [here](https://github.com/shresthagrawal/jslibp2p-chat-tutorial/issues).
- You are refering to a wrong version of the documentation. Please check the exact version of the documnetation that you are using. You can find the your version of library in your `package.json`
- You might be using the right version and the right documnetation but still things break. There is a high possibility that the documnetation from the official repo is not updated in that case you must create an issue in [js-libp2p issues](https://github.com/libp2p/js-libp2p/)
- The master branch might contain changes in the documentation that is not yet released. It is recommended to check the latest documnetation at [npm documentation](https://www.npmjs.com/package/libp2p) of js-libp2p

> This tutorial uses js-libp2p v0.25.4 where as the latest is v0.27.3.
> In future the tutorial would switch to the latest versions.
