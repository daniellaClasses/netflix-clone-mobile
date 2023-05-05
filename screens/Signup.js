/* eslint-disable prettier/prettier */

import React from 'react';
//, { useState, useEffect }

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

const Signup = ({ navigation }) => {
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
                            Registrarse </Text>
                        <TextInput
                            style={tw`text-white bg-gray-700/20 rounded border border-b-slate-200 h-12 px-4 font-medium mb-8 w-full`}
                            placeholder="Email"
                            // autoCorrect={false}
                            // autoComplete="off"
                            // autoCapitalize={'none'}
                            placeholderTextColor={tw.color('text-gray-500')}
                            keyboardType={'email-address'}
                        />
                        <TextInput
                            style={tw`text-white bg-gray-700/20 rounded border border-b-slate-200 h-12 px-4 font-medium mb-8 w-full`}
                            placeholder="Contraseña"
                            placeholderTextColor={tw.color('text-gray-500')}
                        />
                        <Pressable
                            style={tw`rounded w-11/12 h-12 mb-4 bg-red-600 flex justify-center items-center`}>
                            <Text style={tw`text-white uppercase font-bold`}>
                                Registrarme
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('SignIn')} style={tw`flex flex-row mb-5`}>
                            <Text style={tw`text-white text-xs`}> ¿Ya tienes una cuenta? </Text>
                            <Text style={tw`text-white text-xs font-bold focu`}> Accede </Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default Signup;



// import React, { useState, useEffect } from 'react';
// import { EyeIcon } from 'react-native-heroicons/outline';
// import { EyeSlashIcon } from 'react-native-heroicons/outline';
// import NetflixLogo from '../static/images/NetflixLogo.svg';

// import {
//     Keyboard,
//     KeyboardAvoidingView,
//     Platform,
//     Pressable,
//     SafeAreaView,
//     Text,
//     TextInput,
//     TouchableWithoutFeedback,
//     View,
// } from 'react-native';

// import tw from 'twrnc';

// const Signin = ({ navigation }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isValidEmail, seitISValidEmail] = useState(false);
//     const [isValidPassword, seitISValidPassword] = useState(false);
//     const [IsPasswordVisible, setIsPasswordVisible] = useState(false);

//     useEffect(() => {
//         debounce(emailValidation());
//         console.log('Email', email, isValidEmail);
//     }, [email]);

//     useEffect(() => {
//         debounce(passwordValidation());
//         console.log('Password', password, isValidPassword);
//     }, [password]);

//     const emailValidation = () => {
//         // eslint-disable-next-line no-useless-escape
//         const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//         if (!email || emailRegex.test(email) === false) {
//             seitISValidEmail(false);
//             return false;
//         }

//         seitISValidEmail(true);
//         return (true);
//     };


//     // Este tipo de funcione suele ir en utils
//     const debounce = fn => {
//         let id = null;

//         return (...args) => {
//             if (id) {
//                 clearTimeout(id);
//             }
//             id = setTimeout(() => {
//                 fn(...args);
//                 id = null;
//             }, 300);
//         };
//     };

//     const passwordValidation = () => {
//         // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i;
//         // const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/i;
//         const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
//         if (!email || passwordRegex.test(email) === false) {
//             seitISValidPassword(false);
//             return false;
//         }
//         seitISValidPassword(true);
//         return (true);
//     };

//     return (
//         <SafeAreaView style={tw`bg-black flex-1`}>
//             <TouchableWithoutFeedback
//                 onPress={() => {
//                     Keyboard.dismiss();
//                 }}>
//                 <KeyboardAvoidingView
//                     style={tw`flex-1 mb-[50]`}
//                     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//                     <View style={tw`flex-1 items-center justify-center mb-[-150]`}>
//                         <NetflixLogo widht={90} />
//                     </View>
//                     <View style={tw`flex-1 items-center justify-center px-12`}>
//                         <Text style={tw`text-white ml-1 mb-8 text-lg self-start font-bold`}>
//                             Inicia sesión </Text>
//                         <TextInput
//                             style={tw`text-white bg-gray-700/20 rounded border border-b-slate-200 h-12 px-4 font-medium mb-8 w-full ${(!isValidEmail && email !== '') && 'border border-red-500'
//                                 }`}
//                             placeholder="Email"
//                             // autoCorrect={false}
//                             // autoComplete="off"
//                             // autoCapitalize={'none'}
//                             value={email}
//                             onChangeText={textInput => {
//                                 setEmail(textInput);
//                             }}
//                             placeholderTextColor={tw.color('text-gray-500')}
//                             keyboardType={'email-address'}
//                         />
//                         <Text
//                             style={tw`text-red-600 self-start mb-4 mt-[-20]
//                         ${(isValidEmail || email === '') && 'opacity-0'}`}>
//                             Email incorrecto </Text>
//                         <View style={tw`relative flex flex-row`}>
//                             <Pressable
//                                 style={tw` top-3 right-0 absolute z-10`}
//                                 onPress={() => {
//                                     setIsPasswordVisible(!IsPasswordVisible);
//                                 }}>
//                                 {!IsPasswordVisible ? (
//                                     <EyeSlashIcon style={tw`text-white/40`} />

//                                 ) : (
//                                     <EyeIcon style={tw`text-white/40`} />
//                                 )
//                                 }
//                             </Pressable>

//                             <TextInput
//                                 style={tw`text-white bg-gray-700/20 rounded border border-b-slate-200 h-12 px-4 font-medium mb-8 w-full
//                                 ${!isValidPassword && password}
//                                 `}
//                                 placeholder="Contraseña"
//                                 value={password}
//                                 onChangeText={passwordInput => {
//                                     setPassword(passwordInput);
//                                 }}
//                                 placeholderTextColor={tw.color('text-gray-500')}
//                                 secureTextEntry={!IsPasswordVisible}
//                             />
//                         </View>
//                         <Text
//                             style={tw`text-red-600 self-start mb-4 mt-[-20] ${(isValidEmail || password === '') && 'opacity-0'}`}>
//                             Contraseña incorrecta
//                         </Text>
//                         <Pressable onPress={() => navigation.navigate('pwRecovery')}>
//                             <Text style={tw`text-white text-xs font-bold mb-12 flex self-end`}> ¿Olvidaste tu contraseña? </Text>
//                         </Pressable>
//                         <Pressable
//                             style={tw`rounded w-11/12 h-12 mb-4 bg-red-600 flex justify-center items-center`}>
//                             <Text style={tw`text-white uppercase font-bold`}>
//                                 Acceder
//                             </Text>
//                         </Pressable>
//                         <Pressable onPress={() => navigation.navigate('SignUp')} style={tw`flex flex-row mb-5`}>
//                             <Text style={tw`text-white text-xs`}> ¿No tienes una cuenta? </Text>
//                             <Text style={tw`text-white text-xs font-bold`}> Regístrate </Text>
//                         </Pressable>
//                     </View>
//                 </KeyboardAvoidingView>
//             </TouchableWithoutFeedback>
//         </SafeAreaView>
//     );
// };

// export default Signin;
