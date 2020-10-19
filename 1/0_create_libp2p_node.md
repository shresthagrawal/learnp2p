# Create a basic libp2p node

Welcome to the first handson segment of the workshop. Here we'll be understanding and configuring a Libp2p node. Before we proceed, we suggest you to go through `0/project_setup.md` & `0/system_setup.md` to make sure
your system is ready!

A Libp2p is nothing but a mere skeleton and you can customize this skeleton to your demand and use. The simplest libp2p node that we can create is by specifying just two things:

- A method of communicate between nodes => Transport Layer Protocol
- A method to encrypt communication => Encryption protocol. (We'll be learning more about it in the upcoming chapters)

The node could be created using the [`Libp2p.create`](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#create) method, which takes a single parameter `options` . You can specify all the modules you want by simply adding it to `options.modules`.

![](https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif)

### Your Turn:

- Include the `libp2p-core`.
- Declare an empty `options` object for now.
- Create an `async main`, and inside main, declare a `lib2p` node object using the `Libp2p.create` method and pass the `options`.
- Call `main`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.1-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.1-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
