import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Style from '../Style';
import { ERROR_MESSAGES } from '../Form'

export default class DatePicker extends Component {
    render() {
        return (
            <View>
                <Text style={Style.label}>Data</Text>
                <input style={{padding: 3}} type="date" value={this.props.context.state.date ? this.props.context.state.date : new Date()} onChange={(event) => this.onDatePickerChanged(this.props.context, event)} />
            </View> 
        );
    }

    onDatePickerChanged(context, event) {
        let value = event.target.value;
        let newErrors = context.state.errors;
        if (!context.isDateValid(value))
            newErrors.date = ERROR_MESSAGES.date;
        else
            newErrors.date = "";
        context.updateStateProperties(
            {name: "errors", value: newErrors},
            {name: "date", value: value});
    }
}