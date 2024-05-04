const ContactPage = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl px-8 pb-8">Contact</h1>
            <form className="flex flex-col gap-4 w-full md:w-1/2 px-8">
                <input type="text" placeholder="Name" className="p-2 rounded-md" />
                <input type="email" placeholder="Email" className="p-2 rounded-md" />
                <textarea placeholder="Message" className="p-2 rounded-md"></textarea>
                <button className="bg-black text-white p-2 rounded-md">Send</button>
            </form>
        </div>
    )
}

export default ContactPage