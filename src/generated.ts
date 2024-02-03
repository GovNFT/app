//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// govnftSugar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x2afCa920f4c0B01B120EcA4396C0379a7e40c07f)
 */
export const govnftSugarAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_nft', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', type: 'address' }],
    name: 'all',
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        components: [
          { name: 'id', type: 'uint256' },
          { name: 'total_locked', type: 'uint256' },
          { name: 'amount', type: 'uint256' },
          { name: 'total_claimed', type: 'uint256' },
          { name: 'claimable', type: 'uint256' },
          { name: 'split_count', type: 'uint256' },
          { name: 'cliff_length', type: 'uint256' },
          { name: 'start', type: 'uint256' },
          { name: 'end', type: 'uint256' },
          { name: 'token', type: 'address' },
          { name: 'vault', type: 'address' },
          { name: 'minter', type: 'address' },
          { name: 'owner', type: 'address' },
          { name: 'address', type: 'address' },
          { name: 'delegated', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nft',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x2afCa920f4c0B01B120EcA4396C0379a7e40c07f)
 */
export const govnftSugarAddress = {
  10: '0x2afCa920f4c0B01B120EcA4396C0379a7e40c07f',
} as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x2afCa920f4c0B01B120EcA4396C0379a7e40c07f)
 */
export const govnftSugarConfig = {
  address: govnftSugarAddress,
  abi: govnftSugarAbi,
} as const
