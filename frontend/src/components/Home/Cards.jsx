// components/Cards.jsx
import React, { useState, useEffect } from "react";
import { FaEdit, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { Modal, Button, Label, TextInput, Textarea } from "flowbite-react";

const LOCAL_STORAGE_KEY = "tasks";

const Cards = ({ filter, home }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [newCard, setNewCard] = useState({
    title: "",
    description: "",
    date: "",
    link: "",
    gform: "",
    status: "Ongoing",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setData(storedTasks);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prevCard) => ({ ...prevCard, [name]: value }));
  };

  const handleSubmit = () => {
    const updatedData = [...data, newCard];
    setData(updatedData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
    resetForm();
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setNewCard({
      title: "",
      description: "",
      date: "",
      link: "",
      gform: "",
      status: "Ongoing",
    });
    setModalOpen(false);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
  };

  const handleEdit = (index) => {
    const taskToEdit = data[index];
    setNewCard(taskToEdit);
    setModalOpen(true);
    handleDelete(index);
  };

  const filteredData = data.filter((item) =>
    (filter === 'All' || item.status === filter) &&
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="p-5">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-purple-500 mb-4 md:mb-0">Events</h1>
        <div className="bg-white flex items-center border border-gray-300 rounded-lg p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow outline-none text-black"
          />
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredData.map((item, i) => {
          const cardBgColor =
            item.status === "Ongoing"
              ? "bg-green-50"
              : item.status === "Upcoming"
              ? "bg-orange-50"
              : item.status === "Completed"
              ? "bg-blue-50"
              : "bg-white";

          const buttonBgColor =
            item.status === "Ongoing"
              ? "bg-green-400 hover:bg-green-500"
              : item.status === "Upcoming"
              ? "bg-orange-500 hover:bg-orange-600"
              : item.status === "Completed"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-500 hover:bg-gray-600";

          return (
            <section
              key={i}
              className={`container mx-auto p-5 max-sm:py-3 shadow-xl transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 rounded-md ${cardBgColor}`}
            >
              <div className="pt-3 text-black">
                <div className="flex justify-between font-bold pb-5">
                  <h1 className="text-2xl">{item.title}</h1>
                  <h2 className="text-gray-400">{item.date}</h2>
                </div>
                <p className="text-gray-500 font-medium">{item.description}</p>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <a
                      href={item.link}
                      className="whitespace-nowrap mt-6 text-lg md:text-base xs:text-xs font-semibold text-purple-500 hover:text-purple-400"
                    >
                      Event Website
                    </a>

                    <a
                      href={item.gform}
                      className="whitespace-nowrap mt-6 text-lg md:text-base xs:text-xs font-semibold text-purple-500 hover:text-purple-400"
                    >
                      Google Form
                    </a>
                  </div>

                  <div className="flex flex-row mt-8 w-full items-center justify-start gap-6">
                    <button
                      className={`uppercase py-3 px-4 whitespace-nowrap rounded-lg border-2 border-transparent text-white text-md font-semibold transition-all duration-300 ${buttonBgColor}`}
                    >
                      {item.status}
                    </button>
                    <FaEdit className="text-xl cursor-pointer" onClick={() => handleEdit(i)} />
                    <MdDelete className="text-xl cursor-pointer" onClick={() => handleDelete(i)} />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
        {home === "true" && (
          <section
            className="flex flex-col justify-center items-center bg-white rounded-md p-4 shadow-xl text-black hover:scale-105 hover:cursor-pointer transition-all duration-300"
            onClick={() => setModalOpen(true)}
          >
            <IoAddCircleSharp className="text-4xl" />
            <h2 className="text-2xl mt-4">Add Event</h2>
          </section>
        )}
      </section>

      <Modal show={modalOpen} size="md" onClose={handleCancel} popup>
        <Modal.Header>Add New Event</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <Label htmlFor="title" value="Title" />
              <TextInput
                id="title"
                name="title"
                placeholder="Event Title"
                value={newCard.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="description" value="Description" />
              <Textarea
                id="description"
                name="description"
                rows="5"
                cols="5"
                placeholder="Event Description"
                value={newCard.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="date" value="Date" />
              <TextInput
                id="date"
                name="date"
                type="date"
                value={newCard.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="link" value="Event Website Link" />
              <TextInput
                id="link"
                name="link"
                placeholder="https://example.com"
                value={newCard.link}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="gform" value="Google Form Link" />
              <TextInput
                id="gform"
                name="gform"
                placeholder="https://example.com/form"
                value={newCard.gform}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="status" value="Status" />
              <TextInput
                id="status"
                name="status"
                placeholder="Ongoing, Upcoming, Completed"
                value={newCard.status}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-end gap-4">
              <Button onClick={handleCancel} color="red" className="bg-red-500 text-white hover:bg-red-600">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="green" className="bg-green-500 text-white hover:bg-green-600">
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Cards;
