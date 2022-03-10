import {
  Container,
  Flex,
  Heading,
  Box,
  VStack,
  HStack,
  Text,
  SimpleGrid,
  GridItem,
  Icon,
  Button,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';

function LeftPanel() {
  return (
    <VStack
      flex="1"
      color="gray.100"
      justifyContent="space-around"
      justifyItems="space-around"
      alignContent="space-around"
    >
      <Text fontSize="8xl">12:48</Text>
      <Text fontSize="3xl">Wednesday 19th, January</Text>
      <Box bg="red.100" minW="220px" minH="220px"></Box>
      <Button color="black" leftIcon={<FiLogOut />}>
        Logout
      </Button>
    </VStack>
  );
}

function PinButton({ code, ...props }) {
  return (
    <Button
      borderRadius="full"
      color="white"
      bg="rgba(255,255,255,0.2)"
      width="60px"
      h="60px"
      fontSize="2xl"
      borderColor="white"
      borderWidth="1px"
      {...props}
    >
      {code}
    </Button>
  );
}

function RightPanel() {
  return (
    <VStack
      flex="1"
      justifyContent="space-around"
      justifyItems="space-around"
      alignContent="space-around"
    >
      <VStack my="auto" minH="120px" color="gray.100">
        <HStack color="white" spacing="3">
          <PinButton w="15px" h="5px" />
          <PinButton w="15px" h="5px" />
          <PinButton w="15px" h="5px" />
          <PinButton w="15px" h="5px" />
        </HStack>
        <Text fontSize="3xl">Enter your 4 digit pin</Text>
        <VStack spacing="5">
          <HStack color="white" spacing="3">
            <PinButton code="1" />
            <PinButton code="2" />
            <PinButton code="3" />
          </HStack>
          <HStack color="white" spacing="3">
            <PinButton code="4" />
            <PinButton code="5" />
            <PinButton code="6" />
          </HStack>
          <HStack spacing="3" color="white">
            <PinButton code="7" />
            <PinButton code="8" />
            <PinButton code="9" />
          </HStack>
          <HStack color="white" spacing="3">
            <PinButton code="0" />
          </HStack>
        </VStack>
      </VStack>
      <Button color="black" px="10">
        Clear
      </Button>
    </VStack>
  );
}
export default function Home() {
  return (
    <Container bg="gray.800" minW="100vw" minH="100vh">
      <Flex direction="row" w="full" h="full" minH="100vh" p="12">
        <LeftPanel />
        <RightPanel />
      </Flex>
    </Container>
  );
}
