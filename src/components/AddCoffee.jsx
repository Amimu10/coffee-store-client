import Swal from 'sweetalert2'
const AddCoffee = () => {

  const handleAddCoffee = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value; 
      const details = form.details.value;
      const photoURL = form.photoURL.value; 

      const newCoffee = {name, quantity, supplier, taste, category, details, photoURL}; 
      console.log(newCoffee);  
     fetch('https://coffee-store-server-jx86h99yx-amimul211-gmailcom.vercel.app/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee) 
     })
     .then(res => res.json()) 
     .then(data => {   
      console.log(data);   
      if(data.insertedId){
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: true, 
          timer: 1500
        })
      }
     })
    
    
  }
  return (
    <div className="text-center">
      <h3>Add New Coffee</h3>
      <p>
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee} className="bg-[#F4F3F0] p-4 sm:p-8 rounded shadow-lg w-full sm:max-w-md  mx-auto">
        <div className="mb-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0 ">
              <label
                htmlFor="name"
                className="block text-left text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="w-full sm:w-1/2 px-2">
              <label
                htmlFor="chef"
                className="block text-left text-gray-700 text-sm font-bold mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                id="chef"
                name="quantity"
                placeholder="Enter quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
              <label
                htmlFor="supplier"
                className="block text-left text-gray-700 text-sm font-bold mb-2"
              >
                Supplier
              </label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                placeholder="Enter supplier"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="w-full sm:w-1/2 px-2">
              <label
                htmlFor="taste"
                className="block text-left text-gray-700 text-sm font-bold mb-2"
              >
                Taste
              </label>
              <input
                type="text"
                id="taste"
                name="taste"
                placeholder="Enter taste"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
              <label
                htmlFor="category"
                className="block text-left text-gray-700 text-sm font-bold mb-2"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter category"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="w-full sm:w-1/2 px-2">
              <label
                htmlFor="details"
                className="block text-left text-gray-700 text-sm font-bold mb-2"
              >
                Details
              </label>
              <input
                type="text"
                id="details"
                name="details"
                placeholder="Enter details"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="photoURL"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Photo
          </label>
          <input
            type="text"
            id="photoURL"
            name="photoURL"
            placeholder="Enter photo URL"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4"> 
          <button
            type="submit"
            className="bg-[#D2B48C] py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline-green"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
