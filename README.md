# midnightzk-anchor

Compact source code for the MidnightZK platform's on-chain data hash anchoring contract.

Deployed by MidnightZK on behalf of authenticated enterprise tenants (single-deployer model: tenants do not deploy or hold operator keys; they interact via the platform's M2M Gateway).

## Status

- Preprod deployed: 2026-03-28
- Preprod contract address: `90d132a94a678f188a7371f626aa637224eaee8bee28ca66174ff1cfc21bee30`
- Mainnet: pending deployment authorization

## Build

```
compact compile anchor.compact managed
```

Toolchain: `compactc 0.31.0` / language `0.23.0` / runtime `0.16.0`.

## License

Apache License 2.0
