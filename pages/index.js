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
  Link,
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
  { label: 'Todays sales', value: 0 ,color:'#de425b'},
  { label: 'Yesterdays sales', value: 0 ,color:'orange.200'},
  { label: 'Last 7 day sales', value: 0 ,color:'#fff1a1'},
  { label: 'All the time sales', value: 10.01 ,color:'#8ebe7d'},
];

const txtDummy = [
  { label: 'Order value', value: 12.3 },
  { label: 'Orders', value: '14k' },
  { label: 'Users', value: '71.56%' },
  { label: 'Downloads', value: '34040' },
];
function StatItem({ label, value ,color }) {
  return (
    <HStack
      justifyContent="space-between"
      borderRadius="md"
      boxShadow="md"
      minW="250px"
      flex="1"
      // bg="gray.200"
      bg={color}
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
    <VStack flex="1"
    // NEW 
      bg='gray.100' 
      px='4'
      py='6'
      borderRadius="md"
      boxShadow="md"
      // test
      w='50%'
    >
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
  // need to change size *
  return <Box
   h="100px" w='200px' 
  // w='full'
  // h='full' 
  textAlign='center' fontWeight='bold'  {...props}>{props.tNum}</Box>;
}
function LiveTable() {
  return (
   
    <VStack 
      flex="1"
      bg='gray.100' 
      px='4'
      py='6'
      // w='auto'
      w='50%'
      
      // minW='auto'
      // maxWidth='auto'
      borderRadius="md"
      boxShadow="md"
      // minW="250px"
    > 
      <HStack flex={1} justifyContent='space-between'w='full' px='2'>
        <Link href='/table'>
        <Text fontSize="lg" fontWeight='bold'  pb='4' color="purple.800">
          Live Table Status
        </Text></Link>
        
        <HStack  columnGap={4} fontWeight='bold'>
          <Text color="cyan.400">
              Busy Table
          </Text>
          <Text color="gray.300">
            Available Table
          </Text>
        </HStack>
      </HStack>
      
      <Flex
        w="full"

        // maxW='auto'
        h="full"
        // minH="auto"
        gap="1"
        rowGap="5"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {/* Change to grid */}
        <VStack w='full'h='full' columnGap={2}>
          <HStack w='full' h='full'>
            <TableItem tNum='Table 1' bg="gray.300" />
            <TableItem tNum='Table 2' bg="cyan.400" />
            <TableItem tNum='Table 3' bg="cyan.400" />
          </HStack>

          <HStack w='full' h='full'>
            <TableItem tNum='Table 4' bg="gray.300" />
            <TableItem tNum='Table 5' bg="gray.300" />
            <TableItem tNum='Table 6' bg="cyan.400" />

          </HStack>

          <HStack w='full' h='full'>
            <TableItem tNum='Table 7' bg="gray.300" />
            <TableItem tNum='Table 8' bg="gray.300" />
            <TableItem tNum='Table 9' bg="cyan.400" />

          </HStack>

        </VStack>
        
        
        
        
      </Flex>


    </VStack>
  );
}
export default function Home() {
  return (
    <VStack 
      align="flex-start"  
      w="full"
      h="full"
     >

      <Box w="full">
        <Heading size="xl" pb='4'>Dashboard</Heading>
      </Box>

      <HStack w="full" pb='4'>
        {dummyData.map((el) => (
          <StatItem key={`stat_item_${el.key}`} {...el} />
        ))}
      </HStack>

      <HStack alignItems='flex-start'  px="2" py="2" flex="1"  h="full" minW="full" minH="full" w="full">
        <MeinChart />
        <LiveTable />
      </HStack>

    </VStack>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Home.layout = Sidebar;
