import { Button } from "./Button";

export const TopNav = () => {
  return (
    <div>
      <div className="hidden lg:block text-gray-100 text-center bg-primary">
        <p className="flex justify-center items-center gap-2 py-1">
          <span>
            <img src="icons/calendar-time.svg" alt="calender-white" />
          </span>{" "}
          <span>Join Our Event (14 Nov, 2025) New Market, Plateau State.</span>
          <Button label="Donate Now" onClick={()=>{}} size="small" variant="primary" />
        </p>
      </div>
      
    </div>
  );
};
