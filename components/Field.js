/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, TextInput, View } from 'react-native';
import tw from 'twrnc';

const Field = (titleInput) => {
    return (
        <View>
            <Text style={tw`text-white`}> {titleInput} </Text>
            <TextInput
                style={tw`relative z-50 border border-slate-200 rounded-md h-auto max-h-28 w-11/12 ml-4 p-3`}
            />
        </View>
    );
};

export default Field;
