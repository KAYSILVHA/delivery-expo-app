import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
    return (
        <View className="bg-red-50 w-full flex flex-row items-center justify-between">
            <Pressable className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                <Ionicons name="menu" size={30} color="#121212"></Ionicons>
            </Pressable>
            <View>
                <Text>Localização</Text>
                <View>
                    <Feather name="map-pin" size={14}/>
                </View>
            </View>
            <Pressable className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                <Feather name="bell" size={30} color="#121212"></Feather>
            </Pressable>
        </View>
    )
}