"use client";
import { ReactNode } from "react";
import {
    FieldErrors,
    Path,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";

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
    as?: "input" | "select"|"textarea";
    children?: ReactNode;
    focused?: boolean


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
}: FormItemProps<T>) => {
    return (
        <div className={`${as === "textarea" ? 'w-full justify-start':''} item  w-full flex flex-col relative`}>
            <label className="block font-normal text-sm mb-1">{title}</label>
            {as === "input" ? (
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
            ) :as === "select"? (
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


            ):(
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
            {
                as === "select" && (
                    <span className="pointer-events-none absolute left-3 top-[70%] -translate-y-1/2">
                        <svg
                            className={`w-[30px] h-4 transition-colors ${focused ? "text-black" : "text-gray-400"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                )
            }

            <span className={`${as === "textarea" ? 'top-[37%]  right-[3%] ':'top-[53%]  right-[5%] '} 
            absolute before:contents-[''] before:absolute ${focused ? 'before:bg-black':'before:bg-[#EBEBEB]'}
                before:left-[-36%] before:top-0 before:w-[2px] before:h-[16px] `}>
                {icon}
            </span>

            {errors[name] && (
                <p className="text-red-500 absolute bottom-[-2em] text-sm mt-1">
                    {(errors[name]?.message as string) || ""}
                </p>
            )}
        </div>
    );
};

export default FormItem;
