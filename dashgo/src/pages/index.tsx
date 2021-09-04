import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Flex, Stack } from '@chakra-ui/react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório.').email('E-mail inválido.'),
  password: Yup.string().required('Senha obrigatória.'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  console.log(formState.errors);

  const handleSignin: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Head>
        <title>Login | Dashgo</title>
      </Head>

      <Flex
        as="form"
        p="8"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={formState.errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
