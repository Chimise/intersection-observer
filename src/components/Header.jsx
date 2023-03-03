import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header
      ref={ref}
      className="p-3 flex items-center bg-slate-600"
      {...props}
    >
      <h2 className="text-md font-semibold text-white">Observer</h2>
    </header>
  );
});

export default Header;
