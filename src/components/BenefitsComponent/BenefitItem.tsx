import React from "react";

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title }) => {
  const boxShadowStyle =
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";

  return (
    <div
      className="bg-white p-4 rounded-lg h-100 flex-shrink-0 flex flex-col items-center justify-center whitespace-normal befits-items-mobile"
      style={{ boxShadow: boxShadowStyle }}
    >
      <div className="benefit-icon mb-6">{icon}</div>
      <div className="benefit-title text-center" style={{ color: "#0881a3" }}>
        {title}
      </div>
    </div>
  );
};

export default BenefitItem;
