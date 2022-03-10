import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  Textarea,
  Container,
  Flex,
  Text,
  Image,
  Avatar,
  Box,
  VStack,
  Heading,
  SimpleGrid,
  GridItem,
  Grid,
  HStack,
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

export default function Cart() {
  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <VStack spacing="3" alignItems="flex-start">
        <Heading size="md">Basic details</Heading>
        <Text>Please provide all the necessary details for this dish.</Text>
      </VStack>

      <SimpleGrid w="full" columns="3" columnGap="3" rowGap="6">
        <GridItem colSpan="1">
          <FormControl>
            <FormLabel>Item name</FormLabel>
            <Input placeholder="Big breakfast" />
          </FormControl>
        </GridItem>
        <GridItem colSpan="1">
          <FormControl>
            <FormLabel>Type </FormLabel>
            <Select>
              <option>Non-vegetarian</option>
              <option>Vegetarian</option>
              <option>Vegan</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan="1">
          <FormControl>
            <FormLabel>Code</FormLabel>
            <Input placeholder="KBS (Optional)" />
          </FormControl>
        </GridItem>

        <GridItem colSpan="1">
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea resize="none"></Textarea>
          </FormControl>
        </GridItem>
        <GridItem colSpan="1">
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select>
              <option>Breakfast</option>
              <option>Launch</option>
              <option>Dinner</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan="1">
          <FormControl>
            <FormLabel>Sub-category</FormLabel>
            <Select>
              <option>Food-1</option>
              <option>Food-2</option>
              <option>Food-3</option>
            </Select>
          </FormControl>
        </GridItem>
      </SimpleGrid>
      <VStack spacing="1" alignItems="flex-start">
        <Heading size="md">Item photos</Heading>
        <Text color="gray.400">Add images of your dish (max of 5 photos).</Text>
      </VStack>
      <HStack h="200px" w="full" alignItems="stretch">
        <Box
          p={1.5}
          display="flex"
          h="full"
          w="200px"
          border="1px"
          borderRadius="sm"
          alignItems="center"
          borderColor="blue.400"
        >
          <Image
            alt="food"
            h="full"
            w="full"
            objectFit="cover"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Arabic_coffee_with_dates.jpg"
          />
        </Box>

        <Box
          w="200px"
          bg="gray.100"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <AddIcon color="blue.500" boxSize="24px" />
        </Box>
      </HStack>
    </VStack>
  );
}
