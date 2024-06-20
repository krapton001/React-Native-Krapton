
import React from 'react'
import { StyleImage, StyleSafeAreaView, StyleScrollView, StyleText, StyleView } from '@/components/StyledComponents'
import { StatusBar } from 'expo-status-bar'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const RootLogin = () => {

    const handleLogin = () => {
        router.push('/login');
    }
    const handleSignup = () => {
        router.push('/signup');
    }

    return (
        <StyleSafeAreaView className='w-screen h-screen'>
            <StyleScrollView contentContainerStyle={{ width: "100%" }}>
                <StyleView className='w-full h-screen justify-center items-center px-4'>
                    {/* Image Logo */}
                    <StyleView className='w-24 h-24'>
                        <StyleImage source={images.logo} className='w-full h-full object-contain' resizeMode='contain' />
                    </StyleView>

                    <StyleView className='gap-y-3 mt-3'>
                        <StyleText className='font-bold text-3xl text-center'>
                            Let's get Started!
                        </StyleText>
                        <StyleText className='text-base text-center text-gray-700'>
                            Login to enjoy the features we've provided, and stay healthy!
                        </StyleText>
                    </StyleView>

                    <StyleView className='mt-16'>
                        <CustomButton title='Login' handleFunction={handleLogin} containerStyles="" textStyles="" />
                        <CustomButton title='Sign Up' handleFunction={handleSignup} containerStyles="bg-white border border-[#000080]" textStyles="text-black" />
                    </StyleView>
                </StyleView>
            </StyleScrollView>

            <StatusBar style="dark" />

        </StyleSafeAreaView>
    )
}

export default RootLogin