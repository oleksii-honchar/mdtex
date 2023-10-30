export function Title() {
  return (
    <div className="w-full space-x-4 flex flex-col justify-center items-center">
      <p
        className={`
          text-md3-sys-light-primary
          font-bold
          text-xl 
        `}
      >
        MDTEX
      </p>
      <p
        className={`
          text-md3-sys-light-primary
          text-xs 
        `}
      >
        &quot;Material Design&quot; palette &amp; tokens explorer
      </p>
    </div>
  );
}
