import { useEffect, useState } from "react";
import bannerImg from "../../assets/vector1.png";
import bannerImgRight from "../../assets/vector2.png";

const Service = () => {

  const [tickets, setTickets] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    fetch("/ticket.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleAddTask = (ticket) => {
    setCurrentTask(ticket);
    setInProgressCount(prev => prev + 1);
    alert("Ticket added to Task Status");
  };

  const handleComplete = () => {
    setResolvedTasks([...resolvedTasks, currentTask]);
    setResolvedCount(prev => prev + 1);
    setCurrentTask(null);
  };

 return (
  <div className="mb-20">

    {/* Banner Section */}
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-16">

      <div
        className="rounded-xl p-10 text-center text-white bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(168,85,247,0.8), rgba(126,34,206,0.8)), url(${bannerImg})`
        }}
      >
        <h2 className="text-xl">In-Progress</h2>
        <p className="text-4xl">{inProgressCount}</p>
      </div>
      
      <div
        className="rounded-xl p-10 text-center text-white bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to right, #86efac, #22c55e), url(${bannerImgRight})`
        }}
      >
        <h2 className="text-xl">Resolved</h2>
        <p className="text-4xl">{resolvedCount}</p>
      </div>
        
    </div>
   <div className="w-11/12 mx-auto mb-6">
        <h3 className="text-start text-3xl text-gray-800 font-semibold">Customer Tickets</h3>
    </div>
    {/* MAIN GRID */}
    <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-6">
      {/* LEFT SECTION - Ticket Cards */}
      <div className="md:col-span-2">

        <div className="grid md:grid-cols-2 gap-6">

          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleAddTask(ticket)}
              className="card bg-base-300 shadow-lg  cursor-pointer"
            >
            
              
              <div className="card-body">

                <h2 className="card-title">{ticket.title}</h2>

                <p className="text-sm text-gray-500">
                  Ticket ID: {ticket.id}
                </p>

                <p>{ticket.description}</p>
                <div className="flex justify-between gap-4">
                  
                  <div className="flex gap-2 mt-3">
                    <div className="badge text-sm text-gray-500">{ticket.priority}</div>
                    <div className="badge text-xs  text-rose-400">{ticket.status}</div>
                  </div>

                  <div className="flex mt-3 text-sm gap-2">
                    <p className="text-sm"> {ticket.customer}
                    </p>
                    <p className="text-sm">{ticket.createdAt}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>


      {/* RIGHT SECTION */}
      <div>

        <h2 className="text-xl font-bold mb-3">Task Status</h2>

        {currentTask && (
          <div className="card bg-base-200 p-4 shadow">

            <h3 className="font-semibold mb-4">
              {currentTask.title}
            </h3>

            <button
              onClick={handleComplete}
              className="btn btn-success w-full"
            >
              Complete
            </button>

          </div>
        )}

        <h2 className="text-xl font-bold mt-6 mb-3">
          Resolved Task
        </h2>

        {resolvedTasks.map((task, index) => (
          <div
            key={index}
            className="bg-gray-200 p-3 rounded mb-2"
          >
            {task.title}
          </div>
        ))}

      </div>

    </div>

  </div>
  );
};
export default Service;