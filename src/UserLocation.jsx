import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Maps from "./pages/Maps";

// Function to fetch user's current geolocation when the "Allow" button on the dialog box is clicked.
function UserLocation() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  // useEffect hook used to log user's latitude and longitude to the console whenever userLocation changes. Ensures that console.logs are executed after the state has been updated.
  useEffect(() => {
    if (userLocation && userLocation.latitude && userLocation.longitude) {
      console.log("Latitude:", userLocation.latitude);
      console.log("Longitude:", userLocation.longitude);
      //fetching user location and displaying on map
      const iframeData = document.getElementById("iframeId");
      iframeData.src = `https://maps.google.com/maps?q=${userLocation.latitude}, ${userLocation.longitude}&h1=es;&output=embed`;
    }
  }, [userLocation]);

  // Function to check if userLocation is null, if null it calls the getUserLocation function to fetch user's geolocation.
  const handleClick = () => {
    console.log(
      "Allow button is clicked - wait couple of seconds for the map to appear"
    );
    if (!userLocation) {
      getUserLocation();
    }
    setOpen(false);
  };

  // Function called when user does not want to share their geolocation.
  const denyClick = () => {
    console.log("The user has decided to not share their location");
    alert(
      "You have decided to not share your location. The restaurant results will not be specific to your location"
    );
  };

  // Function to fetch user's current geolocation - calling longitude and latitude
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          setError("Something went wrong getting your location");
          setUserLocation(null);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
      setUserLocation(null);
    }
  };

  return (
    //Dialog box to obtain user's consent to share their current location
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <MapPinIcon className="h-6 w-6 " aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Allow "Culinary Compass" to access your location while
                          you are using the website?
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Your current location will be displayed on the map
                            and used for directions and nearby search results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                      onClick={() => {
                        setOpen(false);
                        handleClick();
                      }}
                    >
                      Allow
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => {
                        setOpen(false);
                        denyClick();
                      }}
                      ref={cancelButtonRef}
                    >
                      Don't Allow
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* <iframe id="iframeId" height="400px" width="600px"></iframe> */}
      <div id="iframeId">
        {userLocation === null ? (
          <div> Loading... </div>
        ) : (
          <Maps userLocation={userLocation} />
        )}
      </div>

      {/* {userLocation && <Maps userLocation={userLocation} />} */}
    </div>
  );
}

export default UserLocation;