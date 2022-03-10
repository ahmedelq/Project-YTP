import React from 'react';
import {
  Container,
  Flex,
  Heading,
  Box,
  VStack,
  HStack,
  Text,
  SimpleGrid,
  GridItem,
  Icon,
} from '@chakra-ui/react';
import { MdOutlineAssignment } from 'react-icons/md';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
);

const dummyData = [
  { label: 'Todays sales', value: 0 },
  { label: 'Yesterdays sales', value: 0 },
  { label: 'Last 7 day sales', value: 0 },
  { label: 'All the time sales', value: 10.01 },
];

const txtDummy = [
  { label: 'Order value', value: 12.3 },
  { label: 'Orders', value: '14k' },
  { label: 'Users', value: '71.56%' },
  { label: 'Downloads', value: '34040' },
];
function StatItem({ label, value }) {
  return (
    <HStack
      justifyContent="space-between"
      borderRadius="md"
      boxShadow="md"
      minW="250px"
      flex="1"
      bg="gray.200"
      p="5"
    >
      <Box>
        <Text fontSize="2xl">{value}</Text>
        <Text>{label}</Text>
      </Box>
      <Icon as={MdOutlineAssignment} boxSize="32px" />
    </HStack>
  );
}

function StatTextItem({ label, value }) {
  return (
    <VStack fontSize="md" py="1" px="3" borderRadius="md">
      <Text color="gray.400">{label}</Text>
      <Text fontSize="2xl" color="purple.800">
        {value}
      </Text>
    </VStack>
  );
}

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'First dataset',
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
    {
      label: 'Second dataset',
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: '#742774',
    },
  ],
};

function MeinChart() {
  return (
    <VStack flex="1">
      <Box>
        <Text fontWeight="bold">Order details</Text>
        <Text>
          The total number of sessions within the date range. It is the period
          time a user is activly engaged with your website, page or app etc.
        </Text>
      </Box>
      <HStack mb="3">
        {txtDummy.map((el) => (
          <StatTextItem key={`stattextitem_${el.label}`} {...el} />
        ))}
      </HStack>
      <Box as={() => <Line minH="300px" data={data} />} minH="300px"></Box>
    </VStack>
  );
}
function TableItem(props) {
  return <Box minW="200px" h="100px" {...props}></Box>;
}
function LiveTable() {
  return (
    <VStack flex="1">
      <Text fontSize="lg" w="full" color="purple.800">
        Live Table Status
      </Text>
      <Flex
        w="full"
        h="full"
        minH="full"
        gap="1"
        rowGap="5"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <TableItem bg="gray.200" />
        <TableItem bg="cyan.400" />
        <TableItem bg="cyan.400" />

        <TableItem bg="gray.200" />
        <TableItem bg="gray.200" />
        <TableItem bg="cyan.400" />

        <TableItem bg="gray.200" />
        <TableItem bg="gray.200" />
        <TableItem bg="cyan.400" />
      </Flex>
    </VStack>
  );
}
export default function Home() {
  return (
    <VStack align="flex-start" w="full" h="full">
      <Box w="full">
        <Heading size="xl">Dashboard</Heading>
      </Box>
      <HStack w="full">
        {dummyData.map((el) => (
          <StatItem key={`stat_item_${el.key}`} {...el} />
        ))}
      </HStack>
      <HStack px="2" py="2" flex="1" h="full" minW="full" minH="full" w="full">
        <MeinChart />
        <LiveTable />
      </HStack>
    </VStack>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Home.layout = Sidebar;
