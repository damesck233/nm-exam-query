"use client";

import { useState, useEffect } from 'react';
import { Burger, Container, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import classes from './HeaderSimple.module.css';

const links = [
    { link: '/', label: '首页' },
    { link: '/data/dz', label: '单招' },
    { link: '/data/gk', label: '高考' },
    { link: '/help', label: '反馈 & 帮助' },
];

export default function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => {
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Text size="xl" fw={700}>内蒙古招生考试三方查询中心</Text>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}