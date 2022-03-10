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
} from '@chakra-ui/react';
import { BsFilter, BsArrowDownShort } from 'react-icons/bs';
import {
  AiFillPhone,
  AiOutlineSearch,
  AiOutlineArrowDown,
} from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import {
  MdOutlineAttachMoney,
  MdOutlineMoneyOffCsred,
  MdFastfood,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaAllergies } from 'react-icons/fa';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

const dummyData = [
  {
    no: '101',
    time: '20',
    items: 2,
    total: '34.99',
  },
  {
    no: '102',
    time: '20',
    items: 4,
    total: '14.53',
  },
  {
    no: '103',
    time: '20',
    items: 3,
    total: '57.44',
  },
  {
    no: '104',
    time: '22',
    items: 2,
    total: '31.89',
  },
  {
    no: '105',
    time: '20',
    items: 2,
    total: '49.21',
  },
  {
    no: '106',
    time: '20',
    items: 2,
    total: '18.2',
  },
  {
    no: '107',
    time: '20',
    items: 2,
    total: '19.34',
  },
  {
    no: '108',
    time: '20',
    items: 2,
    total: '31.00',
  },
  {
    no: '109',
    time: '20',
    items: 2,
    total: '31.89',
  },
];

const dummyOrders = [
  {
    label: 'Hummus',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Hummus_from_The_Nile.jpg',
    price: 10.99,
    amount: 1,
    note: 'extra something',
    addons: 'olive oil',
  },
  {
    label: 'Chicken masala',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Chicken_tikka_masala.jpg',
    price: 15,
    amount: 2,
  },
  {
    label: 'Kebbeh',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Kebbeh.JPG',
    price: 9,
    amount: 1,
  },
];
function OrderItem({ no, time, items, total, ...props }) {
  return (
    <Flex
      bg="white"
      p="3"
      w="full"
      h="100px"
      direction="column"
      boxShadow="md"
      {...props}
    >
      <Flex
        w="full"
        direction="row"
        align="flex-start"
        justify="center"
        columnGap="3"
      >
        <Checkbox size="lg" borderColor="gray.300" />
        <Icon color="green.400" boxSize="24px" as={GoPrimitiveDot} />
        <Text flex="1" fontSize="lg">
          Table #{no}
        </Text>
        <Box
          bg="gray.200"
          p="4"
          m="auto"
          mr="3"
          borderRadius="lg"
          justifySelf="end"
        >
          A1
        </Box>
      </Flex>

      <HStack w="full" spacing={12} fontSize="sm" color="gray.600">
        <Flex align="center" columnGap={1}>
          <Icon as={FiClock} />
          <Box display="inline-block" as="span">
            {time} min ago
          </Box>
        </Flex>

        <Flex align="center" columnGap={1}>
          <Icon as={MdFastfood} />
          <Box display="inline-block" as="span">
            {items} items
          </Box>
        </Flex>

        <Flex align="center" columnGap={1}>
          <Icon as={MdOutlineMoneyOffCsred} />
          <Box display="inline-block" as="span">
            RM{total} unpaid
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
}

function OrderSelectionTab() {
  return (
    <HStack
      w="full"
      borderBottom="1px"
      borderColor="gray.200"
      spacing={12}
      color="gray.500"
    >
      <Text>
        Running orders{' '}
        <Badge borderRadius="lg" colorScheme="red">
          1
        </Badge>{' '}
      </Text>
      <Text>Just placed</Text>
      <Text>Preparing</Text>
      <Text>Past orders</Text>
    </HStack>
  );
}

function LeftPanel() {
  return (
    <Flex flex="1" direction="column" rowGap="3">
      <HStack px="3">
        <Select flex="1" minW="130px">
          <option>Select 1</option>
          <option>Select 2</option>
        </Select>
        <InputGroup>
          <InputLeftElement>
            <Icon as={AiOutlineSearch} />
          </InputLeftElement>
          <Input placeholder="Search"></Input>
        </InputGroup>
      </HStack>
      <Flex
        flex="1"
        rowGap="5"
        p="3"
        direction="column"
        overflow="hidden"
        overflowY="auto"
      >
        {dummyData.map((el) => (
          <OrderItem key={`order_item_${el.no}`} {...el} />
        ))}
      </Flex>
    </Flex>
  );
}

function OrderDishItem({ children, img, label, addons, note, amount, price }) {
  return (
    <Flex w="full" h="120px" align="center">
      <Image
        src={img}
        borderRadius="full"
        alt={label}
        h="100px"
        w="100px"
        objectFit="fill"
      />
      <VStack align="flex-start" ml="3" spacing="0">
        <Text fontWeight="bold">{label}</Text>
        {addons && <Text>Addons: {addons}</Text>}
        {note && (
          <Badge variant="solid" colorScheme="blue">
            Note - {note}
          </Badge>
        )}
      </VStack>

      <HStack justifySelf="flex-end" ml="auto">
        <Text fontWeight="bold" fontSize="lg">
          x {amount}
        </Text>
        <Text color="gray.400">(RM {price})</Text>
        <Icon as={IoIosRemoveCircleOutline} fontSize="2xl" color="red.400" />
      </HStack>
    </Flex>
  );
}

function ListOfOrders({ isPreparing = false, isPaid = false }) {
  return (
    <Box w="full">
      <HStack ml="3">
        <Icon as={MdKeyboardArrowRight} transform="rotate(90deg)" boxSize="6" />
        <Text fontSize="md" fontWeight="bold">
          Order details
        </Text>
        <Flex>
          <Badge
            colorScheme={isPreparing ? `blue` : 'gray'}
            m="auto"
            variant="outline"
          >
            {isPreparing ? `Preparing` : 'Prepared'}
          </Badge>
          <Text color="gray.500" ml="4">
            20 min ago
          </Text>
        </Flex>
        <Flex color="gray.500">
          <Icon
            color={isPaid ? `green.600` : `red.600`}
            m="auto"
            as={isPaid ? MdOutlineAttachMoney : MdOutlineMoneyOffCsred}
          />
          <Text>{isPaid ? `Paid` : `Unpaid`}</Text>
        </Flex>
      </HStack>
      <VStack align="flex-start" mt="4">
        <Text color="gray.500">Items</Text>
        {dummyOrders.map((el, idx) => (
          <OrderDishItem key={`${el.name}-${idx}`} {...el} />
        ))}
      </VStack>
      <HStack px="5" mt="3" w="full" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">
          Total
        </Text>
        <Text
          fontSize="lg"
          color={isPaid ? `gray.400` : `black`}
          fontWeight="bold"
          justifySelf="flex-end"
        >
          RM {dummyOrders.reduce((pv, cv) => pv + cv.price * cv.amount, 0)}
        </Text>
      </HStack>
    </Box>
  );
}
function RightPanel() {
  return (
    <VStack
      borderLeft="1px"
      borderColor="gray.300"
      flex="1"
      p={4}
      align="flex-start"
      overflowY="scroll"
    >
      <Flex justify="space-between" w="full">
        <Text my="auto" fontSize="3xl" fontWeight="bold">
          Table #0-5
        </Text>
        <Box
          bg="white"
          boxShadow=" rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          p="4"
          m="auto"
          mr="3"
          fontSize="3xl"
          borderRadius="lg"
        >
          A1
        </Box>
      </Flex>

      <Box
        style={{ marginTop: '24px', marginBottom: '6px' }}
        w="full"
        direction="column"
        fontSize="lg"
        fontWeight="medium"
      >
        <Text>Invoice: #1337</Text>
        <Text>Name: Rhythm Gupta</Text>
        <Box as="span">Phone:</Box>{' '}
        <Box as="span">
          <Link href="phone:044" color="blue.600">
            +91-9873803932{' '}
            <Icon
              as={AiFillPhone}
              verticalAlign="middle"
              transform={'rotate(90deg)'}
            />
          </Link>
        </Box>
      </Box>
      <Box
        as="span"
        bg="red.100"
        border="1px"
        borderRadius="md"
        borderColor="red.800"
        w="full"
        color="red.600"
        p="1"
        m="auto"
        fontSize="md"
        style={{ marginBottom: '16px' }}
      >
        <Icon
          as={FaAllergies}
          display="inline-block"
          mt="auto"
          mx="2"
          verticalAlign="middle"
        />
        Allergic to: Gluten - Oats, Barley, Corn{' '}
      </Box>
      <ListOfOrders isPreparing={true} />
      <ListOfOrders isPaid={true} />

      <HStack w="full" style={{ marginTop: '20px' }}>
        <Button colorScheme="green" flex="1">
          Add item
        </Button>
        <Button colorScheme="green" flex="1">
          Settle bill
        </Button>
      </HStack>
    </VStack>
  );
}

export default function Orders({ children }) {
  return (
    <VStack spacing={8} maxH="80vh" overflow="hidden">
      <Box w="full">
        <Heading size="xl">Order Dashboard</Heading>
      </Box>
      <OrderSelectionTab />
      <Flex w="full" h="full" flex="1" minW="0" minH="0">
        <LeftPanel />
        <RightPanel />
      </Flex>
    </VStack>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Orders.layout = Sidebar;
