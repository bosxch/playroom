// MockupComponent.tsx
import React, { ReactNode } from "react";
import Image from "next/image";

interface MockupComponentProps {
  title: string;
  components: ReactNode[];
  imageSrc: any; // Change the type to string if it's a path
  imageAlt: string;
  direction: "textFirst" | "imageFirst";
}

const MockupComponent: React.FC<MockupComponentProps> = ({
  title,
  components,
  imageSrc,
  imageAlt,
  direction,
}) => {
  const renderComponents = () => {
    return components.map((component, index) => (
      <div key={index} className="mb-4">
        {component}
      </div>
    ));
  };

  const renderTextFirst = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col text-white">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {renderComponents()}
        </div>
        <div className="flex justify-center h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    );
  };

  const renderImageFirst = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col text-white">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {renderComponents()}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-transparent rounded-full pb-8 w-full">
      <div className="bg-transparent rounded-xl w-100">
        {direction === "textFirst" ? renderTextFirst() : renderImageFirst()}
      </div>
    </div>
  );
};

export default MockupComponent;
