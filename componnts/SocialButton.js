import React from'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const windowheight = Dimensions.get('window').height

const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    onPress
}) => {
    let bgColor = backgroundColor;
    return(
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: bgColor}]} onPress={onPress} >
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} size={22} color={color} style={styles.icon} />
            </View>
            <View style={styles.btnTxtWrapper}>
            <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

    export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
    marginTop: 50,
    width: '90%',
    height: windowheight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3
    },
    iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
    },
    icon: {
    fontWeight: 'bold'
    },
    btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
    }
})
