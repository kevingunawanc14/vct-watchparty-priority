import { useState } from "react";
import "./App.css";
import { AiFillFire } from "react-icons/ai";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { IoMdAnalytics } from "react-icons/io";

function App() {
  const [streamers, setStreamers] = useState([
    {
      id: "1",
      name: "shanks_ttv",
      profileUrl: "https://www.twitch.tv/shanks_ttv",
      imgUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/b7aa2d4e-add0-4b2c-b175-c3e54984dc64-profile_image-70x70.png",
      status: "LIVE NOW",
      badge: "AURA",
    },
    {
      id: "3",
      name: "tarik",
      profileUrl: "https://www.twitch.tv/tarik",
      imgUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/f04d2a14-8d63-4cd5-a469-7ec2cd6e5ce3-profile_image-150x150.png",
      status: "LIVE NOW",
      badge: "CASUAL",
    },
    {
      id: "2",
      name: "curry",
      profileUrl: "https://www.twitch.tv/curry",
      imgUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/2a2908d2-f3e0-4d0a-afd3-dcfd23700bbb-profile_image-150x150.png",
      status: "LIVE NOW",
      badge: "CASUAL",
    },

    // {
    //   id: "4",
    //   name: "WARDELL",
    //   profileUrl: "https://www.twitch.tv/wardell",
    //   imgUrl:
    //     "https://static-cdn.jtvnw.net/jtv_user_pictures/8fcb1b86-8d79-4743-ae17-3ea7756feeeb-profile_image-70x70.png",
    //   status: "LIVE NOW",
    //   badge: "SNIPING",
    // },
    // {
    //   id: "5",
    //   name: "sinatraa",
    //   profileUrl: "https://www.twitch.tv/sinatraa",
    //   imgUrl:
    //     "https://static-cdn.jtvnw.net/jtv_user_pictures/d5de7613-5632-4c20-bf83-132f5e4c28ac-profile_image-70x70.png",
    //   status: "LIVE NOW",
    //   badge: "GOAT",
    // },
    // {
    //   id: "6",
    //   name: "Marved6",
    //   profileUrl: "https://www.twitch.tv/marved6",
    //   imgUrl:
    //     "https://static-cdn.jtvnw.net/jtv_user_pictures/7b82ff01-a4fe-4f79-ab6a-bd3573f83bdf-profile_image-70x70.png",
    //   status: "LIVE NOW",
    //   badge: "CASUAL",
    // },
    {
      id: "8",
      name: "Sliggytv",
      profileUrl: "https://www.twitch.tv/sliggytv",
      imgUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/04dbc9bb-27bf-4975-b9ab-361268e8f5b5-profile_image-70x70.png",
      status: "LIVE NOW",
      badge: "ANALYTIC",
    },
    {
      id: "9",
      name: "GOFNS",
      profileUrl: "https://www.twitch.tv/gofns",
      imgUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/69ba6f42-a9f2-44a6-a088-95faf9d0ddd3-profile_image-70x70.png",
      status: "OFFLINE",
      badge: "AURA",
    },
    {
      id: "10",
      name: "s0mcs",
      profileUrl: "https://www.twitch.tv/s0mcs",
      imgUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/e086d0a4-781d-49d6-9732-2d8f9516f9c0-profile_image-70x70.png",
      status: "OFFLINE",
      badge: "CASUAL",
    },
    // Add more streamer data here as needed
  ]);

  const [waiting, setWaiting] = useState([]);
  const [priority, setPriority] = useState([]);

  // onDragEnd = result => {

  // };
  function handleOnDragEnd(result) {
    // console.log("result", result);
    const { destination, source, draggableId } = result;

    // console.log("destination", destination);
    // console.log("source", source);
    // console.log("draggableId", draggableId);
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.droppableId === "test"
    ) {
      const items = [...streamers];

      const [movedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, movedItem);

      setStreamers(items);
      return;
    } else if (
      source.droppableId === destination.droppableId &&
      source.droppableId === "test1"
    ) {
      const items = [...priority];

      const [movedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, movedItem);

      setPriority(items);
      return;
    }

    // console.log("x", source.droppableId);
    // kiri kanan atay kanan kiri
    if (source.droppableId === "test") {
      const items = [...streamers];

      const [movedItem] = items.splice(source.index, 1);
      setStreamers(items);

      const items1 = [...priority];
      items1.splice(destination.index, 0, movedItem);

      setPriority(items1);

      return;
    } else {
      const items = [...priority];

      const [movedItem] = items.splice(source.index, 1);
      setPriority(items);

      const items1 = [...streamers];
      items1.splice(destination.index, 0, movedItem);

      setStreamers(items1);

      return;
    }
  }
  return (
    <>
      <div className="min-h-screen bg-slate-800 content-center">
        <div className="flex justify-center mb-3 mt-5">
          <a
            href="https://saweria.co/VCTPriorityWatch"
            className="inline-block bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            target="_blank"
          >
            VCT Watch Party
          </a>
          <a
            href="https://saweria.co/VCTPriorityWatch"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded ms-3"
            target="_blank"
          >
            Shameless Donate
          </a>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="justify-self-center sm:justify-self-end">
              <p className="text-white text-center font-semibold py-2 px-4 bg-blue-700 rounded-t-lg">
                Waiting Room
              </p>
              <Droppable droppableId="test">
                {(provided, snapshot) => (
                  <div
                    id="left"
                    className={`w-64 sm:w-80 min-h-96 max-h-96 border-solid border-x-4 border-b-4 border-blue-700 overflow-auto overflow-x-hidden ${
                      snapshot.isDraggingOver ? "bg-lime-400" : "bg-lime-400"
                    }`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {streamers.map(
                      ({ name, profileUrl, imgUrl, badge, status }, index) => {
                        return (
                          <Draggable
                            key={name}
                            draggableId={name}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                className={`rounded-md m-3 cursor-grab  ${
                                  snapshot.isDragging
                                    ? "bg-slate-300"
                                    : "bg-white"
                                }`}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <div className="grid grid-cols-3 justify-items-center">
                                  <div className="grid my-1">
                                    <div className="justify-self-end ms-7">
                                      <span className="relative flex h-3 w-3">
                                        <span
                                          className={`animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75 ${
                                            status === "LIVE NOW"
                                              ? "bg-red-600"
                                              : "bg-gray-400"
                                          }`}
                                        ></span>
                                        <span
                                          className={`relative inline-flex rounded-full h-3 w-3 ${
                                            status === "LIVE NOW"
                                              ? "bg-red-600"
                                              : "bg-gray-400"
                                          }`}
                                        ></span>
                                      </span>
                                    </div>
                                    <a
                                      href={profileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="-mt-2"
                                    >
                                      <img
                                        src={imgUrl}
                                        alt={`${name} Profile`}
                                        className="w-10 rounded-full"
                                      />
                                    </a>
                                  </div>
                                  <div className="flex items-center">
                                    <div>
                                      <p className="text-xs font-bold text-start">
                                        {name}
                                      </p>
                                      <div
                                        className={`rounded-sm ${
                                          status === "LIVE NOW"
                                            ? "bg-red-600"
                                            : "bg-black"
                                        }`}
                                      >
                                        <p className="text-xs text-start font-semibold text-white mx-1">
                                          {status}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="bg-blue-900 border-2 border-indigo-600 rounded-md flex">
                                      <div>
                                        <p className="text-xs font-medium text-center text-white mx-1">
                                          {badge}
                                        </p>
                                      </div>
                                      <div>
                                        <span className="relative flex h-3 w-3">
                                          {badge === "AURA" ? (
                                            <>
                                              <span className="animate-ping absolute inline-flex ms-0.5 mt-1 h-2 w-2 rounded-full bg-orange-400 opacity-75"></span>
                                              <AiFillFire color="#f97316" />
                                            </>
                                          ) : badge === "CASUAL" ? (
                                            <PiTelevisionSimpleFill color="#f97316" />
                                          ) : badge === "ANALYTIC" ? (
                                            <IoMdAnalytics color="#f97316" />
                                          ) : null}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="justify-self-center sm:justify-self-start text-center">
              <p className="text-white text-center font-semibold py-2 px-4 bg-blue-700 rounded-t-lg">
                Priority Watch Streamer
              </p>
              <Droppable droppableId="test1">
                {(provided) => (
                  <div
                    id="right"
                    className={`w-64 sm:w-80 min-h-96 max-h-96 border-solid border-x-4 border-b-4 border-blue-700 overflow-auto overflow-x-hidden bg-lime-400  ${
                      priority.length > 0 ? "" : "content-center"
                    }`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {priority.length > 0 ? (
                      priority.map(
                        (
                          { name, profileUrl, imgUrl, badge, status },
                          index
                        ) => (
                          <Draggable
                            key={name}
                            draggableId={name}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                className={`rounded-md m-3 cursor-grab  ${
                                  snapshot.isDragging
                                    ? "bg-slate-300"
                                    : "bg-white"
                                }`}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <div className="grid grid-cols-3 justify-items-center">
                                  <div className="grid my-1">
                                    <div className="justify-self-end ms-7">
                                      <span className="relative flex h-3 w-3">
                                        <span
                                          className={`animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75 ${
                                            status === "LIVE NOW"
                                              ? "bg-red-600"
                                              : "bg-gray-400"
                                          }`}
                                        ></span>
                                        <span
                                          className={`relative inline-flex rounded-full h-3 w-3 ${
                                            status === "LIVE NOW"
                                              ? "bg-red-600"
                                              : "bg-gray-400"
                                          }`}
                                        ></span>
                                      </span>
                                    </div>
                                    <a
                                      href={profileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="-mt-2"
                                    >
                                      <img
                                        src={imgUrl}
                                        alt={`${name} Profile`}
                                        className="w-10 rounded-full"
                                      />
                                    </a>
                                  </div>
                                  <div className="flex items-center">
                                    <div>
                                      <p className="text-xs font-bold text-start">
                                        {name}
                                      </p>
                                      <div
                                        className={`rounded-sm ${
                                          status === "LIVE NOW"
                                            ? "bg-red-600"
                                            : "bg-black"
                                        }`}
                                      >
                                        <p className="text-xs text-start font-semibold text-white mx-1">
                                          {status}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="bg-blue-900 border-2 border-indigo-600 rounded-md flex">
                                      <div>
                                        <p className="text-xs font-medium text-center text-white mx-1">
                                          {badge}
                                        </p>
                                      </div>
                                      <div>
                                        <span className="relative flex h-3 w-3">
                                          {badge === "AURA" ? (
                                            <>
                                              <span className="animate-ping absolute inline-flex ms-0.5 mt-1 h-2 w-2 rounded-full bg-orange-400 opacity-75"></span>
                                              <AiFillFire color="#f97316" />
                                            </>
                                          ) : badge === "CASUAL" ? (
                                            <PiTelevisionSimpleFill color="#f97316" />
                                          ) : badge === "ANALYTIC" ? (
                                            <IoMdAnalytics color="#f97316" />
                                          ) : null}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        )
                      )
                    ) : (
                      <p className="text-blue-800 font-semibold animate-bounce">
                        Drag and Drop Here
                      </p>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </div>
        {/*  */}
        <p className="text-white text-center m-5">
          This website aims to assist you in choosing a streamer to watch when
          VCT is live
        </p>
      </div>
    </>
  );
}

export default App;
