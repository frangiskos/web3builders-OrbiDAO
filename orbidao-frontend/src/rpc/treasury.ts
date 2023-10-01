import { PublicKey, Connection, SystemProgram, SYSVAR_RENT_PUBKEY } from '@solana/web3.js';
import { Program, AnchorProvider } from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import idl from '../idl/treasury.json';

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

  // TODO: FIX IDL idl.metadata.address reference. Modified so that it won't generate errors during project build (pnpm run build) process
  const idl_metadata_address = '';

  return new Program(idl_object, idl_metadata_address, provider);
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

async function initializeTreasuryProgram(
  wallet: any,
  connection: Connection,
  owner: PublicKey,
  vaultState: PublicKey,
  vaultAuth: PublicKey,
  vault: PublicKey
) {
  const program = getProgram(wallet, connection) as Program;

  // Call the initialize method.
  await program.methods
    .initialize()
    .accounts({
      owner: owner,
      vaultState: vaultState,
      vaultAuth: vaultAuth,
      vault: vault,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

async function deposit(
  wallet: any,
  connection: Connection,
  amount: number,
  owner: PublicKey,
  vaultState: PublicKey,
  vaultAuth: PublicKey,
  vault: PublicKey
) {
  const program = getProgram(wallet, connection) as Program;

  // Call the initialize method.
  await program.methods
    .deposit(amount)
    .accounts({
      owner: owner,
      vaultState: vaultState,
      vaultAuth: vaultAuth,
      vault: vault,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

async function withdraw(
  wallet: any,
  connection: Connection,
  amount: number,
  owner: PublicKey,
  vaultState: PublicKey,
  vaultAuth: PublicKey,
  vault: PublicKey
) {
  const program = getProgram(wallet, connection) as Program;

  // Call the initialize method.
  await program.methods
    .withdraw(amount)
    .accounts({
      owner: owner,
      vaultState: vaultState,
      vaultAuth: vaultAuth,
      vault: vault,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

async function depositSpl(
  wallet: any,
  connection: Connection,
  amount: number,

  owner: PublicKey,
  ownerAta: PublicKey,
  vaultState: PublicKey,
  vaultAta: PublicKey,
  tokenMint: PublicKey
) {
  const program = getProgram(wallet, connection) as Program;

  // Call the initialize method.
  await program.methods
    .deposit(amount)
    .accounts({
      owner: owner,
      ownerAta: ownerAta,
      vaultState: vaultState,
      vaultAta: vaultAta,
      tokenMint: tokenMint,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

async function withdrawSpl(
  wallet: any,
  connection: Connection,
  amount: number,
  owner: PublicKey,
  ownerAta: PublicKey,
  vaultAta: PublicKey,
  vaultAuth: PublicKey,
  vaultState: PublicKey,
  tokenMint: PublicKey
) {
  const program = getProgram(wallet, connection) as Program;

  // Call the initialize method.
  await program.methods
    .withdrawSpl(amount)
    .accounts({
      owner: owner,
      ownerAta: owner,
      vaultState: vaultState,
      vaultAuth: vaultAuth,
      vaultAta: vaultAta,
      tokenMint: tokenMint,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .rpc();
}
