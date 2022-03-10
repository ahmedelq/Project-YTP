import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  Collapse,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  BoxProps,
  Avatar,
  FlexProps,
  Input,
  HStack,
  DrawerOverlay,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSearch,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import {
  MdOutlineAssignment,
  MdOutlineReviews,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { BiFoodMenu } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
const LinkItems = [
  { name: 'Dashboard', icon: FiHome, link: '/' },
  {
    name: 'Menu',
    icon: BiFoodMenu,
    sub: [
      { name: 'Add', icon: AiOutlineFileAdd, link: '/add' },
      { name: 'Browse', icon: MdOutlineFeaturedPlayList, link: '/browse' },
      { name: 'Promo/Deals', icon: HiOutlineSpeakerphone, link: '/promo' },
      { name: 'Popular dishes', icon: FiStar, link: '/popular' },
    ],
  },
  { name: 'Order', icon: MdOutlineAssignment, link: '/orders' },
  { name: 'Table', icon: BsGrid, link: '/table' },
  { name: 'Review', icon: MdOutlineReviews, link: '/review' },
];

const NavItem = ({ icon, sub, link, children, ...props }) => (
  <NextLink href={link ? link : `#`}>
    <Flex
      align="center"
      cursor="pointer"
      px="4"
      py="3"
      p="4"
      mt="3"
      mx="4"
      borderRadius="lg"
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.900'),
        color: useColorModeValue('gray.900', 'gray.200'),
      }}
      role="group"
      fontWeight="semibold"
      transition=".25s ease"
      {...props}
    >
      {icon && (
        <Icon
          mr="4"
          boxSize={4}
          _groupHover={{
            color: 'gray.900',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  </NextLink>
);

function SidebarMenu({ children, items, ...props }) {
  return (
    <Box
      as="nav"
      zIndex="sticky"
      pos="fixed"
      h="full"
      w="60"
      overflow="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderRight="1px"
      borderColor={useColorModeValue('inherit', 'gray.700')}
      maxWidth={60}
      {...props}
    >
      <Flex align="center" p="0" m="4" mt="7" cursor="default">
        <Box minW="60px" minH="100%" bg="gray.100"></Box>
        <Text ml="2" fontSize="2xl">
          YouTopia
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {LinkItems.map(function (link) {
          const integrations = useDisclosure();
          return (
            <>
              <NavItem
                key={link.name}
                {...link}
                onClick={integrations.onToggle}
              >
                {link.name}{' '}
                {link.sub && (
                  <Icon
                    as={MdKeyboardArrowRight}
                    ml="auto"
                    transform={integrations.isOpen && 'rotate(90deg)'}
                  ></Icon>
                )}
              </NavItem>

              {link.sub && (
                <Collapse in={integrations.isOpen}>
                  {link.sub.map((sublink) => (
                    <NavItem
                      key={`sub-` + sublink.name}
                      {...sublink}
                      icon={sublink.icon}
                    >
                      {sublink.name}
                    </NavItem>
                  ))}
                </Collapse>
              )}
            </>
          );
        })}
      </Flex>
    </Box>
  );
}

export default function Headers({ children }) {
  const sidebar = useDisclosure();

  return (
    <Box as="section" minH="100vh">
      <SidebarMenu display={{ base: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarMenu w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          borderBottom="1px"
          borderBottomColor="gray.200"
          as="header"
          align="center"
          justify="flex-end"
          w="full"
          px="4"
          bg={useColorModeValue('white', 'gray.800')}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Text ml="4">Restaurant X</Text>
            <Avatar
              ml="1"
              size="sm"
              src="https://avatars3.githubusercontent.com/u/100200?s=460&v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box as="main" p="4" h="full">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
