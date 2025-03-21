import React from "react";

const ShoeCard = ({
  imgURL,
  changeBigShoeImageFunction,
  currentBigShoeImage,
  setCurrentBigShoeImage,
}) => {

    const handleImageClick = () => {
        if(imgURL == currentBigShoeImage) return;

        setCurrentBigShoeImage(imgURL)

    }

  return (
    <div className={`border-2 rounded-xl  ${(imgURL === currentBigShoeImage) ? "border-coral-red" : "border-transparent"} cursor-pointer sm:flex-1`}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max:p-4">
      <img
        src={imgURL.bigShoe}
        width={127}
        height={103}
        alt="big shoe image option"
        className="rounded-xl"
        onClick={handleImageClick}

      />
      </div>
    </div>
  );
};

export default ShoeCard;
