"use client"
import { useReducer, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import UserIcon from "../shared/icon/UserIcon"; // برای input نام شرکت
import SelectIcon from "../shared/icon/SelectIcon";
import FormItem from "./FormItem";
import PhoneIcon from "../shared/icon/PhoneIcon";
import EmailIcon from "../shared/icon/EmailIcon";
import RequestIcon from "../shared/icon/RequestIcon";
import MyCaptcha from "../Recaptcha/Recaptcha";
import Button from "../shared/common/Button";
import { formReducer,FormInitialState } from "./Reducer/FormReducer";
type FormValues = {
  companyName: string;
  category: string;
  phone: string;
  email: string;
  request: string;
};


const Form = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm<FormValues>();
  const [focused, setFocused] = useState<{ [key in keyof FormValues]?: boolean }>({});
   const [state, dispatch] = useReducer(formReducer,FormInitialState);;
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if(state.verified){
  console.log(data);
  dispatch({type:"SEND_PERMISION",payload:{verified:false,error: false}})
   reset()
    }
    else{
      dispatch({type:"SEND_ERROR",payload:{error: true}})
    }
  
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto flex flex-col bg-graylight p-6 rounded-[30px] shadow"
    >
      <div className="w-90 mx-auto gap-6 flex flex-col lg:mb-6">
        <div className="row w-full flex lg:flex-row flex-col gap-6 justify-between">
          <FormItem<FormValues>
            name="companyName"
            title="نام شرکت"
            placeholder="نام شرکت را وارد کنید"
            register={register}
            errors={errors}
            focused={!!focused["companyName"]}
            setFocused={(value) => setFocused(prev => ({ ...prev, companyName: value }))}
            rules={{
              required: "نام شرکت الزامی است",
            }}
            icon={
              focused["companyName"] ? (
                <UserIcon width={18} height={18} fill="black" />
              ) : (
                <UserIcon width={18} height={18} fill="#9F9F9F" />
              )
            }
          />
          <FormItem<FormValues>
            name="category"
            title="دسته‌بندی"
            register={register}
            errors={errors}
            focused={!!focused["category"]}
            setFocused={(value) => setFocused(prev => ({ ...prev, category: value }))}
            icon={focused["category"] ? <SelectIcon width={18} height={18} fill="black" /> : <SelectIcon width={18} height={18} fill="#9F9F9F" />}
            rules={{ required: "انتخاب دسته‌بندی الزامی است" }}
            as="select"

          >
            <option value="">انتخاب کنید...</option>
            <option value="IT">فناوری اطلاعات</option>
            <option value="Finance">مالی</option>
            <option value="Marketing">بازاریابی</option>
          </FormItem>

        </div>
        <div className="row w-full flex lg:flex-row flex-col gap-6 justify-between">

          <FormItem<FormValues>
            name="phone"
            title="شماره تماس: "
            placeholder="شماره تماس"
            register={register}
            errors={errors}
            focused={!!focused["phone"]}
            setFocused={(value) => setFocused(prev => ({ ...prev, phone: value }))}
            rules={{
              required: "شماره تماس الزامی است",
            }}
            icon={
              focused["phone"] ? (
                <PhoneIcon width={18} height={18} fill="black" />
              ) : (
                <PhoneIcon width={18} height={18} fill="#9F9F9F" />
              )
            }
          />
          <FormItem<FormValues>
            name="email"
            title="ایمیل: "
            placeholder="ایمیل: "
            register={register}
            errors={errors}
            focused={!!focused["email"]}
            setFocused={(value) => setFocused(prev => ({ ...prev, email: value }))}
            icon={
              focused["email"] ? (
                <EmailIcon width={18} height={18} fill="black" />
              ) : (
                <EmailIcon width={18} height={18} fill="#9F9F9F" />
              )
            }
          />
        </div>
        <div className="textArea w-full">
              <FormItem<FormValues>
            name="request"
            title="درخواست: "
            placeholder="درخواست: "
            register={register}
            errors={errors}
            focused={!!focused["request"]}
            setFocused={(value) => setFocused(prev => ({ ...prev, request: value }))}
             as="textarea"
            icon={
              focused["request"] ? (
                <RequestIcon width={18} height={18} fill="black" />
              ) : (
                <RequestIcon width={18} height={18} fill="#9F9F9F" />
              )
            }
          />
        </div>
        <div className="Row w-full flex lg:flex-row flex-col gap-3.5 justify-between items-center">
          <MyCaptcha verified={state} setVerified={dispatch}/>
          <Button
          className="!w-full lg:w-max"
          type="submit"
          title="ارسال"
          />
        </div>
      </div>
       {
        state.error && (
          <p className="text-red-500 flex w-[90%] mx-auto text-sm mt-1">
                   لطفا ابتدا کپچا را انجام دهید
                </p>
        )
       }
    </form>
  );
};

export default Form;
