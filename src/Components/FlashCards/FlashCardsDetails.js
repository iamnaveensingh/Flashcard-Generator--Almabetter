// this is cards detail page 
import React, { useEffect } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TfiBackRight } from 'react-icons/tfi';
import { BsCloudDownload } from 'react-icons/bs';
import { BsPrinter } from 'react-icons/bs';
import ShareModel from './ShareModel';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Details_IMG from "./Images/Details_IMG.gif";
import { IoIosArrowForward } from 'react-icons/io';


const FlashCardsDetails = () => {


  const [active, setActive] = useState(1);
  //  it's a function to reassign value to active 
  const handleClick = (event) => {
    setActive(event);
  }

  // import useParams hook for catch id of the cards from url
  const { id } = useParams();
  // import useSelector from react-redux and access data from reducer
  const { cards } = useSelector((state) => state.flashcardReducers);
  // using find method  for find card which is selected by the user
  const carddata = cards.find((cards) => cards.id === id);
  // useEffect use for set Enter_Definition & term_uploadimage when carddata change
  useEffect(() => {
    setTermDis(carddata.term[0].Enter_Definition)
    // showing image upload by user if image is not uploaded by user it will be set default image
    setTermImg(carddata.term[0].term_uploadimage ? (carddata.term[0].term_uploadimage) : (Details_IMG))
  }, [carddata])

  // use useState hook to set default image of term_uploadimage if image is not uploaded by user
  const [TermImg, setTermImg] = useState(Details_IMG);
  // use useState hook to set cards image of term_uploadimage
  const [TermDis, setTermDis] = useState("");

  // function for set term image and term definition as well as call the function handelClick 
  function displayTermDetails(item, index) {
    setTermImg(item.term_uploadimage ? (item.term_uploadimage)
      : (Details_IMG));
    setTermDis(item.Enter_Definition);
    handleClick(index);
  }
  // import useNavigate for navigation
  const navigate = useNavigate();
  // using useState for share Button on click share it will be visible
  const [visible, setVisible] = useState(false);
  const onClose = () => { setVisible(false) }

  return (
    <>
      <div className="pt-3 dark:text-white">
        <span className='flex'>
          {/* navigate to My Flashcard card page  */}
          <IoMdArrowRoundBack onClick={() => navigate(-1)} className='text-2xl m-1 cursor-pointer hover:text-red-600 ' />
          <span className='font-bold text-xl px-3 dark:text-blue-400'>
            {/* display the name of group */}
            {carddata.Create_Group}
          </span>
        </span>
        <div className="pl-11 my-2 pr-4">
          {/* display the description of  group name */}
          {carddata.description}
        </div>
        <div className="flex flex-wrap space-between">
          <div className="bg-white dark:bg-gray-800 overflow-auto w-64 drop-shadow-md rounded-lg py-1 h-[340px] my-3  px-3">
            <h1 className="font-bold m-2 dark:text-blue-400">Flashcards</h1>
            <hr />
            {/* display list of terms and onclick on terms calling the function displayTermDetails and applying active class  */}
            {carddata.term.map((item, index) => {
              return (
                <div key={index}
                  onClick={() => displayTermDetails(item, index + 1)}
                  className="p-3 font-medium cursor-pointer ">
                  {/* applying active class on the term where you clicked  */}
                  <div className={active === index + 1 ? "activeTerm" : undefined} >
                    <IoIosArrowForward className=' icon hidden mr-1' />
                    {item.Enter_Term}
                  </div>
                </div>
              )
            })}
          </div>


          {/* onClick of term it will shows the term image and term description  */}

          <div className="" id='forPrint'>
            <div className=" flex flex-wrap py-11 px-5  p-3 drop-shadow-md my-3 dark:bg-gray-800 bg-white rounded-lg  ">
              <div className=" pr-2 h-[286px] flex justify-center items-center w-[240px] sm:w-[320px] md:w-[320px] lg:w-[320px] xl:w-[320px]  overflow-hidden">
                <img src={TermImg} alt="" className='m-auto rounded-lg max-h-[286px]' />
              </div>

              <div className=" pl-2 w-[240px] sm:w-[320px] md:w-[320px] lg:w-[320px] xl:w-[320px] ">
                {TermDis}
              </div>
            </div>

            <div className="flex justify-center my-2 ">
              <p className="mx-auto  h-3 w-60 bg-black opacity-5  rounded-[100%] shadow-xl"></p>
            </div>
            {/* displaying the Numbers of cards and when when you click on it. it will call the function displayTermDetails */}
            <div className="flex justify-center ">
              {carddata.term.map((item, index) => {
                return (
                  <div key={index}
                    onClick={() => displayTermDetails(item, index + 1)}
                    className={(active === index + 1 ? "activeCarouselButton" : undefined) + " py-2 border-[2px] border-red-600 font-medium m-1 w-8 rounded-2xl text-center leading-3 bg-blue-700 text-white cursor-pointer hover:text-red-400"}>
                      {index + 1}
                  </div>
                )
              })}
            </div>
          </div>

          {/* button for share, download, print  */}
          <div className=" w-[250px] my-3  rounded-lg h-48">
            <div onClick={() => setVisible(true)} className="bg-white dark:bg-gray-800 flex cursor-pointer mb-4 drop-shadow-md hover:scale-110 rounded-lg w-[250px] p-2 h-10"><TfiBackRight className='text-2xl mx-5' />Share</div>
            <div className="bg-white dark:bg-gray-800 flex cursor-pointer my-4 drop-shadow-md hover:scale-110 rounded-lg w-[250px] p-2 h-10"><BsCloudDownload className='text-2xl mx-5' />Download</div>
            <div onClick={() => { window.print() }} className="bg-white dark:bg-gray-800 flex cursor-pointer my-4 drop-shadow-md hover:scale-110 rounded-lg w-[250px] p-2 h-10"><BsPrinter className='text-2xl mx-5' />Print</div>
          </div>


        </div>

      </div>


      <ShareModel onClose={onClose} visible={visible} />



    </>
  )
}

export default FlashCardsDetails
