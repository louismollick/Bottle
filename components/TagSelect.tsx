import React, { useState } from 'react'
import { Heading, FormControl, Checkbox, WarningOutlineIcon, ScrollView, Box } from 'native-base';

interface TagSelectProps {
    setTags: (tags: string[]) => void, 
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
}

const TagSelect = ({ setTags, children }: TagSelectProps) => {
    const [error, setError] = useState(false);

    return (
        <FormControl isInvalid={error} flexShrink={1} py={5}>
            <Heading fontSize="3xl" textAlign="center">
                {children}
            </Heading>
            <Box
                mt={5}
                p={5}
                borderWidth={1}
                borderRadius={30}
                flexShrink={1}
            >
                <ScrollView>
                    <Checkbox.Group
                        accessibilityLabel="pick a tag"
                        onChange={(values) => {
                            setTags(values || []);
                            if (values.length > 0)
                                setError(false);
                        }}>
                        <Checkbox value="Happy" my="3">
                            Happy
                        </Checkbox>
                        <Checkbox value="Silly" my="3">
                            Silly
                        </Checkbox>
                        <Checkbox value="Bored" my="3">
                            Bored
                        </Checkbox>
                        <Checkbox value="Angry" my="3">
                            Angry
                        </Checkbox>
                        <Checkbox value="Sad" my="3">
                            Sad
                        </Checkbox>
                        <Checkbox value="Anxious" my="3">
                            Anxious
                        </Checkbox>
                        <Checkbox value="Scared" my="3">
                            Scared
                        </Checkbox>
                    </Checkbox.Group>
                </ScrollView>
            </Box>
            {error && <FormControl.ErrorMessage _text={{ fontSize: 18 }} alignItems="center" leftIcon={<WarningOutlineIcon size="xs" />}>
                {"You must select at least one tag."}
            </FormControl.ErrorMessage>}
        </FormControl>
    )
}

export default TagSelect
