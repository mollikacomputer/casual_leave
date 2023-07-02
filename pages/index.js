import ReactToPrint from "react-to-print";
import { useState, useRef } from "react";


export default function Home() {
  const [showApplication, setShowApplication] = useState(false);

  const [peopleName, setPeopleName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [amountDay, setAmountDay] = useState("");
  const [dayInWord, setDayInWord] = useState("");
  
  const componentRef = useRef();
  
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="md:ml-16 md:mr-10 ">
        {showApplication ? (
          <div className="bg-white md:p-10 sm: p-4">
            <ReactToPrint
              trigger={() => (
                <button className="bg-blue-500 md:mb-10 sm:mb-4 text-white font-bold py-2 md:px-8 sm:px2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                  Download / Print
                </button>
              )}
              content={() => componentRef.current}
            />
            <h2 className="md:text-4xl sm:lg sm: hidden font-bold"> নৈমিত্তিক ছুটি </h2>
            <div ref={componentRef} className="md:m-16 sm: p-2 sm: m-2">
              <p>তারিখঃ</p>
              <br/>
              <p>বরাবর,</p>
              <p>সহকারী উপজেলা শিক্ষা অফিসার</p>
              <p>মাদারীপুর সদর, মাদারীপুর।</p>
              <br />
              <p>
                <b> বিষয়ঃ নৈমিত্তিক ছুটির জন্য আবেদন।</b>
              </p>
              <br />
              <p>জনাব,</p>
              <p className="text-justify leading-10">
                সবিনয় নিবেদন এই যে, আমি <b> {peopleName} </b>, প্রধান শিক্ষক,
                {schoolName} সরকারি প্রাথমিক বিদ্যালয়, মাদারীপুর সদর, মাদারীপুর
                এ কর্মরত আছি। আমার ব্যক্তিগত / পারিবারিক সমস্যার কারনে
                {amountDay} ( {dayInWord} ) দিনের বিশেষ ছুটি একান্ত প্রয়োজন।
              </p>
              <br />
              <p className="text-justify">
                অতএব, আমি যাতে {amountDay} ( {dayInWord} ) দিনের ছুটি পেতে পারি
                তার সু-ব্যবস্থা করতে আপনার সদয় মর্জি হয়।
              </p>
              <br />
              <br />
              <p> বিনীত নিবেদক </p>
              <br />
              <br />
              <p> ({peopleName} )</p>
              <p> প্রধান শিক্ষক </p>
              <p> {schoolName} প্রাথমিক বিদ্যালয়</p>
              <p>মাদারীপুর সদর, মাদারীপুর।</p>
            </div>
            <button
              onClick={() => setShowApplication(false)}
              className="bg-blue-500 text-white font-bold py-2 my-10 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <div className="bg-white radius rounded shadow-xl md:p-16 sm:p-2 sm:m-2 md:my-10 sm:my-2 ">
            <h1 className="md:text-2xl sm:text-lg md:flex justify-center items-center font-bold">
              নৈমিত্তিক ছুটি লেখা দরকার?
              </h1>
            <h2 className="md:text-xl my-5 sm: hidden md:block md:flex justify-center items-center font-bold">
              অর্ঘ্য মন্ডল ও
            </h2>
            <h3 className="md:text-lg mb-10 sm: hidden md:flex justify-center items-center font-bold">
              মল্লিকা কম্পিউটারের সৌজন্যে
            </h3>
            <div className="md:grid grid-cols-2 md:gap-10 sm: p-2 ">
              <div className="flex flex-col">
                <label className="font-bold text-lg" htmlFor="peoplename">
                  আপনার নাম লিখুন
                </label>
                <input
                  type="text"
                  name="peoplename"
                  id="peoplename"
                  placeholder="আপনার নাম লিখুন"
                  autoComplete="off"
                  value={peopleName}
                  onChange={(e) => setPeopleName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-lg" htmlFor="schoolno">
                  বিদ্যালয়ের নাম লিখুন
                </label>
                <input
                  type="text"
                  name="schoolName"
                  id="schoolName"
                  placeholder="... সরকারি প্রাথমিক বিদ্যালয়"
                  autoComplete="off"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                />
              </div>
            </div>
            <div className="md:grid grid-cols-2 sm:flex flex-col gap-10 sm: p-2 ">
              <div className="flex flex-col">
                <label className="font-bold text-lg" htmlFor="schoolno">
                  ছুটির পরিমান অংকে লিখন
                </label>
                <input
                  type="text"
                  name="amountDay"
                  id="amountDay"
                  placeholder=" কত দিন ছুটি দরকার? "
                  autoComplete="off"
                  value={amountDay}
                  onChange={(e) => setAmountDay(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-lg" htmlFor="schoolno">
                  ছুটির পরিমান কথায় লিখ
                </label>
                <input
                  type="text"
                  name="dayInWord"
                  id="dayInWord"
                  placeholder=" কত দিন ছুটি দরকার? তিন "
                  autoComplete="off"
                  value={dayInWord}
                  onChange={(e) => setDayInWord(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={() => setShowApplication(true)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Preview Information
            </button>
            <p className="text-center my-5 sm:hidden hidden md:block"> আপনার নৈমিত্তিক ছুটি একান্ত প্রয়োজন। লেখার লোক পাচ্ছেন না? কোন সমস্যা নাই এই ফরমটা ফিলাম করুন এবং নিচের বাটনে  ক্লিক করুন সঠিক হলে প্রিন্ট / ডাউনলোড করুন। সমস্যা থাকলে আবার নিচে যান এবং এডিট করুন। </p>
            <p className="flex justify-center sm:hidden hidden md:block"> বিশেষ প্রয়োজনেঃ উপজেলা গেট সংলগ্ন, মাদারীপুর সদর, মাদারীপুর। অর্ঘ্য বাবু বাবা ০১৩০০-২৪১০০১ </p>
          </div>
        )}
      </div>
    </>
  );
}
