import Card from "@/components/Card";
import Hero from "@/components/Hero.jsx/Hero";
import { FaPlus } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">

        {/* TODO LIST */}
        <div>
          <div className="flex items-center justify-between mb-5 px-3">
            <h3 className="text-white font-semibold">To-Do List (24)</h3>
            <div className="h-8 w-8 rounded-lg bg-purple text-white flex justify-center items-center"><FaPlus size={18} /></div>
          </div>
          <div className="space-y-5">
            <Card title='important' description='Create sign up sheet for holiday student/parent conferences.' className='before:bg-yellow-500 before:w-1/4' data={4} bgColor='bg-yellow-500' textColor='text-yellow-500' />
            <Card title='Instructor Meeting' description='Plan holiday demonstration program. Create outline.' className='before:bg-pink-500 before:w-2/5' data={3} bgColor='bg-pink-500' textColor='text-pink-500' />
            <Card title='Database' description='Determine how many boards need to be ordered for testing and demo.' className='before:bg-green-500 before:w-1/5' data={2} bgColor='bg-green-500' textColor='text-green-500' />
          </div>
        </div>

        {/* IN PROGRESS */}
        <div>
          <div className="flex items-center justify-between mb-5 px-3">
            <h3 className="text-white font-semibold">In Progress (2)</h3>
            <div className="h-8 w-8 rounded-lg bg-[#211A75] text-purple flex justify-center items-center"><FaPlus size={18} /></div>
          </div>
          <div className="space-y-5">
            <Card title='Video' description='Create sparring tutorial video for the weekly class.' className='before:bg-cyan-500 before:w-4/5' data={3} bgColor='bg-cyan-500' textColor='text-cyan-500' />
            <Card title='BUG FIXING' description='Payment gateway needs reauthorization.' className='before:bg-rose-500 before:w-[95%]' data={4} bgColor='bg-rose-500' textColor='text-rose-500' />
          </div>
        </div>

        {/* DONE */}
        <div>
          <div className="flex items-center justify-between mb-5 px-3">
            <h3 className="text-white font-semibold">Done (4)</h3>
            <div className="h-8 w-8 rounded-lg bg-[#211A75] text-purple flex justify-center items-center"><FaPlus size={18} /></div>
          </div>
          <div className="space-y-5">
            <Card title='BUG FIXING' description='Action Button needed for Google Maps visits.' className='before:bg-rose-500 before:w-[95%]' data={4} bgColor='bg-rose-500' textColor='text-rose-500' />
            <Card title='Database' description='Update new instructor photos.' className='before:bg-green-500 before:w-full' data={4} bgColor='bg-green-500' textColor='text-green-500' />
            <Card title='Instructor Meeting' description='Plan holiday demonstration program. Create outline.' className='before:bg-pink-500 before:w-full' data={3} bgColor='bg-pink-500' textColor='text-pink-500' />
          </div>
        </div>

        {/* REVISED */}
        <div>
          <div className="flex items-center justify-between mb-5 px-3">
            <h3 className="text-white font-semibold">Revised (0)</h3>
            <div className="h-8 w-8 rounded-lg bg-[#211A75] text-purple flex justify-center items-center"><FaPlus size={18} /></div>
          </div>
          <div className="p-4 bg-card rounded-lg">
            <div className="h-10 w-full border border-dashed border-gray-500 rounded-lg bg-primary text-gray-500 flex justify-center items-center text-sm">Move Card Here</div>
          </div>
        </div>
      </div>
    </div>
  )
}
