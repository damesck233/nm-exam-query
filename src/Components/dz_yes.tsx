import {Anchor, Badge, Group, Progress, Table, Text} from '@mantine/core';
import classes from './TableReviews.module.css';

const data = [
    {
        title: '内蒙古农业大学',
        author: 'Isaac Asimov',
        Labels: {
            Major: '农学',
            Difficulty: '过太高',
        },
        reviews: { positive: 2223, negative: 259 },
        Color: 'green'
    },
    {
        title: '内蒙古民族大学',
        author: 'Mary Shelley',
        Labels: {
            Major: '蒙医学',
            Difficulty: '过太高',
        },
        reviews: { positive: 5677, negative: 1265 },
        Color: 'green'
    },
    {
        title: '内蒙古师范大学',
        author: 'Stanislaw Lem',
        Labels: {
            Major: '师范',
            Difficulty: '过太高',
        },
        reviews: { positive: 3487, negative: 1845 },
        Color: 'green'
    },
    {
        title: '包头轻工职业技术学院',
        author: 'Frank Herbert',
        Labels: {
            Major: '机电',
            Difficulty: '过太高',
        },
        reviews: { positive: 8576, negative: 663 },
        Color: 'green'
    },
    {
        title: '内蒙古建筑职业技术学院',
        author: 'Ursula K. Le Guin',
        Labels: {
            Major: '建筑',
            Difficulty: '过太高',
        },
        reviews: { positive: 6631, negative: 993 },
        Color: 'green'
    },
    {
        title: '内蒙古电子信息职业技术学院',
        author: 'Philip K Dick',
        Labels: {
            Major: '计算机',
            Difficulty: '过太高',
        },
        reviews: { positive: 8124, negative: 1847 },
        Color: 'green'
    },
];
// let Schoolsvg;
const SvgDz = {
    Schoolsvg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
};
export default function dz_yes() {
    const rows = data.map((row) => {
        const totalReviews = row.reviews.negative + row.reviews.positive;
        const positiveReviews = (row.reviews.positive / totalReviews) * 100;
        const negativeReviews = (row.reviews.negative / totalReviews) * 100;

        return (
            <Table.Tr key={row.title}>
                <Table.Td>
                    <Anchor component="button" fz="sm">
                        {SvgDz.Schoolsvg} {row.title}&nbsp;
                        <Badge color={row.Color} variant="light">
                            {row.Color == "green" ? "公办" : "民办"}
                        </Badge>
                    </Anchor>
                </Table.Td>
                <Table.Td>
                    <Badge color='blue' variant="light">{row.Labels.Major}</Badge>
                </Table.Td>
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