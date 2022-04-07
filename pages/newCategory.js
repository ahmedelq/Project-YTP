import { Container, Flex, VStack, Text, Link } from '@chakra-ui/react';
import {FormControl,FormLabel,Input,Button} from '@chakra-ui/react';
import Details from '../src/sections/Details';

export default function Home() {
  return (
    <Flex>
       <VStack w="60%" h="full" p={10} spacing={10} alignItems="flex-start">
          <FormControl isRequired>
            <FormLabel paddingBottom={5} htmlFor='newCategory'>New Category</FormLabel>
            <Input id='newCategory' placeholder='New Category Name' />
            <Button m={10} background='black' color='white' type='submit'> <Link href='/add'>Add</Link></Button>
          </FormControl>
      </VStack>
    </Flex>
  );
}

import Sidebar from '../src/sections/nav/Sidebar';
Home.layout = Sidebar;
