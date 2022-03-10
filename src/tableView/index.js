import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  Textarea,
  Container,
  Flex,
  Text,
  Image,
  Avatar,
  Box,
  VStack,
  Heading,
  SimpleGrid,
  GridItem,
  Grid,
  Table,
  HStack,
  Thead,
  Icon,
  Tbody,
  Tr,
  Td,
  useColorModeValue,
  Th,
} from '@chakra-ui/react';
import { HiOutlineDotsVertical } from 'react-icons/hi';

import React from 'react';
import { chakra } from '@chakra-ui/react';

const tblData = [
  {
    date: '2022/01/05',
    title: 'CNY Lunch Special',
    img: (
      <Image
        w="120px"
        borderRadius="lg"
        src="https://upload.wikimedia.org/wikipedia/commons/6/66/Shakshuka8.jpg"
      />
    ),
    action: <Icon as={HiOutlineDotsVertical} />,
  },
];

const rows = ['date', 'title', 'img', 'action'];
const Row = (obj) => (
  <Tr key={obj.title}>
    {rows.map((col) => (
      <Td key={obj[col]}>{obj[col]}</Td>
    ))}
  </Tr>
);
export default function TableView({ HeadTitle }) {
  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <Flex direction="column">
        <Text fontSize="lg" fontWeight="bold" pb=".5rem">
          {HeadTitle}
        </Text>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr my=".8rem" pl="0px">
            <Th pl="0px" color="gray.400">
              Date
            </Th>
            <Th color="gray.400">Title</Th>
            <Th color="gray.400"></Th>
            <Th color="gray.400">Action</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>{tblData.map(Row)}</Tbody>
      </Table>
      <Flex w="full" align="center">
        <Text w="full">Showing 1 to 1 of 1 entries</Text>
        <Ma />
      </Flex>
    </VStack>
  );
}

const Ma = () => {
  const PagButton = (props) => {
    const activeStyle = {
      bg: useColorModeValue('gray.100', 'brand.500'),
      color: useColorModeValue('gray.800', 'gray.200'),
    };
    return (
      <chakra.button
        mx={1}
        px={4}
        py={2}
        rounded="md"
        bg={useColorModeValue('gray.100', 'gray.800')}
        color={useColorModeValue('gray.500', 'gray.200')}
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && 'not-allowed'}
        {...(props.active && activeStyle)}
      >
        {props.children}
      </chakra.button>
    );
  };
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Flex>
        <PagButton disabled>Previous</PagButton>
        <PagButton active>1</PagButton>
        <PagButton>2</PagButton>
        <PagButton>Next</PagButton>
      </Flex>
    </Flex>
  );
};
