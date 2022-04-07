import { Container, Flex, VStack, Text } from '@chakra-ui/react';
import signatureDishes from '../src/sections/signatureDishes';
import Popular from '../src/sections/Popular';

export default function Home() {
  return (
    <Flex>
      <signatureDishes HeadTitle="Signature Dishes" />
      <signatureDishes/>
      {/* <Popular/>x` */}
      {/* <signatureDishes/> */}
    </Flex>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Home.layout = Sidebar;
