# react-native-state-viewer
This is a debugger tool designed for debug react native apps. But It can be used to debug State of any react app.

# What exactly is this?

Check the following image. You will get idea.

# How to use this project

## Start State Viewer
```
git clone https://github.com/nsisodiya/react-native-state-viewer.git
cd react-native-state-viewer
yarn install
cd client
yarn install
cd ..
yarn start
```

Now open `http://localhost:12473/`
You can now send State (basically JSON) from anywhere.
## Post State from command line

Open terminal and run following command.
```
curl -H "Content-Type: application/json" -X POST -d '{"count":"30","city":"London"}' http://localhost:12473/stateUpdate
curl -H "Content-Type: application/json" -X POST -d '{"count":"40","city":"Delhi"}' http://localhost:12473/stateUpdate
```

## Post State from ReactNative App

Copy paste following code.
Create a file called postStateUpdate.js
```
export default function postStateUpdate(target, name, descriptor) {
  const oldFunction = descriptor.value;
  descriptor.value = function propsInjectorFunction() {
    try {
      fetch("http://192.168.1.3:12473/stateUpdate", {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
          state: this.state
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        return response.json();
      });
    } catch (err) {
      /*No need to do anything*/
    }

    return oldFunction.bind(this)(this.props);
  };
  return descriptor;
}
```

Now go to react component and add following decorator.

```
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import postStateUpdate from './postStateUpdate';

class HelloWorldApp extends Component {
  state = {
    lang: "JavaScript",
    message: "Hello World",
    counter: 10
  };
  render() {
    @postStateUpdate
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```