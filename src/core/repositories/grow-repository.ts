export abstract class GrowRepository {
  abstract create(
    name: string,
    width: number,
    height: number,
    depth: number,
  ): Promise<void>;
}
