"use client";
import ArrowDown from "../shared/icon/ArrowDown";


import {
  FieldErrors,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { Listbox } from "@headlessui/react";
import { ReactNode, useEffect, useState } from "react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface FormItemProps<T extends Record<string, any>> {
  name: Path<T>;
  title: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  errors: FieldErrors<T>;
  icon: ReactNode;
  setFocused: (e: boolean) => void;
  as?: "input" | "select" | "textarea" | "custom-select";
  children?: ReactNode;
  focused?: boolean;
  options?: { label: string; value: string }[]; // only for custom-select
  value?: string;
  onChangeCustomSelect?: (val: string) => void;
}

const FormItem = <T extends Record<string, any>>({
  name,
  title,
  placeholder,
  type = "text",
  register,
  rules,
  errors,
  icon,
  setFocused,
  as = "input",
  focused,
  children,
  options = [],
  value,
  onChangeCustomSelect,
}: FormItemProps<T>) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (errors[name]) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [errors, name]);

  return (
    <div className={`${as === "textarea" ? 'justify-start' : ''} item w-full flex flex-col relative`}>
      <label className="block font-normal text-sm mb-1">{title}</label>

      {as === "input" && (
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          {...register(name, {
            ...rules,
            onBlur: (e) => {
              setFocused(false);
              rules?.onBlur?.(e);
            },
          })}
          className="rounded-[12px] pr-[3em] bg-white outline-none w-full
                    focus:text-black focus:border focus:border-black focus:placeholder:text-black
                    p-2 placeholder:text-sm placeholder:text-[#9F9F9F]"
        />
      )}

      {as === "textarea" && (
        <textarea
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          {...register(name, {
            ...rules,
            onBlur: (e) => {
              setFocused(false);
              rules?.onBlur?.(e);
            },
          })}
          className="rounded-[12px] resize-[none] pr-[3em] bg-white outline-none w-full
                    focus:text-black focus:border focus:border-black focus:placeholder:text-black
                    p-2 placeholder:text-sm placeholder:text-[#9F9F9F]"
        />
      )}

      {as === "select" && (
        <select
          {...register(name, {
            ...rules,
            onBlur: (e) => {
              setFocused(false);
              rules?.onBlur?.(e);
            },
          })}
          onFocus={() => setFocused(true)}
          className={`rounded-[12px] pr-[3em] bg-white outline-none w-full border border-gray-300
                        p-2 appearance-none 
                        ${focused ? "text-black" : "text-[#9F9F9F]"}`}
        >
          <option value="" disabled hidden>
            {placeholder || "انتخاب کنید..."}
          </option>
          {children}
        </select>
      )}
      {as === "custom-select" && (
        <Listbox
          value={value}
          onChange={(val) => {
            setFocused(false);
            onChangeCustomSelect?.(val);
          }}
        >
          {({ open }) => (
            <div
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="relative"
            >
              <Listbox.Button className="relative w-full cursor-default rounded-[12px]
         bg-white py-2 pl-3 pr-10 text-right focus:outline-none">
                <span className={`block truncate pr-[.4em] ${open ? "text-black" : "text-[#9F9F9F]"}`}>
                  {options.find((opt) => opt.value === value)?.label || placeholder}
                </span>

                <span
                  className={`absolute left-3 top-[1em] h-fit bottom-0 z-10 transition-transform
                     duration-300 ${open ? "rotate-180 " : "rotate-0 "
                    }`}
                >
                  <ArrowDown width={15} height={15} fill={open ? "black" : "#9F9F9F"} />
                </span>
              </Listbox.Button>

              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md
         bg-white py-1 shadow-lg ring-opacity-5 focus:outline-none text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      `relative cursor-pointer w-[95%] mx-auto rounded-[12px] select-none py-2 pl-10 pr-4 ${active ? "bg-[#F5F5F5] text-black" : "text-black"
                      }`
                    }
                    value={option.value}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate  ${selected ? "font-medium" : "font-normal"}`}>
                          {option.label}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                            {/* CheckIcon if needed */}
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
          

            </div>
            
          )}
        </Listbox>
      )}


      <span
        className={`${as === "textarea" ? 'top-[37%]  right-[3%]' : 'top-[53%]  right-[5%]'}
                absolute before:contents-[''] before:absolute ${focused ? 'before:bg-black' : 'before:bg-[#EBEBEB]'}
                    before:left-[-36%] before:top-0 before:w-[2px] before:h-[16px]`}
      >
        {icon}
      </span>

      {/* خطا */}
      {showError && errors[name] && (
        <p className="text-red-500 absolute bottom-[-2em] text-sm mt-1">
          {(errors[name]?.message as string) || ""}
        </p>
      )}
    </div>
  );
};

export default FormItem;
