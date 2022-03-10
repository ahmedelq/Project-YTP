import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Container, Flex, VStack } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
