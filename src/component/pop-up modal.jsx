import React, { useRef,useState } from 'react'
import X from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import axios from 'axios';

const modal = ({onClose}) => {
const modalRef = useRef();

const closeModal = (e) => {
    if(modalRef.current ===e.target){
        onClose()
    }
}
const [referrerData, setReferrerData] = useState({
  name: '',
  email: '',
  phone: '',
  referee: '',
});
const [refereeData, setRefereeData] = useState({
  name: '',
  email: '',
  phone: '',
  referrer: '',
});
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:3000/api/referrer', referrerData);
    await axios.post('http://localhost:3000/api/referee', refereeData);
    alert('Data submitted successfully!');
    onClose();
  } catch (error) {
    console.error('Error submitting data', error);
    alert('Error submitting data');
  }
};
  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center'>

        
      <div className= 'mt-10 flex-col gap-5 '>
       
        <div className='bg-slate-500 bg-opacity-50 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 '>
        <button onClick={onClose} className='place-self-end'><X/></button>
        <div className='flex flex-row gap-20 '>

 {/* <form onSubmit={handleSubmit} >
 
            <h1>Referrer Information</h1>
            <div className="flex flex-col gap-5 items-center mx-4">
              <input
                type="text"
                placeholder="Enter your Name"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                value={referrerData.name}
                onChange={(e) =>
                  setReferrerData({ ...referrerData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                value={referrerData.email}
                onChange={(e) =>
                  setReferrerData({ ...referrerData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Mobile No."
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                value={referrerData.phone}
                onChange={(e) =>
                  setReferrerData({ ...referrerData, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Enter referee"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                value={referrerData.referee}
                onChange={(e) =>
                  setReferrerData({ ...referrerData, referee: e.target.value })
                }
              />
              
              <h1>Referee Information</h1>
              <input
                type="text"
                placeholder="Enter your Name"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                value={refereeData.name}
                onChange={(e) =>
                  setRefereeData({ ...refereeData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                value={refereeData.email}
                onChange={(e) =>
                  setRefereeData({ ...refereeData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Mobile No."
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                value={refereeData.phone}
                onChange={(e) =>
                  setRefereeData({ ...refereeData, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Enter referee"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                value={refereeData.referrer}
                onChange={(e) =>
                  setRefereeData({ ...refereeData, referrer: e.target.value })
                }
              />
              <div className="mt-4 flex items-center justify-center gap-2">
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </div>
            </div>
          </form> */}
       <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-4">
  <div className="flex gap-8 mb-4">
    <div >
      <h1 className="text-xl font-semibold mb-4">Referrer Information</h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Enter your Name"
          required
          className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
          value={referrerData.name}
          onChange={(e) =>
            setReferrerData({ ...referrerData, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
          value={referrerData.email}
          onChange={(e) =>
            setReferrerData({ ...referrerData, email: e.target.value })
          }
        />
        <input
          type="tel"
          placeholder="Mobile No."
          required
          className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
          value={referrerData.phone}
          onChange={(e) =>
            setReferrerData({ ...referrerData, phone: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter referee"
          required
          className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
          value={referrerData.referee}
          onChange={(e) =>
            setReferrerData({ ...referrerData, referee: e.target.value })
          }
        />
      </div>
    </div>
    <div className="w-px bg-gray-300 h-full"></div>
    <div className="flex-1">
      <h1 className="text-xl font-semibold mb-4">Referee Information</h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Enter your Name"
          required
          className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
          value={refereeData.name}
          onChange={(e) =>
            setRefereeData({ ...refereeData, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
          value={refereeData.email}
          onChange={(e) =>
            setRefereeData({ ...refereeData, email: e.target.value })
          }
        />
        <input
          type="tel"
          placeholder="Mobile No."
          required
          className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
          value={refereeData.phone}
          onChange={(e) =>
            setRefereeData({ ...refereeData, phone: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter referee"
          required
          className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
          value={refereeData.referrer}
          onChange={(e) =>
            setRefereeData({ ...refereeData, referrer: e.target.value })
          }
        />
      </div>
    </div>
  </div>

  <div className="flex justify-center mt-4">
    <Button type="submit" variant="contained">
      Submit
    </Button>
  </div>
</form>

</div>

        </div>
      </div>





      
    </div>
  )
}

export default modal
