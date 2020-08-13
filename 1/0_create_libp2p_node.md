Create a basic libp2p node
====================
Welcome to the first programming segment of this tutorial. Here we'll be understanding and configuring a Libp2p node. And before we proceed, we suggest you to go through `0/project_setup.md` & `0/system_setup.md` to make sure things are right in place!

Now lets understand by what a Libp2p node is. Assume that Libp2p is nothing but a mere Skeleton and you can add and customize this skeleton to your demand and use.

The simplest libp2p node that we can create is by specifying just two things ->
- A Transport Layer Protocol to begin with.
- A connection Encryption protocol. (We'll be learning more about it in the upcoming chapters)

The node could be created using the [`Libp2p.create`](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#create) method, which takes a single configuration - `options` - object as its only parameter.  

You can specify all the modules you want by simply using `options.modules` and then pass it as a parameter to the `create` function. This is how simple it is.

```bash
modules: { 
	transport: [TCP]
}
```

 And that's it. That's all you need to create a custom Libp2p node! 

![](https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif)

### Your Turn:
  
- Include the `libp2p-core`, and `utils`.
- Declare an empty `options` map for now. 
- Create an `async main`, and inside main, call the `Libp2p.create` method and pass the empty options map.
-  Call `main`.


<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.1-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.1-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->