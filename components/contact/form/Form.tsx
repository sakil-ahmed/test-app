import React, {useRef} from "react";
import {MdOutlineWifiCalling3, MdOutlineEmail} from "react-icons/md";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {animationFade} from "@/components/Animation/Motion";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const form: any = useRef();

  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup
        .string()
        .required()
        .email(),
      message: yup.string().required(),
    })
    .required();

  const option = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }

  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormData>({resolver: yupResolver(schema)});

  const onSubmit = async () => {

    try {
      const res = await emailjs
        .sendForm(
          "service_28srm6x",
          "template_9taiuii",
          form.current,
          "RYB7CBoTag91d7Zoq"
        )
      if (res.status === 200) {
        toast("Message Success", option as any)
      }
    } catch (err: any) {
      console.log(err)
    } finally {

    }
    reset()
  };

  return (
    <motion.form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <motion.div {...animationFade("bottom", 100)} className="form__input">
        <div className="form_group">
          <label htmlFor="name">Name*</label>
          <input type="text" placeholder="Your Name" {...register("name")} />

          <p className={`error__message show`}>
            {errors.name ? errors.name?.message : ""}
          </p>
        </div>
        <div className="form_group">
          <label htmlFor="email">Email*</label>
          <input type="text" placeholder="Your Email" {...register("email")} />
          <p className={`error__message show`}>
            {errors.email ? errors.email?.message : ""}
          </p>
        </div>
      </motion.div>
      <motion.div {...animationFade("bottom", 100)} className="form_group">
        <label htmlFor="message">Message*</label>
        <textarea placeholder="Message" {...register("message")}></textarea>
        <p className={`error__message show`}>
          {errors.message ? errors.message?.message : ""}
        </p>
      </motion.div>
      <motion.div {...animationFade("bottom", 100)} className="contact__btns">
        <button className="btn" type="submit">
          Submit now
        </button>
        <div className="text">
          <span className="phone">
            <span>
              <MdOutlineWifiCalling3/>
            </span>{" "}
            +880 1729-925644
          </span>
          <span className="email">
            <span>
              <MdOutlineEmail/>
            </span>{" "}
            sakilahmed.dev@gmail.com
          </span>
        </div>
      </motion.div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.form>
  );
};

export default Form;
