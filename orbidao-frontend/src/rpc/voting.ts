import {
  PublicKey,
  Connection,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
} from '@solana/web3.js';
import { Program, AnchorProvider } from '@coral-xyz/anchor';
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import idl from '../idl/voting.json';

// default programs
const stakingProgramKey = new PublicKey('STAKING_PUBLIC_KEY');
const proposalProgramKey = new PublicKey('PROPOSAL_PUBLIC_KEY');
const configProgramKey = new PublicKey('CONFIG_PUBLIC_KEY');
const issueProgramKey = new PublicKey('ISSUE_PUBLIC_KEY');

const idl_string = JSON.stringify(idl);
const idl_object = JSON.parse(idl_string);

const getProgram = (wallet: any, connection: Connection) => {
  const provider = new AnchorProvider(
    connection,
    // @ts-ignore
    wallet,
    AnchorProvider.defaultOptions()
  );

  return new Program(idl_object, idl.metadata.address, provider);
};

// Call the initialize method
async function initializeVotingProgram(
  wallet: any,
  connection: Connection,
  initializer: PublicKey,
  auth: PublicKey,
  config: PublicKey,
  stakingProgram: PublicKey = stakingProgramKey,
  proposalProgram: PublicKey = proposalProgramKey,
  configProgram: PublicKey = configProgramKey,
  issueProgram: PublicKey = issueProgramKey
) {
  const program = getProgram(wallet, connection) as Program;

  await program.methods
    .initialize()
    .accounts({
      initializer: initializer,
      auth: auth,
      config: config,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

// Call the voteNft method
async function voteNft(
  wallet: any,
  connection: Connection,
  amount: number,
  choice: number,
  owner: PublicKey,
  config: PublicKey
) {
  const program = getProgram(wallet, connection) as Program;

  await program.methods
    .voteNft(amount, choice)
    .accounts({
      owner: owner,
      config: config,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

// Call the cleanupVoteNft method
async function cleanupVoteNft(
  wallet: any,
  connection: Connection,
  owner: PublicKey,
  config: PublicKey
) {
  const program = getProgram(wallet, connection) as Program;

  await program.methods
    .cleanupVoteNft()
    .accounts({
      owner: owner,
      config: config,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

// Call the removeVoteNft method
async function removeVoteNft(
  wallet: any,
  connection: Connection,
  owner: PublicKey,
  config: PublicKey
) {
  const program = getProgram(wallet, connection) as Program;

  await program.methods
    .removeVoteNft()
    .accounts({
      owner: owner,
      config: config,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

// Call the issueTokens method
async function issueTokens(
  wallet: any,
  connection: Connection,
  initializer: PublicKey,
  initializerAta: PublicKey,
  auth: PublicKey,
  mint: PublicKey,
  config: PublicKey,
  coreConfig: PublicKey
) {
  const program = getProgram(wallet, connection) as Program;

  await program.methods
    .issueTokens()
    .accounts({
      initializer: initializer,
      initializerAta: initializerAta,
      auth: auth,
      mint: mint,
      config: config,
      coreConfig: coreConfig,

      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      rentProgram: SYSVAR_RENT_PUBKEY,
    })
    .rpc();
}
