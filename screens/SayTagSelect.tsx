import * as React from 'react';
import { Heading, Center, Button } from 'native-base';

export default function SayTagSelect({ navigation }: { navigation: any }) {
    return (
        <Center flex={1}>
            <Heading>Select feeling...</Heading>
            <Button onPress={() => navigation.goBack()}>Back</Button>
            <Button onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            })}>Send</Button>
        </Center>
    );
}