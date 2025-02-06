"use client";
import { IconCheck, IconCopy } from '@tabler/icons-react';
import { Button, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

interface ButtonCopyProps {
    codePaste: string;
}

export default function ButtonCopy({ codePaste }: ButtonCopyProps) {
    const clipboard = useClipboard();
    return (
        <Tooltip
            label="Link copied!"
            offset={4}
            position="bottom"
            radius="md"
            transitionProps={{ duration: 100, transition: 'slide-down' }}
            opened={clipboard.copied}
        >
            <Button
                variant="light"
                rightSection={
                    clipboard.copied ? (
                        <IconCheck size={16} stroke={1.5} />
                    ) : (
                        <IconCopy size={16} stroke={1.5} />
                    )
                }
                radius="md"
                size="sm"
                pr={12}
                h={40}
                styles={{ section: { marginLeft: 16 } }}
                onClick={() => clipboard.copy(codePaste)}
            >
                {codePaste}
            </Button>
        </Tooltip>
    );
}
