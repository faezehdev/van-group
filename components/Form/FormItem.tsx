// "use client";
// import { ReactNode, useEffect, useState } from "react";
// import {
//     FieldErrors,
//     Path,
//     RegisterOptions,
//     UseFormRegister,
// } from "react-hook-form";

// interface FormItemProps<T extends Record<string, any>> {
//     name: Path<T>;
//     title: string;
//     placeholder?: string;
//     type?: string;
//     register: UseFormRegister<T>;
//     rules?: RegisterOptions<T, Path<T>>;
//     errors: FieldErrors<T>;
//     icon: ReactNode;
//     setFocused: (e: boolean) => void;
//     as?: "input" | "select"|"textarea";
//     children?: ReactNode;
//     focused?: boolean


// }
// const FormItem = <T extends Record<string, any>>({
//     name,
//     title,
//     placeholder,
//     type = "text",
//     register,
//     rules,
//     errors,
//     icon,
//     setFocused,
//     as = "input",
//     focused,
//     children,
// }: FormItemProps<T>) => {
//       const [showError, setShowError] = useState(false);

//     useEffect(() => {
//         if (errors[name]) {
//             setShowError(true);
//             const timer = setTimeout(() => {
//                 setShowError(false);
//             }, 5000);

//             return () => clearTimeout(timer);
//         }
//     }, [errors, name]);
//     return (
//         <div className={`${as === "textarea" ? 'w-full justify-start':''} item  w-full flex flex-col relative`}>
//             <label className="block font-normal text-sm mb-1">{title}</label>
//             {as === "input" ? (
//                 <input
//                     type={type}
//                     placeholder={placeholder}
//                     onFocus={() => setFocused(true)}
//                     {...register(name, {
//                         ...rules,
//                         onBlur: (e) => {
//                             setFocused(false);
//                             rules?.onBlur?.(e);
//                         },
//                     })}
//                     className="rounded-[12px] pr-[3em] bg-white outline-none w-full
//             focus:text-black focus:border focus:border-black focus:placeholder:text-black
//             p-2 placeholder:text-sm placeholder:text-[#9F9F9F]"
//                 />
//             ) :as === "select"? (
//                 <select
//                     {...register(name, {
//                         ...rules,
//                         onBlur: (e) => {
//                             setFocused(false);
//                             rules?.onBlur?.(e);
//                         },
//                     })}
//                     onFocus={() => setFocused(true)}
//                     className={`rounded-[12px] pr-[3em] bg-white outline-none w-full border border-gray-300
//                         p-2 appearance-none 
//                         ${focused ? "text-black" : "text-[#9F9F9F]"}`}
//                       >
//                      <option value="" disabled hidden>
//                         {placeholder || "انتخاب کنید..."}
//                     </option>
//                     {children}
//                 </select>


//             ):(
//                  <textarea
//         placeholder={placeholder}
//         onFocus={() => setFocused(true)}
//         {...register(name, {
//             ...rules,
//             onBlur: (e) => {
//                 setFocused(false);
//                 rules?.onBlur?.(e);
//             },
//         })}
//         className="rounded-[12px] resize-[none] pr-[3em] bg-white outline-none w-full
//         focus:text-black focus:border focus:border-black focus:placeholder:text-black
//         p-2 placeholder:text-sm placeholder:text-[#9F9F9F]"
//     />
//             )}
//             {
//                 as === "select" && (
//                     <span className="pointer-events-none absolute left-3 top-[70%] -translate-y-1/2">
//                         <svg
//                             className={`w-[30px] h-4 transition-colors ${focused ? "text-black" : "text-gray-400"}`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                     </span>
//                 )
//             }

//             <span className={`${as === "textarea" ? 'top-[37%]  right-[3%] ':'top-[53%]  right-[5%] '} 
//             absolute before:contents-[''] before:absolute ${focused ? 'before:bg-black':'before:bg-[#EBEBEB]'}
//                 before:left-[-36%] before:top-0 before:w-[2px] before:h-[16px] `}>
//                 {icon}
//             </span>

//             {showError && errors[name] && (
//                 <p className="text-red-500 absolute bottom-[-2em] text-sm mt-1">
//                     {(errors[name]?.message as string) || ""}
//                 </p>
//             )}
//         </div>
//     );
// };

// export default FormItem;
"use client";

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
                        console.log('gjhgf');
                        setFocused(false);
                        onChangeCustomSelect?.(val);
                    }} >
                    <div onFocus={() => {
                        setFocused(true)
                    }}
                        onBlur={() => setFocused(false)}
                        className="relative">
                        <Listbox.Button className="relative w-full cursor-default rounded-[12px]
                         bg-white py-2 pl-3 pr-10 text-right border border-gray-300 focus:outline-none">
                            <span className={`block truncate    ${focused ? "text-black" : "text-[#9F9F9F]"}`} >
                                {options.find((opt) => opt.value === value)?.label || placeholder}
                            </span>

                        </Listbox.Button>
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full 
                        overflow-auto rounded-md bg-white py-1 shadow-lg  ring-opacity-5 focus:outline-none text-sm">
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.value}
                                    className={({ active }) =>
                                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-[#F5F5F5] text-black' : 'text-bclack'
                                        }`
                                    }
                                    value={option.value}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                {option.label}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                                    {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                </Listbox>
            )}

            {/* آیکن کنار فیلد */}

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
