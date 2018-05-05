# Intro

This is an updated version of the output of the levelUpTuts tutorial called [Level 2 React Native With Graphql](https://www.leveluptutorials.com/tutorials/level-2-react-native-with-graphql).

Basically is a continuation with the both `expo` and `react-native-scripts` and additional little improvements I wanted to put in practice with this good and complete exercise finished after the tutorial from [Scott Tolinski](http://scotttolinski.com/).

## Development Usage

```bash
npm install install; npm start
```

## Keeping it published

And to publish on expo platform just

```bash
npm install -g exp
```

```bash
exp publish
```

## TODOs

* [x] add .eslint and right .babel
* [x] Fixing lint problems (translating stateless components to pure function, adding PropTypes to props, avoiding duplicated code, removing unused import,refactoring components...) --> from `$ ./node_modules/.bin/eslint ./components`
* [x] Moving the graphcool url to a configurable property so we don't have to publish in the code. Resolved with `react-native-dotenv`
* [ ] If we update the title, we don't have it correctly updated (Fixme)
* [x] fix and align the loading
* [x] fix some styles in smaller IPhone
* [x] have the possibility of hiding the keyboard when clicking out of the Post textarea. Using `keyboardShouldPersistTaps` from `ScrollView`.
* [x] Change color of indicators form IPhone ( network, time, etc)
* [x] Fix the problem with `Nested React Native projects result in TypeError: undefined is not an object (evaluating self.fetch)` published in [react-native official github](https://github.com/facebook/react-native/issues/9599)
* [x] Using RN version of the presets for .babelrc to avoid problems with babel and polyfill and other weird errors
* [x] Using expo `react-native` branch to avoid expo problem
* [ ] Change styles for something like `styled-components`
* [ ] Let's add some animations with something like [pose](https://popmotion.io/pose/learn/native-get-started/)
* [x] Adding icon and splash for the app from expo
* [ ] Show errors, connecting problems, login, create user, etc.
* [ ] Add validation to the login form so we don't allow to register with empty email / password
* [ ] Possibility to be able to delete posts
* [ ] Add unit test
