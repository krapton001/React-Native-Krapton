
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="rootLogin" options={{ headerShown: false, }} />
            <Stack.Screen name="login" options={{ title: "Login" }} />
            <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
        </Stack>
    )
}

export default AuthLayout