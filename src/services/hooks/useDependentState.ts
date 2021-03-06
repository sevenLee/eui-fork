import { useEffect, useState, useRef } from 'react';

export function useDependentState<T>(
  valueFn: (previousState: undefined | T) => T,
  deps: unknown[]
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(valueFn as () => T);

  // use ref instead of a state to avoid causing an unnecessary re-render
  const hasMounted = useRef<boolean>(false);

  useEffect(() => {
    // don't call setState on initial mount
    if (hasMounted.current === true) {
      setState(valueFn);
    } else {
      hasMounted.current = true;
    }

    // purposefully omitting `updateCount.current` and `valueFn`
    // this means updating only the valueFn has no effect, but allows for more natural feeling hook use
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, setState];
}
