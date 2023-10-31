function Button({isDisabled}) {
    return ( 
        <div>
            <button className=" text-white w-full h-[50px] py-2 rounded-lg hover:from-purple-500 hover:to-cyan-500 transition duration-300 mt-5 font-semibold text-[20px]  bg-gradient-to-r from-cyan-500 to-purple-500" disabled={isDisabled}>Submit</button>
        </div>
     );
}

export default Button;