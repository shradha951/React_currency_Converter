
import { useState } from "react"

import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmt,setConvertedAmt]=useState(0);


  const currencyData=useCurrencyInfo(from);
  const options=Object.keys(currencyData);
  console.log(options)

  const covert=()=>{
    setConvertedAmt(amount*currencyData[to])
  }

  const swap=()=>{
    setFrom(to);
    setTo(from)
    setConvertedAmt(amount);
    setAmount(convertedAmt)
  }
 


  return (
    <>
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${'https://images.pexels.com/photos/6985118/pexels-photo-6985118.jpeg'}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            covert();
                            
                           
                        }}
                    >
                        <div className="w-full mb-1">

                        
                            <InputBox
                            label="from"
                            currencyOptions={options}
                            selectCurrency={from}
                            onCurrencyChange={(currenyValue)=>setFrom(currenyValue)}
                            amount={amount}
                            onAmountChange={(currentAmt)=>setAmount(currentAmt)}
                            
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                            label="to"
                            currencyOptions={options}
                            selectCurrency={to}
                            onCurrencyChange={setTo}
                            amountDisable // if no value then true;
                            amount={convertedAmt}

                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
