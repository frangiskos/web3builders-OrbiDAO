import { Program, AnchorProvider, web3 } from '@coral-xyz/anchor';
import idl from '../idl/voting.json';

const idl_string = JSON.stringify(idl);
const idl_object = JSON.parse(idl_string);

export const getProgram = (wallet: any, connection: web3.Connection) => {
  const provider = new AnchorProvider(
    connection,
    // @ts-ignore
    wallet,
    AnchorProvider.defaultOptions()
  );

  return new Program(idl_object, idl.metadata.address, provider);
};
