import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Card from './components/Card'


function App() {

  return (
    <>
      {/* <h1>test</h1>
      <div class="flex flex-row">
        <div class="basis-1/4">01</div>
        <div class="basis-1/4">02</div>
        <div class="basis-1/2">03</div>
      </div>
      <div class="bg-midnight text-tahiti">
        <p>test</p>
      </div>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <h1 className='bg-midnight'>
        Hello world!
      </h1> */}
      <Navbar />
      <div class="flex flex-row w-full justify-center items-center">
        <div class="flex flex-col w-[80%] h-[200vh] justify-start items-start pt-5">
          <div class="flex flex-row w-[100%] justify-between items-start pt-5">
            <Carousel />
            <div className="card bg-slate-300 h-60 w-80 shadow-xl rounded-none">
              <div className="card-body items-center text-center pt-2">
                <h2 className="card-title">Gordano</h2>
                <h1 className=' text-2xl'>PACK 5 T-SHIRTS FOR <br />SUMMER</h1>
                <p className='font-bold'>Starting at <span className='text-red-600'>$99.99</span></p>
              </div>
              <figure className="px-5 pt-0">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ChpMjWbxNxHuSo3qQ163ysLJ2bUtAgXYlA&s"
                  alt="t shirt"
                  className='h-[15vh]'
                />
              </figure>
            </div>
          </div>
          <h1 className='pt-4'>Top Categories Of The Month</h1>
          <div class="w-full h-[.5vh] bg-slate-300"></div>
          <div className='mt-5 flex flex-row w-[100%] flex-wrap justify-center items-cente gap-4 max-sm:flex-colm  '>
            <Card title={'Electronics'} bold={"yes"} img={"https://images.samsung.com/is/image/samsung/p6pim/sa_en/ua43t5300auxum/gallery/sa-en-fhd-t5300-ua43t5300auxum-531622779?$650_519_PNG$"} text1={'TV Television'} text2={'Air Conditioners'} text3={'Washinf Machiners'} text4={'Audio & Theaters'} text5={'office Electronics'} />
            <Card title={'Clothings'} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14mbTh7gEUGjk1eBkN2m6CRP34IAOxecbHw&s"} text1={'womens'} text2={'Mens'} text3={'Bags & Backpacks'} text4={'Accessories'} />
            <Card title={'Computers'} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7Pi4eKYFaNI42FsntgMZdc378HZHU3D_Dw&s"} text1={'Desktop Pc'} text2={'Laptop'} text3={'PC Gaming'} text4={'Sroage & Memory'} text5={'Pc Components'} />
            <Card title={'Home & Kitchen'} img={"https://www.westelm.com.sa/assets/styles/GroupProductImages/erik-leather-wing-chair-h1711/image-thumb__410777__product_listing/erik-leather-wing-chair-h1711_v1_hero_image_url.jpg"} text1={'Funitures'} text2={'Dcor'} text3={'Cookwares'} text4={'Utensil & Gadgets'} text5={'Garden'} />
            <Card title={'Healthy & Beauty'} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8N8KbOosDDEfVOKdozwKBQyFuch0ALGxfw&s"} text1={'Makeup'} text2={'Skin Care'} text3={'Hair Care'} text4={'Tools & Equipment'} text5={'Perfurmes'} />
            <Card title={'Jewlwry & Watch'} img={"https://images.squarespace-cdn.com/content/v1/512f9596e4b0ed945e3306aa/1718068586296-WCQMFV5AS35CZ0BGG8RV/P1022523.jpg"} text1={'Pendant'} text2={'Nechlace'} text3={'Watch'} text4={'Braclents'} text5={'Accessories'} />
          </div>
          <div class="flex flex-row w-[100%] h-[80vh] bg-slate-100 justify-between items-start mt-5">
            <img
              src="" />
              <p>$260.50 <br/> <span className='font-bold text-lime-500 text-2xl'>$2019.05</span></p>
          </div>
        </div>
      </div>




    </>
  )
}

export default App
