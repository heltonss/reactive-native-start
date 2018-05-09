import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Banana } from './Components/Banana'
import LotsOfGreetings from './Components/Greeting'
import BlinkApp from './Components/Blink'
import LotsOfStyle from './Components/LotsOfStyle'
import FixedDimensionsBasic from './Components/FixedDimensionsBasic';
import FixedDimensionsBasicWithFlex from './Components/FixedDimensionsBasicWithFlex';
import LayoutFlexDirectionsBasics from './Components/LayoutFlexDirectionsBasics';
import LayoutJustifyContentBasics from './Components/LayoutJustifyContentBasics';
import InputText from './Components/InputText';
import ButtonBasics from './Components/ButtonBasics';
import Touchables from './Components/Touchables';

export default class App extends React.Component {
    render() {
        return (
            // <View style={styles.container} >
            //     <Banana></Banana>
            //     <Text> Hello World </Text>
            //     <LotsOfGreetings></LotsOfGreetings>
            //     <BlinkApp></BlinkApp>
            //     <LotsOfStyle></LotsOfStyle>
            // </View >
            // <FixedDimensionsBasic></FixedDimensionsBasic>
            // <FixedDimensionsBasicWithFlex></FixedDimensionsBasicWithFlex>
            // <LayoutFlexDirectionsBasics></LayoutFlexDirectionsBasics>
            // <LayoutJustifyContentBasics></LayoutJustifyContentBasics>
            // <InputText></InputText>
            // <ButtonBasics></ButtonBasics>
            <Touchables></Touchables>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});