import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photoURL } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirmed");

        fetch(`https://coffee-store-server-jx86h99yx-amimul211-gmailcom.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = coffees.filter(cof => cof._id !==_id);
              setCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="card  w-full card-side bg-base-100 shadow-xl flex items-center justify-between p-10 gap-8">
      <figure>
        <img className="h-64" src={photoURL} alt="Movie" />
      </figure>
      <div>
        <h2 className="card-title"> Name: {name}</h2>
        <p> Supplier: {supplier}</p>
        <p> Quantity: {quantity}</p>
        <p> Taste: {taste}</p>
      </div>
      <div className="btn-group btn-group-vertical space-y-4">
        <button className="p-2 bg-[#D2B48C] text-white rounded">View</button>
        <Link to={`updateCoffee/${_id}`}> 
          <button className="p-2 bg-[#3C393B] text-white rounded">Edit</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="p-2 bg-[#EA4744] text-white rounded"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
