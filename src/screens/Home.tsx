import { useDispatch, useSelector } from "react-redux";
import { fetchStateInfo } from "../redux/actions/stateActions";
import { getState } from "../redux/selectors";
import { useNavigate } from "react-router-dom";

function Home() {
  const state = useSelector(getState)?.state;
  const { error, data: stories, isLoading } = state;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <button
        style={{ width: "100px" }}
        onClick={() => {
          dispatch(fetchStateInfo("React"));
        }}
      >
        Fetch Stories
      </button>

      {error?.isError && <span>{error?.message}</span>}

      {isLoading && <span>loading...</span>}

      <ul>
        {stories?.map((story) => (
          <li key={story?.objectID}>
            <a href={story?.url}>{story?.title}</a>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => navigate("/detail-screen", { state: { story } })}
            >
              See more info
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
