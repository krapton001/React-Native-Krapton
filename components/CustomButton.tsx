
import React from 'react'
import { StyleText, StyleTouchableOpacity, StyleView } from './StyledComponents'

const CustomButton = ({ title, handleFunction, containerStyles, textStyles }: { title: string, handleFunction: any, containerStyles: String, textStyles: string }) => {
    return (
        <StyleTouchableOpacity onPress={handleFunction} className={`w-64 py-3 rounded-lg my-2 bg-primary ${containerStyles}`}>
            <StyleText className={`text-center text-base font-semibold text-white ${textStyles}`}>
                {title}
            </StyleText>
        </StyleTouchableOpacity>
    )
}

export default CustomButton