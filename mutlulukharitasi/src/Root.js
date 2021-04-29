import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Form from './components/Form';

export default class Root extends Component {

    render() {
        return (
            <Router>
                <Stack key="Root">
                    <Scene key="Form" component={Form} hideNavBar initial />
                </Stack>

            </Router>
        );
    }
}
