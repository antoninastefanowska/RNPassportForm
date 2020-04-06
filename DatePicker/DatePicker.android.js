import React, { Component } from 'react';
import { View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Style from '../Style'
import { ERROR_MESSAGES } from '../Form'

export default class DatePicker extends Component {
    render() {
        return (
            <View>
                <Button style={Style.input} title="Wybierz datę" onPress={() => this.onPickDateButtonPressed(this.props.context)} />
                {this.props.context.state.isDatePickerVisible && (
                    <DateTimePicker style={Style.input} value={this.props.context.state.date ? this.props.context.state.date : new Date()} onChange={(event, selectedDate) => this.onDatePickerChanged(this.props.context, event, selectedDate)} />
                )}
            </View>
        );
    }

    onPickDateButtonPressed(context) {
        context.updateStateProperty("isDatePickerVisible", true);
    }

    onDatePickerChanged(context, event, selectedDate) {
        let newErrors = context.state.errors;
        if (!context.isDateValid(selectedDate))
            newErrors.date = ERROR_MESSAGES.date;
        else
            newErrors.date = "";

        if (event.type === "set")
            context.updateStateProperties(
                {name: "errors", value: newErrors},
                {name: "date", value: selectedDate}, 
                {name: "isDatePickerVisible", value: false});
        else
            context.updateStateProperties(
                {name: "errors", value: newErrors},
                {name: "isDatePickerVisible", value: false});
    }
}
