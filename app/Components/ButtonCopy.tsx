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
                        <IconCheck size={14} stroke={1.5} />
                    ) : (
                        <IconCopy size={14} stroke={1.5} />
                    )
                }
                radius="md"
                size="compact-sm"
                pr={6}
                pl={8}
                h={28}
                styles={{
                    section: { marginLeft: 4 },
                    inner: { justifyContent: 'space-between' },
                    label: { fontSize: '0.75rem' }
                }}
                onClick={() => clipboard.copy(codePaste)}
            >
                {codePaste}
            </Button>
        </Tooltip>
    );
}
