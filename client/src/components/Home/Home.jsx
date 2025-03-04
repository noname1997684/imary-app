import React,{useState,useEffect, useRef} from 'react'
import images from '../../images/index.js'
import {FaSearch} from 'react-icons/fa'
import {data} from './data.js'
import img from '../../images/4.jpg'
import bg from '../../images/bg-like.avif'
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const nextSlide=()=>{
    setIndex((index+1)%data.length)
  }
  useEffect(()=>{
    const interval=setInterval(nextSlide,6500)
    return ()=>clearInterval(interval)
  })
  const navigate=useNavigate()
  const [index, setIndex]=useState(0)
  const pageRef= useRef(null)
  console.log(data)

  return (
    <main className='snap-y snap-mandatory overflow-y-scroll h-screen '>
    <section className='flex flex-col  items-center h-[85vh] mt-6 snap-center relative'>
    <div className='relative w-full '>
    <div className='flex items-center flex-col gap-3 text-4xl  md:text-5xl' id='text-animation'>
        <h1 className='font-semibold '>Cùng nhau khám phá</h1>
        <div className='mb-3'>
        {data.map((item,i)=>(
          <div className={`slider-reveal ${item.color} ${i===index?"choosen": ""}`} key={i} >
          <h1 className={`font-semibold `}>{item.text}</h1>
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
      <div className={`flex px-2  justify-around  gap-2 mt absolute top-1 md:top-16  h-[84vh] md:h-[76vh] overflow-hidden  slider-reveal ${i===index?"choosen":""} cursor-pointer`} id="item" onClick={()=>{
        navigate(`/posts/search?page=1&searchQuery=${'none'}&tags=${item.search}`)
        }}>
      <div className=' gap-4  flex-col hidden xl:flex'>
        <img src={item.images[0]} alt="img"
        className='rounded-2xl w-[236px] h-[360px] object-cover'/>
        <img src={item.images[1]} alt="img"
        
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '100ms'}}
        />
      </div>
      <div className='gap-4  flex-col hidden md:flex translate-y-28 '>
        <img src={item.images[2]} alt="img"
        
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '200ms'}}
        />
        <img src={item.images[3]} alt="img"
       
        className='rounded-2xl w-[236px] h-[360px] object-cover '
        style={{animationDelay: '300ms'}}
        />
      </div>
      <div className='gap-4 flex flex-col translate-y-48'>
        <img src={item.images[4]} alt="img"
        
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '400ms'}}
        />
        <img src={item.images[5]} alt="img"
       
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '500ms'}}
        />
      </div>
      <div className='gap-4 flex flex-col translate-y-80'>
        <img src={item.images[6]} alt="img"
      
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '600ms'}}
        />
        <img src={item.images[7]} alt="img"
        
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '700ms'}}
        />
      </div>
      <div className='gap-4 flex flex-col translate-y-48'>
        <img src={item.images[8]} alt="img"
        
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '800ms'}}
        />
        <img src={item.images[9]} alt="img"
        
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '900ms'}}
        />
      </div>
      <div className='gap-4  flex-col hidden md:flex translate-y-28'>
        <img src={item.images[10]} alt="img"
        
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '1000ms'}}
        />
        <img src={item.images[11]} alt="img"
        
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '1100ms'}}
        />
      </div>
      <div className='gap-4  flex-col hidden xl:flex'>
        <img src={item.images[12]} alt="img"
        
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '1200ms'}}
        />
        <img src={item.images[13]} alt="img"
       
        className='rounded-2xl w-[236px] h-[360px] object-cover'
        style={{animationDelay: '1300ms'}}
        />
      </div>
      </div>
    ))}

    </div>
    <div className='absolute bottom-3 '>
      {data.map((item,i)=>(
        <button className={`text-white text-3xl font-extrabold ${item.color} ${i===index?"active":"hidden"}  p-3 rounded-full pointdown`} key={i}
        onClick={
          ()=>pageRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        >
      <IoIosArrowDown />
      </button>
      ))}
      
    </div>
    </section>
    <section className='flex items-center relative bg-yellow-200 h-screen  snap-center second-section' ref={pageRef}>
      <div className='w-[50vw] flex tems-center justify-center max-[830px]:hidden'>
    <div className='relative h-fit  w-fit z-10 cursor-pointer' onClick={()=>navigate(`/posts/search?page=1&searchQuery=${'none'}&tags=${['beach']}`)}>
      <div className=' -z-10 absolute -left-36 top-12'>
      <img src={images.place7} alt="" 
      
      className='rounded-[40px] object-cover w-[204px] h-[285px] hidden xl:block '/>
      </div>
      <div>
      <img src={images.place2} alt="" 
      className='rounded-[40px] object-cover w-[310px] h-[456px] max-[890px]:scale-110 max-[830px]:hidden'/>
      </div>
      <div  className='absolute -z-10 -right-24 top-[-90px]'>
      <img src={images.place6} alt="" 
      width={120}
      height={130}
      className='rounded-[40px] object-cover w-[180px] h-[260px] max-[890px]:hidden'/>
      </div>
      <div className='absolute -bottom-9 -right-28 -z-10'>
      <img src={images.place5} alt="" 
      width={100}
      height={123}
      className='rounded-[40px] object-cover w-[164px] h-[258px] max-[890px]:hidden '/>
      </div>
      <div className=' w-64 flex items-center justify-center gap-2 bg-white absolute top-40 -left-16  py-5 rounded-full '>
    <FaSearch className='text-2xl'/>
        <h1 className='font-bold text-2xl'>Cảnh biển đẹp</h1>
      </div>
    </div>
  </div>
    <div className='flex flex-col items-center gap-8 w-[50vw] max-[830px]:w-full'>
      <h1 className='text-red-700 font-bold text-4xl  md:text-5xl '>Tìm kiếm ý tưởng</h1>
      <p className='max-w-80 text-center font-medium md:text-lg text-red-700 text-base'>Bạn muốn thử sức những thứ mới mẻ? Hãy tìm kiếm những thứ bạn cần và cùng nhau khám phá chúng</p>
      <button className='bg-red-500 text-white px-5 py-4 rounded-full font-bold cursor-pointer' onClick={()=>navigate(`/posts/search?page=1&searchQuery=${'none'}&tags=${['beach']}`)}>Tìm hiểu</button>
    </div>
    
    <div className='sm:columns-4 columns-3 4 min-[830px]:hidden mt-7 grid-third'>
    <div className='relative'>
        <img src={images.flower6} alt="" className='rounded-2xl h-[322px] object-cover'/>
        <div className=' w-full flex items-center justify-center gap-2 bg-white absolute top-5 -left-4  py-5 rounded-full '>
    <FaSearch className='text-sm'/>
        <h1 className='font-bold text-sm'>Các loài hoa</h1>
      </div>
    </div>  
    <div className='relative'>
        <img src={images.pets15} alt="" className='rounded-2xl h-[322px] object-cover'/>
        <div className=' w-full flex items-center justify-center gap-2 bg-white absolute top-5 -left-4 py-5 rounded-full '>
    <FaSearch className='text-sm'/>
        <h1 className='font-bold text-sm'>Động vật</h1>
      </div>
    </div>  
    <div className='relative hid' >
        <img src={images.place9} alt="" className='rounded-2xl h-[322px] object-cover'/>
        <div className=' w-full flex items-center justify-center gap-2 bg-white absolute top-5 -left-4 py-5 rounded-full  '>
    <FaSearch className='text-sm'/>
        <h1 className='font-bold text-sm'>Kỳ quan thế giới</h1>
      </div>
    </div>  
    <div className='relative hidden sm:block'>
        <img src={images.food16} alt="" className='rounded-2xl h-[322px] object-cover '/>
        <div className=' w-full flex items-center justify-center gap-2 bg-white absolute top-5  -left-4 py-5 rounded-full '>
    <FaSearch className='text-sm'/>
        <h1 className='font-bold text-sm'>Các món ăn</h1>
      </div>
    </div>  
    </div>
    </section>
    <section className='flex w-full items-center relative bg-teal-100 h-screen snap-center fourth-sec'>
    <div className='flex flex-col items-center gap-8 w-[50vw]'>
      <h1 className='text-teal-800 font-bold max-[1090px]:w-[360px] text-center text-4xl  md:text-5xl'>Tạo nên những bức ảnh</h1>
      <p className='max-w-80 text-center font-medium text-lg text-teal-800'>Tạo nên những thứ mới mẻ để mọi người cùng thưởng thức</p>
      <button className='bg-red-500 text-white px-5 py-4 rounded-full font-bold' onClick={()=>navigate(`/auth`)}>Tìm hiểu</button>
    </div>
    <div className=' w-[50vw] h-screen fourth-section max-[830px]:hidden'>
      <div className='relative w-fit mt-7 main-fourth'>
      <div className='absolute -top-4 -right-64 z-10 hidden xl:block cursor-pointer' onClick={()=> navigate(`/posts/search?page=1&searchQuery=${'none'}&tags=${['peace']}`)}>
        
        <img src={images.place8} alt="" 
        
        className='rounded-[30px] object-cover w-[200px] h-[210px] '/>
        
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4'>Cảnh thanh bình</h1>

      </div>
      <div className='absolute top-52 -right-48 z-20 hidden xl:block cursor-pointer' onClick={()=> navigate(`/posts/search?page=1&searchQuery=${'none'}&tags=${['pets']}`)}>
        <img src={images.dog1} alt="" 
        
        className='rounded-[30px] object-cover w-[165px] h-[173px] '/>
        <h1 className='text-white font-bold text-xl absolute bottom-4 left-4 w-[100px]'>Thú cưng đáng yêu</h1>

      </div>
      <div className='absolute xl:-bottom-64 xl:right-24  bottom-16  z-20 fourth-image max-[890px]:hidden cursor-pointer' onClick={()=> navigate(`/posts/search?page=1&searchQuery=${'none'}&tags=${['plants']}`)}>
        <img src={images.tree1} alt="" 
        
        className='rounded-[30px] object-cover w-[223px] h-[235px] '/>
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4 '>Cây cảnh trong nhà</h1>

      </div>
      <div className='absolute bottom-16 xl:-bottom-60 xl:-right-56 -right-8 z-20 max-[890px]:hidden cursor-pointer' onClick={()=> navigate(`/posts/search?page=1&searchQuery=${'none'}&tags=${['home']}`)}>
        <img src={images.home1} alt="" 
        className='rounded-[30px] object-cover w-[223px] h-[235px] '/>
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4'>Trang trí nội thất</h1>

      </div>
      <div className='relative max-[830px]:hidden cursor-pointer' onClick={()=> navigate(`/posts/search?page=1&searchQuery=${'none'}&tags=${['flowers']}`)}>
        <img src={images.flower5} alt="" 
        className='rounded-[30px] object-cover w-[380px] h-[400px] ' />
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
    </div>
    <div className='sm:columns-4 columns-3 4 min-[830px]:hidden mt-7 grid-third'>
    <div className='relative'>
        <img src={images.family3} alt="" className='rounded-2xl h-[322px] object-cover'/>
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4 text-center'>Về bản thân</h1>
    </div>  
    <div className='relative'>
        <img src={images.family1} alt="" className='rounded-2xl h-[322px] object-cover'/>
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4 text-center'>Với gia đình</h1>
    </div>  
    <div className='relative hid' >
        <img src={images.family2} alt="" className='rounded-2xl h-[322px] object-cover'/>
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4 text-center'>Với bạn bè</h1>
    </div>  
    <div className='relative hidden sm:block'>
        <img src={images.company1} alt="" className='rounded-2xl h-[322px] object-cover '/>
        <h1 className='text-white font-bold text-2xl absolute bottom-4 left-4 text-center'>Với đồng nghiệp</h1>
    </div>  
    </div>
    </section>
    <section className='flex w-full items-center  h-screen -z-50 snap-center last-section max-[830px]:bg-pink-200'>
      <div className='w-[50vw] h-screen max-[830px]:hidden'>
        <img src={bg} alt=""  className='object-cover w-full h-full '
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-8 w-[50vw] bg-pink-200 h-full last-title max-[830px]:w-full'>
      <h1 className='text-pink-800 font-bold text-4xl  md:text-5xl max-w-[460px] text-center max-[830px]:max-w-full mt-5'>Giao lưu cùng những người khác</h1>
      <p className='max-w-80 text-center font-medium text-lg text-pink-800'>Bày tỏ cảm xúc và chia sẻ những cảm nghĩ của bản thân về những bức ảnh của mọi người</p>
      <button className='bg-red-500 text-white px-5 py-4 rounded-full font-bold' onClick={()=>navigate(`/auth`)}>Tìm hiểu</button>
    </div>
    <div className='min-[830px]:hidden'>
      <img src={img} alt="" />
    </div>
    </section>
    </main>
  )
}

export default Home