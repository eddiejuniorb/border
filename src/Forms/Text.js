import React from "react";

function Text({
  type = "text",
  id,
  value,
  onChange,
  className,
  title,
  placeHolder,
}) {
  return (
    <div className={`px-3.5 border border-slate-400 rounded min-w-full w-72`}>
      <label className="text-xs text-orange-600 w-full" htmlFor={id}>
        {title}:
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeHolder || "type here"}
        className="text-sm mt-0.5 outline-none w-full pb-1.5"
      />
    </div>
  );
}

export default Text;
