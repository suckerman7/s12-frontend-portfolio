export default function Profile() {
    return (
        <section className='px-8 py-20 grid md:grid-cols-2 gap-10'>

            <div>
                <h2 className='text-indigo-700 text-3xl font-bold mb-6'>Profile</h2>
                <ul className='space-y-3 text-sm'>
                    <li><b>Doğum Tarihi:</b> 07.05.2002</li>
                    <li><b>İkamet Şehri:</b> İstanbul</li>
                    <li><b>Eğitim:</b> Beykent Üniv. Bilgisayar Mühendisliği</li>
                    <li><b>Tercih Ettiği Rol:</b> Frontend, Backend, UI</li>
                </ul>
            </div>

            <div>
                <h3 className=' text-indigo-700 text-3xl mb-4'>About Me</h3>
                <p className='text-gray-600 mb-4'>
                    I have been interested in programming stuff since I was young, by seeing how some programs like games worked.
                </p>
                <p className='text-gray-600'>
                    I did try to improve myself on backend and frontend, but I wasn't as efficient until joining Workintech's Full Stack Pro program. Since then, I feel more confident in myself and ready for work.
                </p>
            </div>

        </section>
    );
}