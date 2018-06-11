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
* [x] If we update the title, we don't have it correctly updated, apparently it was cause by problems with [`goBack` issues with the 1.x react-navigation](https://github.com/react-navigation/react-navigation/issues/2454), they fixed with the new [react-navigation-2.0-rc](https://reactnavigation.org/blog/2018/04/06/react-navigation-2.0-rc.html#breaking-changes), so updating and changing a bit the goBack to a navigate, do the work
* [x] fix and align the loading
* [x] fix some styles in smaller IPhone
* [x] have the possibility of hiding the keyboard when clicking out of the Post textarea. Using `keyboardShouldPersistTaps` from `ScrollView`.
* [x] Change color of indicators form IPhone ( network, time, etc)
* [x] Fix the problem with `Nested React Native projects result in TypeError: undefined is not an object (evaluating self.fetch)` published in [react-native official github](https://github.com/facebook/react-native/issues/9599)
* [x] Using RN version of the presets for .babelrc to avoid problems with babel and polyfill and other weird errors
* [x] Using expo `react-native` branch to avoid expo problem
* [x] Adding icon and splash for the app from expo
* [x] Show errors, connecting problems, login, create user, etc.
* [x] Add validation to the login form so we don't allow to register with empty email / password
* [x] Moving create / update post to async / await API style.
* [ ] Possibility to be able to delete posts
* [ ] Change styles for something like `styled-components`
* [ ] Let's add some animations with something like [pose](https://popmotion.io/pose/learn/native-get-started/)
* [ ] Add unit test specific for graphql
