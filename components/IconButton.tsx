import React from 'react';
import { Icon, Button, Text } from 'native-base';

interface IIconButton {
  w?: string,
  h?: string,
  mb?: string,
  mx?: string,
  iconLibrary: any,
  iconName: string,
  onPress: () => any,
  isDisabled?: boolean
  children:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];
}

const IconButton = ({ w, h, mb, mx, iconLibrary, iconName, onPress, isDisabled, children }: IIconButton) => {
  return (<Button
    w={w || "75"} h={h || "75"} mb={mb} mx={mx} onPress={onPress} p="0"
    isDisabled={isDisabled} _text={{ lineHeight: 20 }}>
    <Icon as={iconLibrary} name={iconName} color="white" alignSelf="center" />
    {children}
  </Button >);
}

export default IconButton
