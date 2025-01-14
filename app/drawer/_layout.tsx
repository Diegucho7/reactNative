import CustomDrawer from '@/components/shared/CustomDrawer'
import { Ionicons } from '@expo/vector-icons'
import Drawer from 'expo-router/drawer'

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                overlayColor: 'rgba(0, 0, 0, 0.4)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: { backgroundColor: 'white' }, // This is the background color of the drawerC

            }}
        >
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'User',
                    title: 'Usuario',
                    drawerIcon: ({ color, size }) =>

                        <Ionicons size={size} name="person-circle-outline" color={color} />,
                }}
            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Horario',
                    title: 'Horario',
                    drawerIcon: ({ color, size }) => <Ionicons size={size} name="calendar-outline" color={color} />,

                }}
            />
        </Drawer>
    )
}

export default DrawerLayout