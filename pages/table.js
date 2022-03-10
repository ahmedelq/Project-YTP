import {
  Box,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Container,
  Flex,
  VStack,
  HStack,
  Text,
  Input,
  Image,
  Link,
  IconButton,
  Button,
  Badge,
  Heading,
  Switch,
  Checkbox,
  Icon,
  Select,
  GridItem,
  Grid,
  SimpleGrid,
} from '@chakra-ui/react';
import { useDebugValue } from 'react';
import { FiEdit } from 'react-icons/fi';

function OrderSelectionTab() {
  return (
    <Flex
      w="full"
      borderBottom="1px"
      borderColor="gray.200"
      color="gray.500"
      columnGap="12"
    >
      <Text>Takeaway</Text>
      <Text
        borderBottom="2px"
        fontWeight="bold"
        color="blue.500"
        borderColor="blue.500"
      >
        Ground floor
      </Text>
      <Text>Second floor</Text>
      <Flex
        justifySelf="flex-end"
        ml="auto"
        fontSize="sm"
        color="blue.300"
        spacing="0"
        columnGap="1"
        alignItems="middle"
      >
        <Icon as={FiEdit} />
        <Text display="inline" verticalAlign="bottom" p="0" m="0">
          Edit
        </Text>
      </Flex>
    </Flex>
  );
}

function StatItem({ label, value }) {
  return (
    <VStack fontSize="lg" py="1" px="3" bg="gray.50" borderRadius="md">
      <Text>{label}</Text>
      <Text>{value}</Text>
    </VStack>
  );
}

function Stats({ children, ...props }) {
  return (
    <HStack justifySelf="center" m="0 auto" {...props}>
      <StatItem label="Unpaid bills" value="RM 0" />
      <StatItem label="Occupied tables" value="0 / 28" />
      <StatItem label="PAX" value="0" />
      <StatItem label="In Kitchen" value="0" />
      <StatItem label="Avg. Serve time" value="0:0" />
    </HStack>
  );
}
function FoodTables() {
  return (
    <SimpleGrid w="full" columns="5" columnGap="6" rowGap="6">
      <GridItem w="100%" h="110px" bg="cyan.400" />
      <GridItem w="100%" h="110px" bg="gray.100" />
      <GridItem w="100%" h="110px" bg="cyan.400" />
      <GridItem w="100%" h="110px" bg="cyan.400" />
      <GridItem w="100%" h="110px" bg="cyan.400" />

      <GridItem w="100%" h="110px" bg="cyan.400" />
      <GridItem w="100%" h="110px" bg="gray.100" />
      <GridItem w="100%" h="110px" bg="cyan.400" />
      <GridItem w="100%" h="110px" bg="gray.100" />
      <GridItem w="100%" h="110px" bg="gray.100" />
    </SimpleGrid>
  );
}
export default function Orders({ children }) {
  return (
    <VStack spacing={8} maxH="80vh" overflow="hidden">
      <Flex w="full" align="center">
        <Heading size="xl">Tables</Heading>
        <Stats />
      </Flex>
      <OrderSelectionTab />
      <FoodTables />
    </VStack>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Orders.layout = Sidebar;
