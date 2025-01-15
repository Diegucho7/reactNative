import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
    // return <Redirect href="../(stack)/home" />
    // return <Redirect href="../tabs" />
    // return <Redirect href="../drawer" />
    return <Redirect href="/home" />
}
// return (
//     <SafeAreaView>

//         <View className='mt-10'>
//             <Text className='text-4xl ' style={{ fontFamily: 'WorkSans-Black' }}>Hola Mundo</Text>
//             <Text className='text-3xl font-work-black text-primary ' >Hola Mundo</Text>
//             <Text className='text-2xl font font-work-medium text-secondary'>Hola Mundo</Text>
//             <Text className='text-2xl font font-work-medium text-secondary-100'>Hola Mundo</Text>
//             <Text className='text-2xl font font-work-medium text-secondary-200'>Hola Mundo</Text>
//             <Text className='text-1xl font font-work-light text-tertiary'>Hola Mundo</Text>

//             <Link href="/products">
//                 Productos
//             </Link>

//         </View>

//     </SafeAreaView>
// )


export default index