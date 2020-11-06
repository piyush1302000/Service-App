import React from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Input} from 'react-native-elements'

export class InputText extends React.Component{
    state = {isFocused: false}

    onFocusChange = () => {
        this.setState({isFocused: true})
    }

    render(){
        return(
            <View style={[styles.Container, {borderColor: this.state.isFocused? '#0779ef' : '#eee'}]}>
                <Input
                placeholder={this.props.name}
                placeholderTextColor={'#b6b6b6'}
                onFocus={this.onFocusChange}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                keyboardType={this.props.keyboardType}
                secureTextEntry={this.props.pass}
                onChangeText={this.props.onChangeText}
                leftIcon={
                    <Icon
                    name={this.props.icon}
                    size={22}
                    color={this.state.isFocused? '#0779e4' : '#fff'} />
                }
                 />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        width: '90%',
        height: 50,
        borderRadius: 100,
        borderWidth: 3.5,
        marginVertical: 10
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    inputText: {
        color: '#0779e4',
        fontWeight: '300',
        marginLeft: 5
    }
})