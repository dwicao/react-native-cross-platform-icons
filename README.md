# react-native-cross-platform-icons

A react-native wrapper component that displays the appropriate icon based on the current platform ( Android and iOS )

![demo](https://raw.githubusercontent.com/dwicao/react-native-cross-platform-icons/master/demo.png)

## Running Example
* `git clone https://github.com/dwicao/react-native-cross-platform-icons.git`
* `cd example`
* `npm install`
* `react-native run-android`

## Installation
* `npm install --save react-native-cross-platform-icons`

## Usage
```js
import React, { Component } from 'react';
import { View } from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

class MyExample extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CrossPlatformIcon name="home" size={45} color="black" outline />
                <CrossPlatformIcon name="arrow-back" size={40} color="#BADA55" />
            </View>
        );
    }
}

export default MyExample;
```

## More Icons 
[Check Out Here](http://ionicframework.com/docs/v2/ionicons/) and use it's name into `name` props.

## Props

| Property | Type | isRequired? | Description |
| --- | --- | --- | --- |
| `size` | number | Required | icon size |
| `color` | string | Required | icon color |
| `name` | string | Required | icon name |
| `outline` | boolean | Optional | outline icon style (iOS only) |

## Credits
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
[Nick Wientge](https://medium.com/@nwientge)

## License
MIT


