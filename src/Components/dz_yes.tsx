import {Anchor, Badge, Group, Progress, Table, Text} from '@mantine/core';
import classes from './TableReviews.module.css';

const data = [
    {
        title: '内蒙古农业大学',
        author: 'Isaac Asimov',
        Labels: 1000,
        reviews: { positive: 2223, negative: 259 },
        Color: 'green'
    },
    {
        title: '内蒙古民族大学',
        author: 'Mary Shelley',
        Labels: 1818,
        reviews: { positive: 5677, negative: 1265 },
        Color: 'green'
    },
    {
        title: '内蒙古师范大学',
        author: 'Stanislaw Lem',
        Labels: 1961,
        reviews: { positive: 3487, negative: 1845 },
        Color: 'green'
    },
    {
        title: '包头轻工职业技术学院',
        author: 'Frank Herbert',
        Labels: 1965,
        reviews: { positive: 8576, negative: 663 },
        Color: 'green'
    },
    {
        title: '内蒙古建筑职业技术学院',
        author: 'Ursula K. Le Guin',
        Labels: 1969,
        reviews: { positive: 6631, negative: 993 },
        Color: 'green'
    },
    {
        title: '内蒙古电子信息职业技术学院',
        author: 'Philip K Dick',
        Labels: 1977,
        reviews: { positive: 8124, negative: 1847 },
        Color: 'green'
    },
];
export default function dz_yes() {
    const rows = data.map((row) => {
        const totalReviews = row.reviews.negative + row.reviews.positive;
        const positiveReviews = (row.reviews.positive / totalReviews) * 100;
        const negativeReviews = (row.reviews.negative / totalReviews) * 100;

        return (
            <Table.Tr key={row.title}>
                <Table.Td>
                    <Anchor component="button" fz="sm">
                        {row.title}&nbsp;
                        <Badge color={row.Color} variant="light">
                            {row.Color == "green" ? "公办" : "民办"}
                        </Badge>
                    </Anchor>
                </Table.Td>
                <Table.Td>{row.Labels}</Table.Td>
                <Table.Td>
                    <Anchor component="button" fz="sm">
                        {row.author}
                    </Anchor>
                </Table.Td>
                <Table.Td>{Intl.NumberFormat().format(totalReviews)}</Table.Td>
                <Table.Td>
                    <Group justify="space-between">
                        <Text fz="xs" c="teal" fw={700}>
                            {positiveReviews.toFixed(0)}%
                        </Text>
                        <Text fz="xs" c="red" fw={700}>
                            {negativeReviews.toFixed(0)}%
                        </Text>
                    </Group>
                    <Progress.Root>
                        <Progress.Section
                            className={classes.progressSection}
                            value={positiveReviews}
                            color="teal"
                        />

                        <Progress.Section
                            className={classes.progressSection}
                            value={negativeReviews}
                            color="red"
                        />
                    </Progress.Root>
                </Table.Td>
            </Table.Tr>
        );
    });

    return (
        <Table.ScrollContainer minWidth={800}>
            <Table verticalSpacing="xs">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>学校</Table.Th>
                        <Table.Th>标签</Table.Th>
                        <Table.Th>最新通知</Table.Th>
                        <Table.Th>招收人数</Table.Th>
                        <Table.Th>预计数据</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
}