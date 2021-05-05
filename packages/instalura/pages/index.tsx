import React from 'react';
import styled from 'styled-components';
import { Button } from '@fernandoadriano/ui';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  return (
    <div>
      <Title>My page</Title>
      <Button>
        Enviar
      </Button>
    </div>
  );
}
