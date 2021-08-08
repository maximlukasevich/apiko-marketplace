import { Spinner as ChakraSpinner } from '@chakra-ui/spinner';

export const Spinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <ChakraSpinner size='lg' color='#349a89' />
    </div>
  );
};
