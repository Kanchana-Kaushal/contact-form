import { useForm } from "react-hook-form";

function Form(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.setShowPopup(true);
    setTimeout(() => {
      props.setShowPopup(false);
    }, 5000);
    console.log(data);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="my-8 w-9/10 max-w-xl space-y-3 rounded-xl bg-white p-6 shadow-lg"
    >
      <h1 className="text-Grey-900 text-3xl font-bold">Contact Us</h1>

      <section className="justify-between space-y-4 lg:flex lg:gap-4">
        <div className="flex flex-col gap-2 lg:flex-auto">
          <label htmlFor="firstName">
            First Name <span className="text-Green-600"> *</span>
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true, maxLength: 20 })}
            className={`text-Grey-900 focus:ring-Green-600 cursor-pointer rounded-sm p-2 ring-1 outline-none focus:ring-2 ${errors?.firstName ? "ring-red-500" : "ring-Grey-500"}`}
          />
          {errors?.firstName?.type === "required" ? (
            <p className="text-sm text-red-500">This field is required</p>
          ) : null}
          {errors?.firstName?.type === "maxLength" ? (
            <p className="text-sm text-red-500">
              Name should not be more than 20 characters
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 lg:flex-auto">
          <label htmlFor="lastName">
            Last Name <span className="text-Green-600"> *</span>
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true, max: 20 })}
            className={`text-Grey-900 focus:ring-Green-600 cursor-pointer rounded-sm p-2 ring-1 outline-none focus:ring-2 ${errors?.lastName ? "ring-red-500" : "ring-Grey-500"}`}
          />

          {errors?.lastName?.type === "required" ? (
            <p className="text-sm text-red-500">This field is required</p>
          ) : null}
          {errors?.lastName?.type === "maxLength" ? (
            <p className="text-sm text-red-500">
              Name should not be more than 20 characters
            </p>
          ) : null}
        </div>
      </section>

      <label htmlFor="email">
        Email Address <span className="text-Green-600"> *</span>
      </label>
      <input
        type="email"
        id="email"
        {...register("email", {
          required: true,
          pattern: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/",
        })}
        className={`text-Grey-900 focus:ring-Green-600 mt-2 w-full cursor-pointer rounded-sm p-2 ring-1 outline-none focus:ring-2 ${errors?.email ? "ring-red-500" : "ring-Grey-500"}`}
      />
      {errors?.email?.type === "pattern" ? (
        <p className="text-sm text-red-500">
          Please enter a valid email address
        </p>
      ) : null}

      {errors?.email?.type === "required" ? (
        <p className="text-sm text-red-500">This field is required</p>
      ) : null}

      <fieldset className="space-y-2 lg:flex lg:items-center lg:justify-between lg:gap-4 lg:space-y-0">
        <legend className="lg:py-2">
          Query Type <span className="text-Green-600"> *</span>
        </legend>
        <section className="ring-Grey-500 relative flex cursor-pointer items-center gap-4 rounded-md p-2 ring-1 lg:flex-auto">
          <input
            type="radio"
            id="general-enquery"
            value="general-enquery"
            {...register("queryType", { required: true })}
            className="accent-Green-600 peer z-20 size-5"
          />
          <div className="peer-checked:bg-Green-200 absolute left-0 z-10 h-full w-full rounded-md transition-colors ease-in"></div>
          <label htmlFor="general-enquery" className="z-20">
            General Enquery
          </label>
        </section>

        <section className="ring-Grey-500 relative mt-4 flex cursor-pointer items-center gap-4 rounded-md p-2 ring-1 lg:mt-0 lg:flex-auto">
          <input
            type="radio"
            id="support-request"
            {...register("queryType", { required: true })}
            value="support-request"
            className="accent-Green-600 peer z-20 size-5"
          />
          <div className="peer-checked:bg-Green-200 absolute left-0 z-10 h-full w-full rounded-md transition-colors ease-in"></div>

          <label htmlFor="support-request" className="z-20">
            Support Request
          </label>
        </section>
      </fieldset>
      {errors?.queryType?.type === "required" ? (
        <p className="text-sm text-red-500">This field is required</p>
      ) : null}

      <label htmlFor="message">
        Message <span className="text-Green-600"> *</span>
      </label>
      <textarea
        id="message"
        {...register("message", { required: true, min: 10, max: 150 })}
        className={`focus:ring-Green-600 mt-2 min-h-50 w-full cursor-pointer rounded-sm p-3 text-lg ring-1 outline-none focus:ring-2 lg:min-h-30 ${errors?.message ? "ring-red-500" : "ring-Grey-500"}`}
      ></textarea>
      {errors?.message?.type === "required" ? (
        <p className="text-sm text-red-500">This field is required</p>
      ) : null}

      <section className="flex items-center gap-4">
        <input
          type="checkbox"
          {...register("terms", { required: true })}
          id="terms"
          className="accent-Green-600 size-4 cursor-pointer"
        />

        <label htmlFor="terms" className="cursor-pointer">
          I concent to being contacted by the team.
        </label>
      </section>
      {errors?.terms?.type === "required" ? (
        <p className="text-sm text-red-500">
          To submit the form, please concent to be contacted
        </p>
      ) : null}

      <button className="bg-Green-600 text-Green-200 w-full rounded-md p-3 text-lg transition-colors ease-in hover:bg-green-800">
        Submit
      </button>
    </form>
  );
}

export default Form;
