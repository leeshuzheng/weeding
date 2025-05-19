import { Button, Radio, TextInput, GroupBox, Hourglass } from "react95";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { rsvpValues, RSVP_API_URL } from "@/app/constants";

type FormData = {
  name: string;
  phone: string;
  rsvp: string;
  notes: string;
};

export const RsvpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty },
  } = useForm<FormData>();

  const [rsvpValue, setRsvpValue] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const resp = await fetch(RSVP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await resp.json();

      if (data.status) {
        setSuccessMessage(data.status);
      }
    } catch (error) {
      console.error("Error because", error);
    }
  };

  const handleRsvpChange = (value: string) => {
    setRsvpValue(value);
  };

  if (isSubmitSuccessful && successMessage) {
    return <h1>{successMessage}</h1>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="!text-xl !font-bold">We look forward to celebrating with you!</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...register("name", { required: true })} placeholder="Name" />
        {errors.name && (
          <p role="alert" className="text-red-700 font-bold">
            Please enter your name
          </p>
        )}
        <TextInput {...register("phone", { required: true, minLength: 8 })} type="number" placeholder="Phone" />
        {errors.phone && (
          <p role="alert" className="text-red-700 font-bold">
            Please enter a valid phone number
          </p>
        )}
        <GroupBox label="RSVP">
          {rsvpValues.map((r, i) => (
            <Radio
              {...register("rsvp", { required: true })}
              className="[&>div]:before:!hidden"
              key={i}
              checked={rsvpValue === r.value}
              label={r.label}
              value={r.value}
              name="rsvp"
              onChange={() => handleRsvpChange(r.value)}
            />
          ))}
        </GroupBox>
        {errors.rsvp && (
          <p role="alert" className="text-red-700 font-bold">
            Please choose a response above
          </p>
        )}
        <TextInput
          {...register("notes")}
          multiline
          rows={4}
          placeholder="Anything else we should know? (optional)"
          fullWidth
        />
        {isSubmitting && (
          <div className="flex items-center gap-2">
            <Hourglass size={32} /> Submitting...
          </div>
        )}
        <Button type="submit" disabled={isSubmitting || !isDirty}>
          Submit
        </Button>
      </form>
    </div>
  );
};
