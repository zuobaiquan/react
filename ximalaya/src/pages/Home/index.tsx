import React from 'react'
import {
    SafeAreaView,
    View,
    Text
} from 'react-native'
import Config from 'react-native-config'
import { Carousel } from './Carousel'
class App extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <Text>app config1 {Config.API_URL}</Text>
                <Carousel />
            </SafeAreaView>
        )
    }
}
export default App