import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Text,
  Input,
  Image,
  IconButton,
  Button,
  Badge,
  List,
  ListItem,
  Switch,
  Icon,
  Select,
  OrderedList,
} from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import {
  MdOutlineAttachMoney,
  MdOutlineMoneyOffCsred,
  MdFastfood,
  MdKeyboardArrowRight,
} from 'react-icons/md';

const dummyItems = [
  {
    label: 'Chicken masala',
    rate: 4.7,
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Chicken_tikka_masala.jpg',
    price: '15',
  },
  {
    label: 'Kebbeh',
    rate: 3.7,
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Kebbeh.JPG',
    price: '9',
  },
  {
    label: 'Bhaji',
    rate: 3.2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Chilli_Bites_%28Bhaji%29.jpg',
    price: '11',
  },
  {
    label: 'Paneer butter masala',
    rate: 4.2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Popular_Indian_dish%2C_Paneer_Butter_Masala.jpg',
    price: '18',
  },
  {
    label: 'Hummus',
    rate: 4.8,
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Hummus_from_The_Nile.jpg',
    price: '10.99',
  },
];

function DishItem({ children, label, price, img, rate, ...props }) {
  return (
    <Flex
      maxW="220px"
      maxH="220px"
      minW="220px"
      minH="220px"
      borderRadius="6"
      direction="column"
      justifyContent="space-between"
      style={{
        background: `url(${img}) center/cover no-repeat`,
      }}
      p="2"
    >
      <Flex w="full" justifyContent="space-between">
        <Text
          bg="rgba(0,0,0,0.65)"
          color="gray.50"
          py="1"
          px="2"
          borderRadius="xl"
        >
          <Icon as={AiFillStar} color="yellow.200" boxSize="12px" /> {rate}
        </Text>
        <Text>
          <Switch />
        </Text>
      </Flex>
      <Flex direction="column">
        <Box>
          <Text
            bg="rgba(0,0,0,0.8)"
            display="inline-block"
            color="gray.50"
            p="1"
            borderRadius="lg"
          >
            {label}
          </Text>
        </Box>
        <Box mt="1">
          <Text
            bg="gray.50"
            py="1px"
            px="1"
            color="gray.100"
            borderRadius="lg"
            style={{ backgroundColor: 'rgb(0,0,0,0.5)' }}
            display="inline-block"
          >
            RM {price}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default function Home() {
  return (
    <Flex mt="3" minW="full" minH="full" direction="column" rowGap="10">
      <Flex flex="1">
        <HStack w="65%" spacing="6">
          <Input placeholder="Search"></Input>
          <Button
            h="full"
            px={4}
            variant="outline"
            leftIcon={<BsFilter />}
            fontWeight="normal"
          >
            Filter
          </Button>
        </HStack>
      </Flex>

      <Flex
        direction="row"
        columnGap="10"
        minH="100%"
        h="full"
        w="full"
        flex="1"
      >
        <Flex w="65%" direction="column">
          <Flex
            w="full"
            fontSize="sm"
            direction="row"
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
          >
            <HStack h="full">
              <Text color="gray.700">137</Text>
              <Text color="gray.500">meals found</Text>
            </HStack>

            <HStack h="full">
              <Text m="0">Sorted by:</Text>
              <Select
                border="none"
                color="gray.800"
                type="sm"
                outline="none"
                size="sm"
                w="auto"
                p="0"
                m="0"
                sx={{ 'padding-inline-start': '0' }}
              >
                <option>Price</option>
                <option>Ratings</option>
              </Select>
            </HStack>
          </Flex>
          <Flex
            w="full"
            h="full"
            columnGap="10"
            rowGap="5"
            flex="1"
            flexWrap="wrap"
          >
            {dummyItems.map((el) => (
              <DishItem key={el.label} {...el} />
            ))}
          </Flex>
        </Flex>
        <Flex flex="1">
          <Box w="full">
            <HStack>
              <Icon
                as={MdKeyboardArrowRight}
                transform="rotate(90deg)"
                boxSize="6"
              />
              <Text fontSize="md" fontWeight="bold">
                Time
              </Text>
            </HStack>

            <VStack spacing="1" my="2" mb="4" ml="8" align="flex-start">
              <Text>Breakfast</Text>
              <Text>Lunch</Text>
              <Text>Dinner</Text>
            </VStack>

            <HStack>
              <Icon
                as={MdKeyboardArrowRight}
                transform="rotate(90deg)"
                boxSize="6"
              />
              <Text fontSize="md" fontWeight="bold">
                Type
              </Text>
            </HStack>

            <VStack spacing="1" mb="4" mt="2" ml="8" align="flex-start">
              <Text>Vegan</Text>
              <Text>Vegetarian</Text>
            </VStack>

            <HStack>
              <Icon
                as={MdKeyboardArrowRight}
                transform="rotate(90deg)"
                boxSize="6"
              />
              <Text fontSize="md" fontWeight="bold">
                Religion
              </Text>
            </HStack>

            <VStack spacing="1" mt="2" ml="8" align="flex-start">
              <Text>Halal</Text>
              <Text>Kosher</Text>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Home.layout = Sidebar;
