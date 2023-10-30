function Button({isDisabled}) {
    return ( 
        <div>
            <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-5" disabled={isDisabled}>Submit</button>
        </div>
     );
}

export default Button;