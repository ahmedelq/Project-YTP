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
  CheckboxGroup,
  Checkbox,
  Stack,
  useColorModeValue,
  Circle,
  Tooltip,
  chakra,FiShoppingCart,Rating,
  Button,
  Badge,
  List,
  ListItem,
  Switch,
  Icon,
  Select,
  Link,
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





// TEST
const data = {
  isNew: true,
  imageURL:
    'https://upload.wikimedia.org/wikipedia/commons/f/fd/Chicken_tikka_masala.jpg',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};








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
    <Link href='/edit' >
    <Flex
      maxW="220px"
      // maxH="220px"
      maxH='280'    

      minW="220px"
      // minH="220px"
      minH='280'

      border="5px solid black"
      borderRadius="6"
      direction="column"
      justifyContent="space-between"
      // style={{
      //   background: `url(${img})  100% 70% cover/contain no-repeat`,
      // }}
      p="2"
    >
      <Flex  w="full" >
      <Image
           w="full"
        
          borderRadius="lg"
          src={img}
          
        />
      </Flex>
      
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
          <Switch isChecked/>
        </Text>

      </Flex>


      {/* <Flex >
      <Image h="40%"
      w="full" src={img}></Image>
      </Flex> */}


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
    
     </Link>
  );
}

export default function Home(props) {// props added
  return (
    <Flex mt="3" minW="full" minH="full" direction="column" rowGap="10">
      <Flex flex="1">
        {/* width was 65 */}
        <HStack w="65%" spacing="6" >
          <Input placeholder="Search for dish"></Input>
          <Button
            h="full"
            px={4}
            variant="outline"
            // leftIcon={<BsFilter />}
            fontWeight="normal"
          >
            Search
          </Button>
          
        </HStack>
        {/* was with search HSTACK */}
        <HStack> <Button ml={20} bg="black" fontWeight="bold" color="gray.100"><Link href='/add'>Add Dish</Link></Button></HStack>
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
              <Text m="0" fontWeight="bold">Sort by :</Text>
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

          {/* dishes card */}
          <Flex
            w="full"
            h="full"
            mt="10"
            columnGap="10"
            rowGap="5"
            flex="1"
            flexWrap="wrap"
            
          >
            {dummyItems.map((el) => (
              <DishItem key={el.label} {...el} />
            ))}
          </Flex>






          {/* TEST */}
          
          {/* <Flex p={50} w="full" h="auto" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          h="400"
          w="350"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex> */}

          {/* <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex> */}
        {/* </Box>
      </Box>
    </Flex> */}

















        </Flex>
        <Flex flex="1">
          <Box w="full">
            <HStack>
              {/* <Icon
                as={MdKeyboardArrowRight}
                transform="rotate(90deg)"
                boxSize="6"
              /> */}
              <Text fontSize="md" fontWeight="bold">
                Time
              </Text>
            </HStack>

            <VStack spacing="1" my="2" mb="4" ml="8" align="flex-start">
              {/* <Text>Breakfast</Text>
              <Text>Lunch</Text>
              <Text>Dinner</Text> */}
              <CheckboxGroup colorScheme='green' >
                <Checkbox value='breakfast'>Breakfast</Checkbox>
                <Checkbox value='lunch'>Lunch</Checkbox>
                <Checkbox value='dinner'>Dinner</Checkbox>
            </CheckboxGroup>
            </VStack>

            <HStack>
              {/* <Icon
                as={MdKeyboardArrowRight}
                transform="rotate(90deg)"
                boxSize="6"
              /> */}
              <Text fontSize="md" fontWeight="bold">
                Type
              </Text>
            </HStack>

            <VStack spacing="1" mb="4" mt="2" ml="8" align="flex-start">
              {/* <Text>Vegan</Text>
              <Text>Vegetarian</Text> */}
              <CheckboxGroup colorScheme='green' >
              {/* <Stack spacing={[1, 5]} direction={['column', 'row']}> */}
                <Checkbox value='vegan'>Vegan</Checkbox>
                <Checkbox value='vegetarian'>Vegetarian</Checkbox>
              {/* </Stack> */}
            </CheckboxGroup>
            </VStack>


            <HStack>
              {/* <Icon
                as={MdKeyboardArrowRight}
                transform="rotate(90deg)"
                boxSize="6"
              /> */}
              <Text fontSize="md" fontWeight="bold">
                Category
              </Text>
            </HStack>

            <VStack spacing="1" mb="4" mt="2" ml="8" align="flex-start">
              {/* <Text>Vegan</Text>
              <Text>Vegetarian</Text> */}
              <CheckboxGroup colorScheme='green' >
              {/* <Stack spacing={[1, 5]} direction={['column', 'row']}> */}
                <Checkbox id='MainCourse' value='mainCourse'>Main Course</Checkbox>
                <Checkbox id='drink' value='drink'>Drink</Checkbox>
                <Checkbox id='dessert' value='dessert'>Desert</Checkbox>

              {/* </Stack> */}
            </CheckboxGroup>
            </VStack>






            <HStack>
              {/* <Icon
                as={MdKeyboardArrowRight}
                transform="rotate(90deg)"
                boxSize="6"
              /> */}
              <Text fontSize="md" fontWeight="bold">
                Status
              </Text>
            </HStack>

            <VStack spacing="1" mb="4" mt="2" ml="8" align="flex-start">
              {/* <Text>Vegan</Text>
              <Text>Vegetarian</Text> */}
              <CheckboxGroup colorScheme='green' >
              {/* <Stack spacing={[1, 5]} direction={['column', 'row']}> */}
                <Checkbox id='avaliable' value='avaliable'>Avaliable</Checkbox>
                <Checkbox id='notav' value='notav'>Not Avaliable</Checkbox>
              {/* </Stack> */}
            </CheckboxGroup>
            </VStack>


            <HStack>
              {/* <Icon
                as={MdKeyboardArrowRight}
                transform="rotate(90deg)"
                boxSize="6"
              /> */}
              <Text fontSize="md" fontWeight="bold">
                Features
              </Text>
            </HStack>

            <VStack spacing="1" mb="4" mt="2" ml="8" align="flex-start">
              {/* <Text>Vegan</Text>
              <Text>Vegetarian</Text> */}
              <CheckboxGroup colorScheme='green' >
              {/* <Stack spacing={[1, 5]} direction={['column', 'row']}> */}
                <Checkbox id='avaliable' value='avaliable'>Signature</Checkbox>
                <Checkbox id='notav' value='notav'>Popular</Checkbox>
              {/* </Stack> */}
            </CheckboxGroup>
            </VStack>



              {/*  */}
            {/* <HStack> */}
              {/* <Icon
                as={MdKeyboardArrowRight}
                transform="rotate(90deg)"
                boxSize="6"
              /> */}
              {/* <Text fontSize="md" fontWeight="bold">
                Religion
              </Text> */}
            {/* </HStack> */}
{/* 
            <VStack spacing="1" mt="2" ml="8" align="flex-start">
              <Text>Halal</Text>
              <Text>Kosher</Text>
            </VStack> */}







          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Home.layout = Sidebar;
