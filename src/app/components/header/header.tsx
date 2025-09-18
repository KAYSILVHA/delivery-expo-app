import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <Pressable className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                <Ionicons name="menu" size={30} color="#121212"></Ionicons>
            </Pressable>
            <View className="flex flex-col items-center justify-center">
                <Text className="text-sm text-slate-800">Localização</Text>
                <View className="flex flex-row items-center justify-center gap-1">
                    <Feather name="map-pin" size={14} color="#FF0000" />
                    <Text className="text-xl font-bold">Paranavaí</Text>
                </View>
            </View>
            <Pressable className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                <Feather name="bell" size={30} color="#121212"></Feather>
            </Pressable>
        </View>
    )
}