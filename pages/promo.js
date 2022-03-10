import { Container, Flex, VStack, Text } from '@chakra-ui/react';

import TableView from '../src/tableView';

export default function Home() {
  return (
    <Flex>
      <TableView HeadTitle="Promo/Deals" />
    </Flex>
  );
}
import Sidebar from '../src/sections/nav/Sidebar';
Home.layout = Sidebar;
