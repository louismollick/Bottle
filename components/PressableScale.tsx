import React from "react"
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native"

type TouchableButtonProps = PressableProps & {
    scale?: number;
    style?: StyleProp<ViewStyle>;
}

const PressableScale: React.FC<TouchableButtonProps> = ({ scale, style, children, ...otherProps }) => {
    return (
        <Pressable style={({ pressed }) => [style, { transform: [{ scale: pressed ? (scale ?? 0.5) : 1 }] }]} {...otherProps}>
            {children}
        </Pressable>
    )
}

export default PressableScale;