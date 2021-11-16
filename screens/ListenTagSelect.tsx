import React, { useState } from 'react';
import { Checkbox, Center, Container, Button, HStack, FormControl, WarningOutlineIcon } from 'native-base';

export default function ListenTagSelect({ navigation }: { navigation: any }) {
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const onNextPressed = () => {
    if (tags.length > 0) {
      navigation.navigate('Listen', tags);
    } else {
      setError(true);
    }
  };

  return (
    <Center flex={1}>
      <Container>
        <FormControl isInvalid={error}>
          <FormControl.Label
            _text={{
              textAlign: "center",
              fontSize: "lg",
              bold: true,
            }}>
            What kind of bottle would you like to open?
          </FormControl.Label>
          <Checkbox.Group
            colorScheme="green"
            accessibilityLabel="pick an item"
            onChange={(values) => {
              setTags(values || []);
              if (values.length > 0)
                setError(false);
            }}
          >
            <Checkbox value="Happy" my="1">
              Happy
            </Checkbox>
            <Checkbox value="Silly" my="1">
              Silly
            </Checkbox>
            <Checkbox value="Bored" my="1">
              Bored
            </Checkbox>
            <Checkbox value="Angry" my="1">
              Angry
            </Checkbox>
            <Checkbox value="Sad" my="1">
              Sad
            </Checkbox>
            <Checkbox value="Anxious" my="1">
              Anxious
            </Checkbox>
            <Checkbox value="Scared" my="1">
              Scared
            </Checkbox>
          </Checkbox.Group>
          {error && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            You must select at least one tag.
          </FormControl.ErrorMessage>}
        </FormControl>
      </Container>
      <HStack w="100%" space={3} alignItems="center" justifyContent="space-around" >
        <Button onPress={() => navigation.goBack()}>Back</Button>
        <Button onPress={onNextPressed}>Next</Button>
      </HStack>
    </Center>
  );
}