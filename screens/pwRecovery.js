/* eslint-disable prettier/prettier */

import React from 'react';
// , { useState, useEffect }

import NetflixLogo from '../static/images/NetflixLogo.svg';

import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import tw from 'twrnc';

const Signin = ({ navigation }) => {
    return (
        <SafeAreaView style={tw`bg-black flex-1`}>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}>
                <KeyboardAvoidingView
                    style={tw`flex-1 mb-[50]`}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={tw`flex-1 items-center justify-center mb-[-150]`}>
                        <NetflixLogo widht={90} />
                    </View>
                    <View style={tw`flex-1 items-center justify-center px-12`}>
                        <Text style={tw`text-white ml-1 mb-8 text-lg self-start`}>
                            Recuperar contraseña </Text>
                        <TextInput
                            style={tw`text-white bg-gray-700/20 rounded border border-b-slate-200 h-12 px-4 font-medium mb-8 w-full`}
                            placeholder="Email"
                            // autoCorrect={false}
                            // autoComplete="off"
                            // autoCapitalize={'none'}
                            placeholderTextColor={tw.color('text-gray-500')}
                            keyboardType={'email-address'}
                        />
                        <Pressable
                            onPress={() => navigation.navigate('Signup')}
                            style={tw`rounded w-11/12 h-12 mb-4 bg-red-600 flex justify-center items-center`}>
                            <Text style={tw`text-white uppercase font-bold`}>
                                Acceder
                            </Text>
                        </Pressable>
                        <Pressable
                        onPress={() => navigation.goBack()} style={tw`flex flex-row mb-5`}>
                            <Text style={tw`text-gray-500 text-xs`}> Volver </Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default Signin;

