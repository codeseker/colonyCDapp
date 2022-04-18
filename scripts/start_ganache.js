#!/usr/bin/env node

const waitOn = require('wait-on');
const { spawn } = require('child_process');
const { ROOT_PATH } = require('./paths');

let stdio;

const startGanache = async () => {
  const process = spawn(
    'ganache-cli',
    [
      '--h', '0.0.0.0',
      '--acctKeys', './src/lib/colonyNetwork/ganache-accounts.json',
      '--noVMErrorsOnRPCResponse',
      '--gasLimit', '6721975',
      '--account', '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae,100000000000000000000',
      '--account', '0xe9aebe8791ad1ebd33211687e9c53f13fe8cca53b271a6529c7d7ba05eda5ce2,100000000000000000000',
      '--account', '0x6f36842c663f5afc0ef3ac986ec62af9d09caa1bbf59a50cdb7334c9cc880e65,100000000000000000000',
      '--account', '0xf184b7741073fc5983df87815e66425928fa5da317ef18ef23456241019bd9c7,100000000000000000000',
      '--account', '0x7770023bfebe3c8e832b98d6c0874f75580730baba76d7ec05f2780444cc7ed3,100000000000000000000',
      '--account', '0xa9442c0092fe38933fcf2319d5cf9fd58e3be5409a26e2045929f9d2a16fb090,100000000000000000000',
      '--account', '0x06af2c8000ab1b096f2ee31539b1e8f3783236eba5284808c2b17cfb49f0f538,100000000000000000000',
      '--account', '0x7edaec9e5f8088a10b74c1d86108ce879dccded88fa9d4a5e617353d2a88e629,100000000000000000000',
      '--account', '0xe31c452e0631f67a629e88790d3119ea9505fae758b54976d2bf12bd8300ef4a,100000000000000000000',
      '--account', '0x5e383d2f98ac821c555333e5bb6109ca41ae89d613cb84887a2bdb933623c4e3,100000000000000000000',
      '--account', '0x33d2f6f6cc410c1d46d58f17efdd2b53a71527b27eaa7f2edcade351feb87425,100000000000000000000',
      '--account', '0x32400a48ff16119c134eef44e2627502ce6e367bc4810be07642275a9db47bf7,100000000000000000000',
      '--account', '0x2a0f58ae46261b4ec4b635bde4bfabb680245c2a3abff7f54945ae44f7629b1d,100000000000000000000',
      '--account', '0x94fe165ae1db4f7d24fa5506ecbf083dcb934823600cb56e2a191722f0b40903,100000000000000000000',
      '--account', '0xc93aad16dd4aca2fa61316f83307362306ad6b2fc3e4a91801ce9010be7d9b63,100000000000000000000',
      '--account', '0x27f8f0be23a027196c7b8f4c98502b113e3fa1474fc10eda21ef3b5473c1b773,100000000000000000000',
      '--account', '0xb6245e0d2b64a92c0e6359500231087278f499de46fdfa351d4f1e09faf95a47,100000000000000000000',
      '--account', '0xfe6066af949ec3c2c88ac10f47907c6d4e200c37b28b5af49e7d0ffd5c301c5c,100000000000000000000',
    ],
    {
      stdio,
      cwd: ROOT_PATH,
    },
  );
  await waitOn({ resources: ['tcp:8545'] });
  return process;
};

if (require.main === module) {
  stdio = 'inherit';
  startGanache();
} else {
  stdio = 'pipe';
  module.exports = startGanache;
}
