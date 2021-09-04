import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface PropfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: PropfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Lima</Text>
          <Text color="gray.300" fontSize="small">
            contato@felipedslima.com.br
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Felipe Lima"
        src="https://github.com/felipe-ds-lima.png"
      />
    </Flex>
  );
}
