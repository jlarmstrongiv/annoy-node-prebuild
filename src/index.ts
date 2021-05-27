const addon = require("bindings")("annoy-node.node");

export enum Metric {
  ANGULAR = 1,
  EUCLIDEAN,
  MANHATTAN,
  DOTPRODUCT,
}
export interface AnnoyIndex {
  addItem(item: Number, data: Float64Array): void;
  build(treeSize: Number, threads?: Number): void;
  save(path: string): void;
  load(path: string): void;
  unload(): void;
  get_nns_by_item(item: Number, n: Number): Array<Int32Array>;
  get_nns_by_vector(item: Float64Array, n: Number): Array<Int32Array>;
}

export const AnnoyIndex: {
  new (vectorSize: number, metric: Metric): AnnoyIndex;
} = addon.AnnoyIndex;

export default AnnoyIndex;