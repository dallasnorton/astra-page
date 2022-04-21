import { useRouter } from 'next/router';

const Wiley = () => {
  const router = useRouter();

  return (
    <div className="antialiased text-gray-600 absolute inset-0">
      <div
        className="bg-contain bg-center bg-no-repeat h-full w-full"
        style={{
          backgroundImage: `url(${router.basePath}assets/images/wiley.png)`,
        }}
      />
    </div>
  );
};

export default Wiley;
