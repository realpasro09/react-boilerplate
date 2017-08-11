# Welcome to the react boilerplate staging area

## Approach:
NOTE: We do not want to create a new boilerplate. The `create-react-app` tool is awesome and community-supported. No need for yet another front-end boilerplate. HOWEVER, the code generated by the `create-react-app` tool is not a sufficient starting point for Acklen Avenue teams since it lacks several things. Instead of adding those things manually each time we start a new app, the approach we are taking is to create one or more `yeoman` generators to "fill in the gaps" after we run `create-react-app`. Here's an example of what we mean:

```
$ create-react-app my-app
$ cd my-app
$ yo acklen
```

And the result would be the code generated from `create-react-app` plus all the other things we need to satisfy the requirements in https://gist.github.com/bsommardahl/c2d57d51242b2336b7876f20fcf16ac6.

## Contributions
Contributions are welcome. Please base your branches off of `master` but don't plan on merging it back in to `master`. The deltas from your branch will be used to craft the yeoman generator or sub-generators.
