type KeySelector<T> = (item: T) => string;

export const arrayToObject = <T>(
  array: Iterable<T>,
  keySelector: KeySelector<T>
): Record<string, T> => {
  return Array.from(array).reduce(
    (acc, item) => Object.assign(acc, { [keySelector(item)]: item }),
    {}
  );
};
