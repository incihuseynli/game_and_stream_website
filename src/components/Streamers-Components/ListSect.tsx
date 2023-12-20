import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import TopList from "../Global-Components/TopList";
import StreamersAPI from "../../api/StreamersAPI";
import { IStreamers } from "../../types";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ListSect = () => {
  const [followStates, setFollowStates] = useState<{ [key: number]: boolean }>(
    {}
  );
  const toggleFollow = (streamerId: number) => {
    setFollowStates((prevStates) => ({
      ...prevStates,
      [streamerId]: !prevStates[streamerId],
    }));
  };
  return (
    <TopList secTitle="Top Streamers">
      {/* List */}
      <StreamersAPI limit={3}>
        {(streamers: IStreamers[]) => (
          <div className="flex flex-col gap-6">
            {streamers.map(({ id, username, image }) => {
              const isFollowed = followStates[id] || false;
              return (
                // ITEM
                <div
                  className="w-full flex items-center gap-8 md:gap-16 lg:gap-8 border-b border-b-gray-500 border-opacity-20 last:border-none pb-6"
                  key={id}
                >
                  <img
                    src={image}
                    alt={`${username} profile`}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <CheckBadgeIcon className="w-5 h-5 text-primary-green-300 " />
                      <NavLink
                        to={`/streams/${id}`}
                        className="text-lg font-barlow font-bold text-white capitalize"
                      >
                        {username}
                      </NavLink>
                    </div>
                    <button
                      className={`${
                        isFollowed
                          ? "hover:bg-primary-green-300 bg-secondary-yellow-500 "
                          : "bg-primary-green-300 hover:bg-secondary-yellow-500 "
                      } 
                        rounded-3xl py-2 px-3 text-white font-poppins font-bold text-sm capitalize text-center  transition-all duration-500 w-fit
                        `}
                      onClick={() => toggleFollow(id)}
                    >
                      {isFollowed ? "Followed" : "Follow"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </StreamersAPI>
    </TopList>
  );
};

export default ListSect;
