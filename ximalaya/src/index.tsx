import React from 'react'
import { 
    SafeAreaView,
    View,
    Text
} from 'react-native'
import Config from 'react-native-config';
class App extends React.Component{
    render(){
        return (
            <SafeAreaView>
                <Text>app config {Config.API_URL}</Text>
            </SafeAreaView>
        )
    }
}
export default App