
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="RootLogin" options={{ headerShown: false, }} />
            <Stack.Screen name="Login" options={{ title: "Login" }} />
            <Stack.Screen name="Signup" options={{ title: "Sign Up" }} />
        </Stack>
    )
}

export default AuthLayout