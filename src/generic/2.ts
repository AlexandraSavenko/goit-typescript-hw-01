type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<K extends keyof AllType>(
  top: Pick<AllType, K>,
  bottom: Pick<AllType, K>
): AllType {
  return {
    ...top,
    ...bottom,
  } as AllType;
}
