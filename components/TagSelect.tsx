import React, { useState } from 'react'
import { Heading, FormControl, Checkbox, WarningOutlineIcon, ScrollView, Box } from 'native-base';
import BottleTags from '../utils/bottleTags';
import { enumKeys } from '../utils/utils';

interface TagSelectProps {
    setTags: (tags: string[]) => void;
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    setError: (state: boolean) => void;
    error: boolean
}

const TagSelect = ({ setTags, children, setError, error }: TagSelectProps) => {

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
                bg="#FFFEF6"
            >
                <ScrollView bg="#FFFEF6">
                    <Checkbox.Group
                        accessibilityLabel="pick a tag"
                        onChange={(values) => {
                            setTags(values || []);
                            if (values.length > 0 && setError)
                                setError(false);
                        }}>
                        {enumKeys(BottleTags).map((value, i) =>
                            <Checkbox value={BottleTags[value]} key={i} my="3">
                                {BottleTags[value]}
                            </Checkbox>)
                        }
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
