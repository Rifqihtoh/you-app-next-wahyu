"use client";
import ImageNext from "@/components/Image";
import Input from "@/components/Input";
import SelectTag from "@/components/SelectTag";
import Text from "@/components/Text";
import { useRegister } from "@/services/auth/useAuth";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

export default function InterestinterestinterestPage() {
  const router = useRouter();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      interest: [],
    },
  });

  const { mutate: registerUser, isPending: isPendingRegister } = useRegister({
    options: {
      onSuccess: (res: any) => {
        console.log("@res", res);

        if (res?.data?.message === "User already exists") {
          alert(res?.data?.message);
        } else if (res?.data?.message === "User has been created successfully") {
          alert(res?.data?.message);
          router.push("/login");
        }

        reset();
      },
    },
  });

  const onSubmit = async (data: any) => {
    const { email, password, username } = data;

    registerUser({ email, password, username });
  };

  return (
    <section>
      <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm h-dvh bg-gradient-radial-base px-5">
          {/* Header Start */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <ImageNext
                onClick={() => router.back()}
                src="/back.svg"
                alt="back"
                width={10}
                height={10}
                className="w-auto cursor-pointer"
              />
              <Text
                onClick={() => router.back()}
                label="Back"
                className="font-bold not-italic text-sm text-white cursor-pointer"
              />
            </div>

            <Text
              label="Save"
              className="font-bold not-italic text-sm text-[#ABFFFD] cursor-pointer"
            />
          </div>
          {/* Header End */}

          <Text
            label="Tell everyone about yourself"
            className="font-bold not-italic text-sm text-[#94783E] mt-20"
          />

          <Text label="What interest you?" className="font-bold not-italic text-xl text-white" />

          <Controller
            control={control}
            rules={{
              required: "Interest is required",
            }}
            name="interest"
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <SelectTag
                onChange={onChange}
                error={error}
                onBlur={onBlur}
                value={value}
                name="interest"
                type="text"
                required
                placeholder="Create Interest"
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}
