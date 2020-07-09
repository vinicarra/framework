import { useState, useCallback } from 'react';

/*
 * Numa aplicação em larga escala isso não é aplicável, mas para
 * não adicionar muito mais complexidade no uso do Realm (que infelizmente
 * não facilita os updates com hooks), atualizaremos o componente manualmente
 * */

export function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);
  return update;
}
