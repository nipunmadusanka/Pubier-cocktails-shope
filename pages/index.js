import Head from 'next/head'
import Image from 'next/image'
import { Input } from 'postcss'
import Box from '../components/Box/Box'
import styles from '../styles/Home.module.css'
import react,{ useState } from 'react'
import Box2 from '../components/Box/Box2/Box2'
import { data } from 'autoprefixer'
import Footer from '../components/Footer/Footer'

const dataDrinks = {"drinks": []};

export default function Home() {
  const drinks= {
        strDrink: "1-900-FUK-MEUP",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
        idDrink: "15395"
  }
  const[open, setOpen]=useState(true);
  const[open1, setOpen1]=useState(false);
  const [drinkList, setdrinkList] = useState(dataDrinks);
  const [searchdrink, setsearchdrink] = useState("margarita");
  console.log(dataDrinks);
  console.log("hbhbhg");
  
  const callAPI = async () => {
		try {
			const res = await fetch(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`+searchdrink,
			);
			const data = await res.json();
			console.log(data);
      setdrinkList(data);
		} catch (err) {
			console.log(err);
		}
	};

  callAPI()
  const submt= (event) => {
    const name = event.target.value;
    setsearchdrink(name);
    console.log(name);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchdrink);
    console.log("test");
  }
  const searchsub = (event) => {
  const search = event.target.value;
  console.log(search);
  setsearchdrink(search);
  
  }
  // const fetchData = async () => {
  //   try {
  //     await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "*/*",
  //         "api-key": "1",
  //         "Access-Control-Allow-Headers": "Content-Type",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Credentials": "true",
  //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  //         "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"

  //       },
  //     })
  //       .then(
  //         async (res) => await res.json()
  //       )
  //       .then((data) => {
  //         console.log(data);
  //         setdrinkList(data);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // fetchData();
  return (
    <div className='bg-white'>
      <div className='fixed top-0 left-0 w-full z-10 ease-in duration-300 bg-white'>
          <div className='max-w-[1240px] m-auto flex items-center justify-between py-4 text-black'>
              <a href="/">
                  <h1 className='font-bold text-2xl text-[#F29F05]'>Pubier</h1>
              </a>
          <div class="flex justify-center">
          <div class="xl:w-96">
                <form className='my-2' onSubmit={handleSubmit}> 
                  <div class="input-group relative flex justify-center items-center w-full rounded">
                  <input value={searchdrink} name='inputt' onChange={submt} type="search" class="form-control font-extralight relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
                  </input>
                  <button type="submit" onClick={searchsub}  class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                  </button>
                  </div>
                </form>
          </div>
          </div>
              <ul className='md:flex lg:flex hidden font-light'>
                  <li className='p-4'>
                      <a href="/" className='hover:text-[#CA7F27]'>Home</a>
                  </li>
                  <li className='p-4'>
                      <a href="/#story" className='hover:text-[#CA7F27]'>Our Story</a>
                  </li>
                  <li className='p-4'>
                      <a href="/#product" className='hover:text-[#CA7F27]'>Product</a>
                  </li>
                  <li className='p-4'>
                      <a href="/#contact" className='hover:text-[#CA7F27]'>Contact</a>
                  </li>
              </ul>
          </div>
      
      </div>
    <div className='items-center justify-between mb-16 lg:mb-28'>
    {/* <div className='flex items-center justify-center py-16 w-full'> 
     <form className='my-2' onSubmit={handleSubmit}> 
      <input type="text" name='search' placeholder='search' className='border-2 border-black p-1 w-96'
      value={searchdrink}
      onChange={submt}
      ></input>
      <button
      type="submit" 
      onClick={()=>setsearchdrink(value)} 
      className='bg-white text-black border-2 border-black p-1 w-44 font-bold hover:bg-amber-200'>Search</button>
     </form>
     </div> */}
      <div className={`bg-no-repeat content_bg justify-center items-center bg-center h-screen bg-cover bg-fixed bg-black`}>
      {/* <img className=''src='/pexels-min-an-1441122.jpg'></img> */}
      </div>
     <div id='story' className='flex justify-center items-center h-screen my-8 mx-28'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10'>
        <div class="flex items-center justify-center">
          <img src='/item.png' className='n w-96'></img>
        </div>
        <div class="flex items-center justify-center">
        <div className='text-center'>
        <p className='font-extralight text-3xl mb-5'>Our Story</p>
          <p className='font-extralight text-center'> 
          Using only the freshest and highest quality ingredients, Pubier makes the best cocktails. Using organic and sustainable farming methods, we source our fruit from our own plantations. This ensures that every cocktail we make is bursting with flavor and goodness.
          <br /> <br />
          As well as using the best ingredients, Pubier is committed to creating truly unique and memorable cocktails using innovative techniques and recipes. Whether you are a fan of classic cocktails or are looking for something more experimental, Pubier has something for everyone.
          </p>
        </div>
        </div>
      </div>
     </div>
     <div className='' id='product'>
     <div className='flex justify-end items-end lg:mx-28 mx-10'>
     <div className='text-right mt-4'>
      <button onClick={()=>{setOpen(true); setOpen1(false)}} className='bg-white hover:text-white hover:bg-[#CA7F27] px-7 border border-b-neutral-800 font-light'>Grid</button>
      <button onClick={()=>{setOpen1(true); setOpen(false)}} className='bg-white hover:text-white hover:bg-[#CA7F27] px-7 border border-b-neutral-800 font-light'>Column</button>
     </div>
     </div>
     <div className={`flex justify-center items-center my-5 lg:mx-28 mx-10 ${ open ? '':'hidden' } `}>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2'>
     {drinkList.drinks.map((t, index) => (
                        <Box title={t.strDrink} type={t.strAlcoholic} thumb={t.strDrinkThumb} tags={t.strTags} idDrink={t.idDrink}/>
                      ))}
      </div>
     </div>
     </div>
     <div className={`flex justify-center items-center my-5 ${ open1 ? '':'hidden' } `}>
      <div className={`grid grid-cols-1 gap-1`}>
      {drinkList.drinks.map((t, index) => (
                          <Box2 title={t.strDrink} type={t.strAlcoholic} thumb={t.strDrinkThumb} des={t.strInstructions} tags={t.strTags} idDrink={t.idDrink}/>
                        ))}
      </div>
     </div>
    </div>
    <div className='flex justify-center items-center my-8 mx-28'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6'>
        <div class="items-center justify-center flex">
          <div className='text-start'>
          <p className='font-extralight text-3xl mb-5'>Ways to use them</p>
            <ul className='list-disc font-light'>
              <li className='text-start'>
                As a refreshing beverage: Cocktails are a great way to quench your thirst and add a touch of flavor to your day. They can be enjoyed on their own as a refreshing drink, or paired with food for a more complex dining experience.
              </li>
              <li className='text-start'>
              As a party drink: Cocktails are a popular choice for social gatherings, such as parties, barbecues, and happy hours. They can be served in individual glasses or made in large batches for sharing.
              </li>
              <li className='text-start'>
              As a dessert: Some cocktails, such as cocktails made with liqueurs or sweet syrups, can be served as a sweet treat or dessert.
               </li>
               <li className='text-start'>
               As a gift: Cocktails can make for unique and thoughtful gifts, especially if you make them yourself or pair them with other fun items, such as cocktail-themed accessories or barware.
              </li>
            </ul>

          </div>
        </div>
        <div class="flex items-center justify-center">
          <img src='/orange.png' className='n w-72'></img>
        </div>
      </div>
     </div>
     
  </div>
  )
}
