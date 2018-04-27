# Intro

This is an updated version of the tutorial output Journal from levelUpTuts.

Basically is a continuation with the both `expo` and react-native-scripts` and additional little improvements.

## Usage

`npm install install; npm start`

```bash
npm install -g exp
```

## TODOs

* [x] add .eslint and right .babel
* [ ] Fixing lint problems (translating stateless components to pure function, adding PropTypes to props, avoiding duplicated code, removing unused import,refactoring components...) --> from `$ ./node_modules/.bin/eslint ./components`
* [ ] Moving the graphcool url to a configurable property so we don't have to publish in the code.
* [x] fix and align the loading
* [ ] fix some styles in smaller IPhone
* [ ] have the possibility of hiding the keyboard when clicking out of the Post textarea
* [ ] Change color of indicators form IPhone ( network, time, etc)
* [x] Fix the problem with `Nested React Native projects result in TypeError: undefined is not an object (evaluating self.fetch)` published in [react-native official github](https://github.com/facebook/react-native/issues/9599)
* [x] Using expo `react-native` branch to avoid expo problem
* [ ] Change styles for something like `styled-components`
* [ ] Let's add some animations with something like [pose](https://popmotion.io/pose/learn/native-get-started/)
* [x] Adding icon and splash for the app from expo
* [ ] Show errors, connecting problems, login, create user, etc.
* [ ] Add validation to the login form so we don't allow to register with empty email / password
* [ ] Add unit test
