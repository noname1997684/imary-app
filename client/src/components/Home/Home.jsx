import React,{useState,useEffect} from 'react'

import images from '../../images/index.js'
import {FaSearch} from 'react-icons/fa'
import {data,colors} from './data.js'
import bg from '../../images/bg-like.avif'
const Home = () => {
  const nextSlide=()=>{
    setIndex((index+1)%data.length)
  }
  useEffect(()=>{
    const interval=setInterval(nextSlide,6500)
    return ()=>clearInterval(interval)
  })
  const [index, setIndex]=useState(0)
  console.log(data)

  return (
    <main className='snap-y snap-mandatory overflow-y-scroll h-screen'>
    <section className='flex flex-col  items-center h-[85vh] mt-6 snap-center'>
    <div className='relative w-full '>
    <div className='flex items-center flex-col gap-3' id='text-animation'>
        <h1 className='font-semibold text-5xl'>Cùng nhau khám phá</h1>
        <div className='mb-3'>
        {data.map((item,i)=>(
          <div className={`slider-reveal ${item.color} ${i===index?"choosen": ""}`} key={i}>
          <h1 className={`font-semibold text-5xl  `}>{item.text}</h1>
          </div>
        ))}
        </div>
        <div className='flex gap-2 mt-2 z-10'>
          {data.map((item,i)=>(
            <div className={`dot ${item.color} ${i===index?"active":""}`} key={i} onClick={()=>setIndex(i)}></div>
          ))}
    </div>

    
    </div>
    {data.map((item,i)=>(
      <div className={`flex px-2  justify-around  gap-2 mt absolute top-16 h-[76vh] overflow-hidden -z-20 slider-reveal ${i===index?"choosen":""}`} id="item">
      <div className='gap-4 flex flex-col '>
        <img src={item.images[0]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '/>
        <img src={item.images[1]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '100ms'}}
        />
      </div>
      <div className='gap-4 flex flex-col translate-y-28 '>
        <img src={item.images[2]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '200ms'}}
        />
        <img src={item.images[3]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '300ms'}}
        />
      </div>
      <div className='gap-4 flex flex-col translate-y-48'>
        <img src={item.images[4]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '400ms'}}
        />
        <img src={item.images[5]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '500ms'}}
        />
      </div>
      <div className='gap-4 flex flex-col translate-y-80'>
        <img src={item.images[6]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '600ms'}}
        />
        <img src={item.images[7]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '700ms'}}
        />
      </div>
      <div className='gap-4 flex flex-col translate-y-48'>
        <img src={item.images[8]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '800ms'}}
        />
        <img src={item.images[9]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '900ms'}}
        />
      </div>
      <div className='gap-4 flex flex-col translate-y-28'>
        <img src={item.images[10]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '1000ms'}}
        />
        <img src={item.images[11]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '1100ms'}}
        />
      </div>
      <div className='gap-4 flex flex-col '>
        <img src={item.images[12]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '1200ms'}}
        />
        <img src={item.images[13]} alt="img"
        width={236}
        height={350} 
        className='rounded-2xl '
        style={{animationDelay: '1300ms'}}
        />
      </div>
      </div>
    ))}

    </div>
    </section>
    <section className='flex justify-around items-center relative bg-yellow-200 h-screen -z-50 snap-center'>
    <div className='relative flex'>
      <div className='absolute top-10 left-[-140px] -z-10'>
      <img src={images.place7} alt="" 
      
      className='rounded-[40px] object-cover w-[204px] h-[285px] '/>
      </div>
      <div>
      <img src={images.place2} alt="" 
      className='rounded-[40px] object-cover w-[298px] h-[456px]'/>
      </div>
      <div  className='absolute top-[-100px] right-[-80px] -z-10'>
      <img src={images.place6} alt="" 
      width={120}
      height={130}
      className='rounded-[40px] object-cover w-[178px] h-[281px]'/>
      </div>
      <div className='absolute bottom-[-120px] right-[-100px] -z-10'>
      <img src={images.place5} alt="" 
      width={100}
      height={123}
      className='rounded-[40px] object-cover w-[164px] h-[258px] '/>
      </div>
      <div className='flex items-center justify-center gap-2 bg-white absolute top-[140px] left-[-30px] px-5 py-5 rounded-full'>
    <FaSearch/>
        <h1 className='font-bold'>Cảnh biển đẹp</h1>
      </div>
    </div>
    <div className='flex flex-col items-center gap-8'>
      <h1 className='text-red-700 font-bold text-5xl'>Tìm kiếm ý tưởng</h1>
      <p className='max-w-80 text-center font-medium text-lg text-red-700'>Bạn muốn thử sức những thứ mới mẻ? Hãy tìm kiếm những thứ bạn cần và cùng nhau khám phá chúng</p>
      <button className='bg-red-500 text-white px-5 py-4 rounded-full font-bold'>Tìm hiểu</button>
    </div>
    </section>
    <section className='flex w-full items-center relative bg-teal-100 h-screen -z-50 snap-center'>
    <div className='flex flex-col items-center gap-8 w-[50vw]'>
      <h1 className='text-teal-800 font-bold text-5xl'>Tạo nên những bức ảnh</h1>
      <p className='max-w-80 text-center font-medium text-lg text-teal-800'>Tạo nên những thứ mới mẻ để mọi người cùng thưởng thức</p>
      <button className='bg-red-500 text-white px-5 py-4 rounded-full font-bold'>Tìm hiểu</button>
    </div>
    <div className='relative w-[50vw] h-screen'>
      <div className='absolute top-7 right-16 z-10'>
        
        <img src={images.place8} alt="" 
        
        className='rounded-[30px] object-cover w-[200px] h-[210px] '/>
        
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4'>Cảnh thanh bình</h1>

      </div>
      <div className='absolute top-64 right-48 z-20'>
        <img src={images.dog1} alt="" 
        
        className='rounded-[30px] object-cover w-[165px] h-[173px] '/>
        <h1 className='text-white font-bold text-xl absolute bottom-4 left-4 w-[100px]'>Thú cưng đáng yêu</h1>

      </div>
      <div className='absolute bottom-12 right-24'>
        <img src={images.tree1} alt="" 
        
        className='rounded-[30px] object-cover w-[223px] h-[235px] '/>
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4'>Cây cảnh trong nhà</h1>

      </div>
      <div className='absolute bottom-7 left-28'>
        <img src={images.home1} alt="" 
        className='rounded-[30px] object-cover w-[223px] h-[235px] '/>
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4'>Trang trí nội thất</h1>

      </div>
      <div className='absolute top-10 '>
        <img src={images.flower5} alt="" 
        className='rounded-[30px] object-cover w-[380px] h-[400px] '/>
        <div className='absolute bottom-2 left-6'>
        <h1 className='text-white font-bold text-3xl mb-3'>Loài hoa tôi thích</h1>
        <div className='flex gap-2'>
        <img src={images.flower2} alt="" 
        width={90}
        height={135}
        className='rounded-[30px] object-cover w-[90px] h-[130px] '
        />
        <img src={images.flower3} alt="" 
        width={90}
        height={135}
        className='rounded-[30px] object-cover w-[90px] h-[130px] '
        />
        <img src={images.flower4} alt="" 
        width={90}
        height={135}
        className='rounded-[30px] object-cover w-[90px] h-[130px] '
        />
        </div>
        </div>
      </div>
    </div>
    </section>
    <section className='flex w-full items-center  h-screen -z-50 snap-center'>
      <div className='w-[50vw] h-screen'>
        <img src={bg} alt=""  className='object-cover w-full h-full '
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-8 w-[50vw] bg-pink-200 h-full'>
      <h1 className='text-pink-800 font-bold text-5xl'>Giao lưu cùng những người khác</h1>
      <p className='max-w-80 text-center font-medium text-lg text-pink-800'>Bày tỏ cảm xúc và chia sẻ những cảm nghĩ của bản thân về những bức ảnh của mọi người</p>
      <button className='bg-red-500 text-white px-5 py-4 rounded-full font-bold'>Tìm hiểu</button>
    </div>
    </section>
    </main>
  )
}

export default Home