"use client";
import { useState } from 'react';
import ButtonCopy from './ButtonCopy';
import { IconChevronDown, IconChevronUp, IconSearch, IconSelector } from '@tabler/icons-react';
import data from '../Data/2024/dz_Data';
import {
    Badge,
    Center,
    Group,
    keys,
    ScrollArea,
    Table,
    Text,
    TextInput,
    UnstyledButton,
} from '@mantine/core';
import classes from './TableSort.module.css';

interface RowData {
    name: string;
    email: string;
    company: {
        Content: string;
        Link: string;
    } | string;
    CodePaste: string;
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort: () => void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <Table.Th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon size={16} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => {
            const value = item[key as keyof RowData];
            if (typeof value === 'string') {
                return value.toLowerCase().includes(query);
            } else if (typeof value === 'object' && value !== null && 'Content' in value) {
                return value.Content.toLowerCase().includes(query);
            }
            return false;
        })
    );
}

function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            const aValue = sortBy === 'company' ?
                (typeof a[sortBy] === 'string' ? a[sortBy] : a[sortBy].Content) :
                a[sortBy];
            const bValue = sortBy === 'company' ?
                (typeof b[sortBy] === 'string' ? b[sortBy] : b[sortBy].Content) :
                b[sortBy];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return payload.reversed ?
                    bValue.localeCompare(aValue) :
                    aValue.localeCompare(bValue);
            }
            return 0;
        }),
        payload.search
    );
}

export default function Danzyes() {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: string) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const rows = sortedData.map((row) => (
        <Table.Tr key={row.name}>
            <Table.Td><Badge color="green" variant="light">公办</Badge> {row.name}</Table.Td>
            <Table.Td>{row.email}</Table.Td>
            <Table.Td>
                {typeof row.company === 'string' ? (
                    row.company
                ) : (
                    <a href={row.company.Link} target="_blank" rel="noopener noreferrer" style={{ color: '#228be6', textDecoration: 'none' }}>
                        {row.company.Content}
                    </a>
                )}
            </Table.Td>
            <Table.Td><ButtonCopy codePaste={row.CodePaste} /></Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea>
            <TextInput
                placeholder="输入学校或代码查找"
                mb="md"
                leftSection={<IconSearch size={16} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
                <Table.Tbody>
                    <Table.Tr>
                        <Th
                            sorted={sortBy === 'name'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('name')}
                        >
                            学校名称
                        </Th>
                        <Th
                            sorted={sortBy === 'email'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('email')}
                        >
                            标签
                        </Th>
                        <Th
                            sorted={sortBy === 'company'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('company')}
                        >
                            最新通知
                        </Th>
                        <Th
                            sorted={sortBy === 'CodePaste'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('CodePaste')}
                        >
                            学校代码
                        </Th>
                    </Table.Tr>
                </Table.Tbody>
                <Table.Tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={Object.keys(data[0]).length}>
                                <Text fw={500} ta="center">
                                    Nothing found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}