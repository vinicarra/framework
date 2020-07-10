import React, { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import {
  Wrapper,
  ErrorContainer,
  ErrorDescription,
  ErrorTitle,
} from './styles';

export default function Loading({ status, retry }) {
  const error = useMemo(() => {
    return (
      <ErrorContainer onPress={retry}>
        <ErrorTitle>Não foi possível carregar os dados</ErrorTitle>
        <ErrorDescription>Toque para tentar novamente</ErrorDescription>
      </ErrorContainer>
    );
  }, [status]);

  return (
    <Wrapper>
      {status === 'loading' && <ActivityIndicator size="large" />}
      {status === 'error' && error}
    </Wrapper>
  );
}
