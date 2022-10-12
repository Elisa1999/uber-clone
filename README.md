# uber-clone
Clone Uber in React Native



##Issues I encountered during the project: 

### 1. not found for architecture x86_64
solution: use `arch -x86_64 yarn ios` instead of `yarn ios` to start the simulator

### 2. Check the render method of `DrawerNavigator`
solution: forgot to install react-native-screens
1. `yarn add react-native-screens`
2. go into ios folder and run `pod install` 
3. restart the project by `killall node -9` and `yarn start --reset-cache`
