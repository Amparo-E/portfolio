import { FC, useState } from "react";
import s from "./contactPage.module.css";
import axios from "axios";

interface FormOptions {
  from: string;
  subject: string;
  message: string;
}

const ContactPage = () => {

  const [mailOptions, setMailOptions] = useState<FormOptions>({
    from: "",
    subject: "",
    message: "",
  });

  const handleForm = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setMailOptions({
      ...mailOptions,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post(`http://localhost:3001/api/send-email`, mailOptions);
  };

  return (
    <div className={s.contact_page}>
          <section className={s.modal}>
            <h2>Hello!</h2>
            <form onSubmit={handleSubmit} className={s.form_col}>
                <input
                  type="email"
                  name="from"
                  defaultValue={mailOptions.from}
                  onChange={handleForm}
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="subject"
                  defaultValue={mailOptions.subject}
                  onChange={handleForm}
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  onChange={handleForm}
                  defaultValue={mailOptions.message}
                  placeholder="Message"
                ></textarea>
              <button type="submit">SEND</button>
            </form>
          </section>
        </div>
  );
};















// Make a component called [ContactModal] that replaces the following line of code
// Create a object that simulates the properties of an input and map it

// interface Props {
//   children: JSX.Element | null;
//   openForm: Boolean;
//   setOpenForm: (value: boolean) => void;
// }

// interface FormOptions {
//   from: string;
//   subject: string;
//   message: string;
// }

// const ContactModal: FC<Props> = ({ children, openForm, setOpenForm }) => {

//   const [mailOptions, setMailOptions] = useState<FormOptions>({
//     from: "",
//     subject: "",
//     message: "",
//   });

//   const handleForm = (
//     e:
//       | React.ChangeEvent<HTMLInputElement>
//       | React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setMailOptions({
//       ...mailOptions,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     await axios.post(`http://localhost:3001/api/send-email`, mailOptions);
//   };

//   return (
//     <>
//       {openForm && (
//         <div className={s.content_modal}>
//           <section className={s.modal}>
//             <h2>Hello!</h2>
//             <form onSubmit={handleSubmit} className={s.form_col}>
//               <div className={s.form_group}>
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="from"
//                   defaultValue={mailOptions.from}
//                   onChange={handleForm}
//                 />
//               </div>
//               <div className={s.form_group}>
//                 <label>Subject</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   defaultValue={mailOptions.subject}
//                   onChange={handleForm}
//                 />
//               </div>
//               <div className={s.form_group}>
//                 <label>Message</label>
//                 <textarea
//                   name="message"
//                   onChange={handleForm}
//                   defaultValue={mailOptions.message}
//                 ></textarea>
//               </div>
//               <button type="submit">SEND</button>
//             </form>
//           </section>
//         </div>
//       )}
//       {children}
//     </>
//   );
// };

export default ContactPage;
