import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<PS> = {
  localSecretKey(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
}

export type ImpureCircuits<PS> = {
  anchor(context: __compactRuntime.CircuitContext<PS>, fact_hash_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  rotateOwner(context: __compactRuntime.CircuitContext<PS>,
              newOwner_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
}

export type ProvableCircuits<PS> = {
  anchor(context: __compactRuntime.CircuitContext<PS>, fact_hash_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  rotateOwner(context: __compactRuntime.CircuitContext<PS>,
              newOwner_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
}

export type PureCircuits = {
  publicKey(sk_0: Uint8Array): Uint8Array;
}

export type Circuits<PS> = {
  publicKey(context: __compactRuntime.CircuitContext<PS>, sk_0: Uint8Array): __compactRuntime.CircuitResults<PS, Uint8Array>;
  anchor(context: __compactRuntime.CircuitContext<PS>, fact_hash_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  rotateOwner(context: __compactRuntime.CircuitContext<PS>,
              newOwner_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
}

export type Ledger = {
  readonly last_anchor_hash: Uint8Array;
  readonly anchor_count: bigint;
  readonly owner: Uint8Array;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>,
               initialOwner_0: Uint8Array): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
