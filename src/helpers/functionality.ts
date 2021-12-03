export function delay(ms: number): Promise<number> {
  return new Promise(resolve =>
    setTimeout(() =>
      //@ts-ignore
      resolve(),
      ms))
}