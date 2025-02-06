"use client";

import React, { useState, useEffect } from 'react';
import { Progress, Text, Group, Center } from '@mantine/core';

function DateProgressBar() {
    const startDate = new Date('2024-09-01'); // 开始日期
    const endDate = new Date('2025-03-01');   // 结束日期 (同时作为考试日期)
    const examDate = endDate; // 将结束日期作为考试日期
    const [progress, setProgress] = useState(0);
    const [currentDateText, setCurrentDateText] = useState('');
    const [daysRemaining, setDaysRemaining] = useState(0); // 新增：剩余天数 state

    useEffect(() => {
        const updateProgress = () => {
            const now = new Date();

            const totalDuration = endDate.getTime() - startDate.getTime();
            const elapsedTime = now.getTime() - startDate.getTime();

            let calculatedProgress = (elapsedTime / totalDuration) * 100;
            calculatedProgress = Math.max(0, Math.min(100, calculatedProgress));
            setProgress(calculatedProgress);
            setCurrentDateText(now.toLocaleDateString());

            // 计算剩余天数
            const timeDiff = examDate.getTime() - now.getTime();
            const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // 向上取整，即使不满一天也算一天
            setDaysRemaining(daysLeft > 0 ? daysLeft : 0); // 确保天数不为负数
        };

        updateProgress();
        const intervalId = setInterval(updateProgress, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div>
            <Group position="apart" mb="xs">
                <Text size="sm" weight={500} color={daysRemaining <= 7 ? 'red' : 'teal'}>
                    距离 2025 单独招生考试还有 {daysRemaining} 天
                </Text>
                <Text size="xs" color="dimmed">当前日期：{currentDateText}</Text>
            </Group>
            <Progress
                value={progress}
                label={`${progress.toFixed(2)}%`}
                color="blue"
                size="md"
                radius="sm"
            />
        </div>
    );
}

export default DateProgressBar;
