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
```
```