import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <form
      action=""
      className="bg-[#FFFFFF] shadow-md w-[100%] md:w-[564px] h-[620px] mt-6 rounded-[20px] p-[25px] sm:p-[30px] md:p-[40px] space-y-3 flex flex-col"
    >
      {/* Input 1 */}
      <div className="border-[#5e5d5d] border h-[55px] md:h-[60px] rounded-[5px] outline-none overflow-hidden">
        <input
          type="text"
          placeholder="Name"
          className="w-full h-full outline-none text-[15px] px-[20px] placeholder:text-[rgba(10,20,47,1)]"
        />
      </div>
      <div className="border-[#5e5d5d] border h-[55px] md:h-[60px] rounded-[5px] outline-none overflow-hidden">
        <input
          type="text"
          placeholder="Email"
          className="w-full h-full outline-none text-[15px] px-[20px] placeholder:text-gray"
        />
      </div>
      <div className="border-[#5e5d5d] border h-[55px] md:h-[60px] rounded-[5px] outline-none overflow-hidden">
        <input
          type="text"
          placeholder="Subject"
          className="w-full h-full outline-none text-[15px] px-[20px]"
        />
      </div>

      <div className="border-[#5e5d5d] border rounded-[5px] outline-none overflow-hidden">
        <textarea
          placeholder="Message"
          className="w-full h-full outline-none text-[15px] px-[20px] py-[10px]"
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
      </div>

      <div className="flex flex-row items-center"></div>

      <div>
        <Button className="h-16 text-[19px] w-full inline-block bg-primary text-white rounded-[10px]">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
