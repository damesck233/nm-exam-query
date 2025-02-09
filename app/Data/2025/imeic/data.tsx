"use client";

import { useState } from 'react';
import cx from 'clsx';
import { ScrollArea, Table } from '@mantine/core';
import classes from '../../../Components/css/TableScrollArea.module.css';

const data = [
  {
    系别: '电子与自动化系',
    专业: '电子信息工程技术',
    历史类: '√',
    物理类: '√',
    计算机类: '',
    机电类: '√',
    财会类: '',
    美工设计类: '',
    汽驾类: '',
    幼师类: '',
  },
  {
    系别: '电子与自动化系',
    专业: '电气自动化技术',
    历史类: '√',
    物理类: '√',
    计算机类: '',
    机电类: '√',
    财会类: '',
    美工设计类: '',
    汽驾类: '',
    幼师类: '',
  },
  {
    系别: '电子与自动化系',
    专业: '机电一体化技术',
    历史类: '√',
    物理类: '√',
    计算机类: '',
    机电类: '√',
    财会类: '',
    美工设计类: '',
    汽驾类: '',
    幼师类: '',
  },
  {
    系别: '电子与自动化系',
    专业: '光伏工程技术',
    历史类: '√',
    物理类: '√',
    计算机类: '',
    机电类: '√',
    财会类: '',
    美工设计类: '',
    汽驾类: '',
    幼师类: '',
  },
  {
    系别: '电子与自动化系',
    专业: '新能源汽车技术',
    历史类: '√',
    物理类: '√',
    计算机类: '',
    机电类: '√',
    财会类: '',
    美工设计类: '',
    汽驾类: '√',
    幼师类: '',
  },
  {
    系别: '电子与自动化系',
    专业: '无人机应用技术',
    历史类: '√',
    物理类: '√',
    计算机类: '√',
    机电类: '√',
    财会类: '',
    美工设计类: '',
    汽驾类: '',
    幼师类: '',
  },
  // ... (rest of the data)
  {
    系别: '电子商务系',
    专业: '商务数据分析与应用',
    历史类: '√',
    物理类: '√',
    计算机类: '√',
    机电类: '',
    财会类: '',
    美工设计类: '',
    汽驾类: '',
    幼师类: '',
  },
];

export function TableScrollArea() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <Table.Tr key={row.专业}>
      <Table.Td>{row.系别}</Table.Td>
      <Table.Td>{row.专业}</Table.Td>
      <Table.Td>{row.历史类}</Table.Td>
      <Table.Td>{row.物理类}</Table.Td>
      <Table.Td>{row.计算机类}</Table.Td>
      <Table.Td>{row.机电类}</Table.Td>
      <Table.Td>{row.财会类}</Table.Td>
      <Table.Td>{row.美工设计类}</Table.Td>
      <Table.Td>{row.汽驾类}</Table.Td>
      <Table.Td>{row.幼师类}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>系别</Table.Th>
            <Table.Th>专业</Table.Th>
            <Table.Th>历史类</Table.Th>
            <Table.Th>物理类</Table.Th>
            <Table.Th>计算机类</Table.Th>
            <Table.Th>机电类</Table.Th>
            <Table.Th>财会类</Table.Th>
            <Table.Th>美工设计类</Table.Th>
            <Table.Th>汽驾类</Table.Th>
            <Table.Th>幼师类</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}