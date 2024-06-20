
import React, { useState } from 'react'
import { StyleFlatList, StyleImage, StyleSafeAreaView, StyleScrollView, StyleText, StyleTouchableOpacity, StyleView } from './StyledComponents'
import { StatusBar } from 'expo-status-bar'
import { icons, images } from '../constants'
import { router } from 'expo-router'

const SplashScreenItem = ({ item }: { item: any }) => {

    const skipSplashScreen = () => {
        router.replace('/rootLogin')
    }

    return (
        <StyleView className='w-screen items-center overflow-hidden'>

            <StyleView className='w-[200vw] h-[600px]  bg-gray-100 rounded-b-full items-center justify-around'>

                <StyleTouchableOpacity onPress={skipSplashScreen} className='w-screen'>
                    <StyleText className='text-primary m-5 text-right font-semibold'>Skip</StyleText>
                </StyleTouchableOpacity>

                <StyleImage source={item.image} resizeMode='contain' className='w-[280px] h-[355px]' />
            </StyleView>

            <StyleView className='mt-16 justify-around items-center space-y-4'>
                <StyleText className='font-semibold text-2xl'>{item.title}</StyleText>
                <StyleText className='font-base text-sm text-black-100'>{item.description}</StyleText>
            </StyleView>

        </StyleView>
    )
}

const SplashScreen = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Your Personal Wellness Companion",
            description: "empowering your journey to optimal well-being",
            image: images.splash
        },
        {
            id: 2,
            title: "Your Personal Wellness Companion",
            description: "empowering your journey to optimal well-being",
            image: images.splash
        },
        {
            id: 3,
            title: "Your Personal Wellness Companion",
            description: "empowering your journey to optimal well-being",
            image: images.splash
        }
    ]

    const skipSplashScreen = () => {
        router.replace('/rootLogin')
    }

    const onViewableItemsChanged = ({ viewableItems }: { viewableItems: any }) => {
        if (slides.length > 0) {
            setCurrentIndex(viewableItems[0].index || 0)
        }
    }

    return (
        <StyleSafeAreaView className=''>
            <StyleView className='space-y-10 justify-center items-center'>
                <StyleFlatList
                    data={slides}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }) => <SplashScreenItem item={item} />}
                    horizontal
                    pagingEnabled
                    onViewableItemsChanged={onViewableItemsChanged}
                />
                <StyleView className='flex-row space-x-5 mx-auto'>
                    {
                        slides.map((_, index) => <StyleView className={` h-2 rounded-full bg-primary justify-center items-center ${index === currentIndex ? "w-6" : "w-2"}`} key={index} />)
                    }
                </StyleView>


                <StyleTouchableOpacity onPress={skipSplashScreen} className='border border-red-400  rounded-full w-12 h-12 justify-center items-center'>
                    <StyleImage source={icons.button} className="w-full h-full rounded-full bg-black-100 "
                        resizeMode="cover" />
                </StyleTouchableOpacity>

            </StyleView>

            <StatusBar style="dark" />
        </StyleSafeAreaView >
    )
}

export default SplashScreen