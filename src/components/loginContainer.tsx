import { globalStyles } from "@/styles/global";
import { ReactNode } from "react";
import { View } from "react-native";

type LoginContainerProps = {
  children: ReactNode;
};

export default function LoginContainer({ children }: LoginContainerProps) {
  return (
    <View style={globalStyles.screenContainer}>
      <View
        className="flex-1 items-center justify-center"
        style={globalStyles.container}
      >
        {children}
      </View>
    </View>
  );
}
