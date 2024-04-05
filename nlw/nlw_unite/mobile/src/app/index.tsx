import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { colors } from "@/styles/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { View, Image, StatusBar } from "react-native"

export default function Home() {
    return (
        <View className="bg-green-500 items-center justify-center flex-1 p-8">
            <StatusBar barStyle="light-content" />

            <Image
                source={require("@/assets/logo.png")}
                className="h-16"
                resizeMode="contain"
            />
            <View className="w-full mt-12 gap-3">
                <Input>
                    <MaterialCommunityIcons
                        name="ticket-confirmation-outline"
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Field placeholder="Código do ingresso" />
                </Input>

                <Button
                    title="Acessar credencial"
                />

                <Link
                    href={"/register"}
                    className="text-gray-100 text-base font-bold text-center mt-8"
                >
                    Ainda não possui ingresso?
                </Link>
            </View>
        </View>
    )
}