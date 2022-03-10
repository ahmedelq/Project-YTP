import { Container, Flex, VStack, Text } from '@chakra-ui/react';

import TableView from '../src/tableView';

export default function Home() {
  return (
    <Flex>
      <TableView HeadTitle="Popular dishes" />
    </Flex>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Home.layout = Sidebar;
