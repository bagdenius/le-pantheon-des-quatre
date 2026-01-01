export default function DeliverySection() {
  return (
    <div className='flex flex-row gap-5 min-h-[60lvh] mx-20 my-20 bg-secondary'>
      <div className='w-2/3 bg-primary-dark p-10'>
        <h2 className='mb-2 text-center text-6xl text-gray-light'>
          Guest Form
        </h2>
      </div>
      <div className='w-1/3 p-10'>
        <h2 className='mb-2 text-center text-6xl text-gray-light'>
          Hermes Delivery
        </h2>
      </div>
    </div>
  );
}
