import { Button } from '@/components/ui/Button';
import { Background } from './Background';

export default function Page() {
  return (
    <>
      <Background />
      <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-5xl px-4">
        <h3 className="text-3xl">Create a new organization</h3>
        <div className="w-[440px] text-xl text-center my-8">Select a template below</div>

        <div className="flex gap-8 mt-4">
          <div className="w-40 h-40 relative">
            <div className="w-40 h-40 left-0 top-0 absolute bg-zing-200 rounded-[10px] border border-white border-opacity-20 border-dashed" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">Blank</div>
          </div>

          <div className="w-40 h-40 relative">
            <div className="w-40 h-40 left-0 top-0 absolute bg-gradient-to-b from-zinc-800 to-gray-700 rounded-[10px] border border-indigo-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              Delaware
              <br />
              C-Corp
            </div>
          </div>
          <div className="w-40 h-40 relative">
            <div className="w-40 h-40 left-0 top-0 absolute bg-zing-200 rounded-[10px] border border-white border-opacity-20 border-dashed" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              NFT
              <br />
              Community
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 text-sm text-white text-opacity-50">
          <span className="text-slate-400 mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </span>
          An on-chain replica of a traditional Delaware C-Corp
        </div>
      </div>
    </>
  );
}
