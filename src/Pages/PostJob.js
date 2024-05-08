import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const PostJob = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOptions;
    console.log(data);
  };
  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "C++", label: "C++" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Java", label: "Java" },
    { value: "MySQL", label: "MySQL" },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-slate-100 py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* row 1 */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                placeholder={"E.g: Web Developer"}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company</label>
              <input
                type="text"
                placeholder={"E.g: Viettel"}
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder={"E.g: $20k"}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder={"E.g: $50k"}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* row 3 */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Location</label>
              <input
                type="text"
                placeholder={"E.g: Hanoi"}
                {...register("jobLocation")}
                className="create-job-input "
              />
            </div>
          </div>
          {/* row 4 */}

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder={"E.g: 2024-11-13"}
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Choose your experience</option>
                <option value="Internship">Internship</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>
          {/* row 5 */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Skill required</label>
            <CreatableSelect
              isClearable
              isMulti
              options={options}
              onChange={setSelectedOptions}
            />
          </div>

          {/* row 6 */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="text"
                placeholder={"E.g: https://logo-url.com/img"}
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Choose your job model</option>
                <option value="Full-time">Full-timeFull-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* row 7 */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Skill required</label>
          </div>
          <textarea
            {...register("description")}
            className="pl-3 w-full py-1.5 focus:outline-none"
            rows={6}
            placeholder="Job's description"
          />
           {/* row 8 */}

           <div className="w-full">
            <label className="block mb-2 text-lg">Contact</label>
            <input
                type="email"
                placeholder={"E.g: ricons@saudi.org"}
                {...register("postedBy")}
                className="create-job-input"
              />
          </div>



          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default PostJob;
