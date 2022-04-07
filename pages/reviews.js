import {
    Box,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    Container,
  Label,useDisclosure,Drawer,DrawerBody,DrawerOverlay,
  DrawerContent,DrawerCloseButton,DrawerHeader,
  Tabs,TabList,Tab,TabPanel,TabPanels,
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
    Tbody,
  } from '@chakra-ui/react';
  import { BsFilter, BsArrowDownShort } from 'react-icons/bs';
  import {
    AiFillPhone,
    AiOutlineSearch,
    AiOutlineArrowDown,
  } from 'react-icons/ai';
  import React from 'react';
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
      stars: '4',
      comment: "Delicious",
    },
    {
        stars: '3',
        comment: 'something',
      },
      {
        stars: '5',
        comment: 'Perfect',
      },
      {
        stars: '4',
        comment: '',
      },
      {
        stars: '1',
        comment: '',
      },
  ]
  
  export default function Reviews(props) {
     
  
    return (
      <VStack spacing={8} maxH="80vh" overflow="hidden">
        <Box w="full">
          <Heading size="xl">Customers Reviews</Heading>
        </Box>
        <Flex w="full" h="full" flex="1" minW="0" minH="0">
         
        </Flex>
      </VStack>
    );
  }
  
  import Sidebar from '../src/sections/nav/Sidebar';
 Reviews.layout = Sidebar;
  