import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Wrapper } from './styles';

export default function Loading() {
  return (
    <Wrapper>
      <ActivityIndicator size="large" />
    </Wrapper>
  );
}
