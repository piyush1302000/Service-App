import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomButton = ({children, style, onPress}) => {
    return (
    <TouchableOpacity onPress={onPress}>   
    <View style={[styles.container, style]}>
        {children}
    </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    borderRadius: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default CustomButton
