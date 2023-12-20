const FloatingDashes = () => {
  return (
    <>
      <div className="flex flex-col gap-9 absolute top-64 squareAnimation">
        <div className="flex gap-1 w-32 ">
          <div className="border-4 w-12 border-primary-green-300 border-dashed rotate-90"></div>
          <div className="-ml-9  border-4 w-12 border-primary-green-300 border-dashed  rotate-90"></div>
          <div className="-ml-9 border-4 w-12 border-primary-green-300 border-dashed  rotate-90"></div>
        </div>
        <div className="flex gap-1 w-32 ml-3 ">
          <div className="border-4 w-6 border-primary-green-300 border-dashed rotate-90"></div>
          <div className="-ml-3 border-4 w-6 border-primary-green-300 border-dashed  rotate-90"></div>
        </div>
      </div>
      <div className="flex flex-col gap-9 absolute top-24 right-0 squareAnimationReverse">
        <div className="flex gap-1 w-32 ml-3">
          <div className="border-4 w-6 border-secondary-yellow-500 border-dashed rotate-90"></div>
          <div className="-ml-3 border-4 w-6 border-secondary-yellow-500 border-dashed  rotate-90"></div>
        </div>
        <div className="flex gap-1 w-32 ">
          <div className="border-4 w-12 border-secondary-yellow-500 border-dashed rotate-90"></div>
          <div className="-ml-9  border-4 w-12 border-secondary-yellow-500 border-dashed  rotate-90"></div>
          <div className="-ml-9 border-4 w-12 border-secondary-yellow-500 border-dashed  rotate-90"></div>
        </div>
      </div>
    </>
  );
};

export default FloatingDashes;
