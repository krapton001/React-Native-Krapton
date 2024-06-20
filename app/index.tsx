
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import "nativewind";
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../constants"
import { StyleImage, StyleScrollView, StyleText, StyleView } from '@/components/StyledComponents';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {

    return (
        // <SafeAreaView>
        //     <StyleScrollView>
        //         <StyleView className='h-screen w-screen justify-center items-center space-y-4'>

        //             <StyleImage source={images.logo} className="w-[114px] h-[118px] " resizeMode='cover' />

        //             <StyleView className='flex-row'>
        //                 <StyleText className="text-4xl font-bold">
        //                     Tekish
        //                 </StyleText>
        //                 <StyleText className="text-4xl font-bold"> Health</StyleText>
        //             </StyleView>

        //         </StyleView>
        //     </StyleScrollView>

        //     <StatusBar backgroundColor="#161622" style="light" />
        // </SafeAreaView>


        <SplashScreen />
    )
}

export default Index