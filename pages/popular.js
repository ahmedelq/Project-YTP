import { Container, Flex, VStack, Text } from '@chakra-ui/react';
import Popular from '../src/sections/Popular';

export default function Home() {
  return (
    <Flex>
      <Popular HeadTitle="Popular dishes" />
    </Flex>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Home.layout = Sidebar;
