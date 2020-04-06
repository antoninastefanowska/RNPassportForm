import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Style from './Style';

class Result extends Component {
    render() {
        return (
            <View style={Style.container}>
                <ScrollView>
                    <View style={Style.elementContainer}>
                        <Text style={Style.label}>Dziękujemy. Formularz został wysłany.</Text>
                    </View>
                    <View style={Style.elementContainer}>
                        <View style={Style.horizontalContainer}>
                            <Text style={Style.label}>Data: </Text>
                            <Text style={Style.smallLabel}>{this.props.route.params.date.toString()}</Text>
                        </View>
                        <View style={Style.horizontalContainer}>
                            <Text style={Style.label}>Imię: </Text>
                            <Text style={Style.smallLabel}>{this.props.route.params.name}</Text>
                        </View>
                        <View style={Style.horizontalContainer}>
                            <Text style={Style.label}>Nazwisko: </Text>
                            <Text style={Style.smallLabel}>{this.props.route.params.surname}</Text>
                        </View>
                        <View style={Style.horizontalContainer}>
                            <Text style={Style.label}>PESEL: </Text>
                            <Text style={Style.smallLabel}>{this.props.route.params.pesel}</Text>
                        </View>
                        <View style={Style.horizontalContainer}>
                            <Text style={Style.label}>Adres e-mail: </Text>
                            <Text style={Style.smallLabel}>{this.props.route.params.email}</Text>
                        </View>
                        <View style={Style.horizontalContainer}>
                            <Text style={Style.label}>Numer telefonu: </Text>
                            <Text style={Style.smallLabel}>{this.props.route.params.phone}</Text>
                        </View>
                        <View style={Style.horizontalContainer}>
                            <Text style={Style.label}>Dzień urodzin: </Text>
                            <Text style={Style.smallLabel}>{this.props.route.params.birthDay}</Text>
                        </View>
                        <View style={Style.horizontalContainer}>
                            <Text style={Style.label}>Miesiąc urodzin: </Text>
                            <Text style={Style.smallLabel}>{this.props.route.params.birthMonth}</Text>
                        </View>
                        <View style={Style.horizontalContainer}>
                            <Text style={Style.label}>Rok urodzin:</Text>
                            <Text style={Style.smallLabel}>{this.props.route.params.birthYear}</Text>
                        </View>
                    </View>
                    <View style={Style.elementContainer}>
                        <View style={Style.verticalContainer}>
                            <Text style={Style.label}>Załącznik: </Text>
                            <Image style={{width: 300, height: 300, margin: 3}} resizeMode="contain" source={{uri: this.props.route.params.file}} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Result;