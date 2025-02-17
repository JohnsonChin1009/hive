"use client";

interface EventButtonProps {
  eventURL: string;
}
export default function EventButton( { eventURL } : EventButtonProps) {
  const handleOnClick = () => {
    window.open(eventURL, "_blank");
  }

  return (
    <>
      <div className="w-full border-2 border-[#1C1C1C] dark:border-[#adadad] rounded-lg text-black text-base font-medium dark:text-white p-2 text-center hover:bg-[#1C1C1C] dark:hover:bg-[#ffffff] hover:text-white dark:hover:text-black transition-all duration-500 ease-in-out hover:cursor-pointer" onClick={handleOnClick}>
        View Event
      </div> 
    </>
  )
}