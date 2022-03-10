import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Flex, VStack } from '@chakra-ui/react';
import Cart from '../src/sections/Cart';
import Details from '../src/sections/Details';
import SidebarOld from '../src/sections/nav/SidebarOld';
import Sidebar from '../src/sections/nav/Sidebar';

const Home = () => {
  return (
    <Flex>
      <Details />
    </Flex>
  );
};

Home.layout = Sidebar;
export default Home;
