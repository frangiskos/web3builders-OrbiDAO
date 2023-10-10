export const Circle = () => (
  <>
    <div className="overflow-hidden absolute inset-0 flex items-center justify-center bg-gradient-to-b from-zinc-900"></div>
    <div className="overflow-hidden absolute inset-0 flex items-center justify-center">
      <div
        style={{
          width: 'calc(90vh - 170px)',
          height: 'calc(90vh - 170px)',
          borderRadius: 1000,
          border: '0px #A6C5DB solid',
          boxShadow: '0px 0px 20px 0px',
        }}
      />
    </div>
    <div className="overflow-hidden absolute inset-0 flex items-center justify-center bg-gradient-to-b from-zinc-900 backdrop-blur-[30px] z-0"></div>
  </>
);
