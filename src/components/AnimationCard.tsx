import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export function AnimationCard({ path }: { path: string }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, [path]);

  if (!animationData) return null;

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#e9e9e9]">
      <Lottie
        animationData={animationData}
        loop
        className="h-[60%] w-[60%]"
      />
    </div>
  );
}