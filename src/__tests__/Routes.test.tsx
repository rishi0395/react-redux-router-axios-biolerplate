import "@testing-library/jest-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import App from "../screens/Routes";

import { renderWithProviders } from "../utils";
import axios from "axios";

jest.mock("axios");
describe("App.tsx", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should match snapshot", async () => {
    (axios.get as jest.Mock).mockResolvedValue({});
    renderWithProviders(<App />);
    fireEvent.click(screen.getByText(/Fetch Stories/i));
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(await screen.findByText("No data found...")).toBeInTheDocument();
  });

  it("should match handle when api fail", async () => {
    (axios.get as jest.Mock).mockRejectedValue({ response: 401 });
    renderWithProviders(<App />);
    fireEvent.click(screen.getByText(/Fetch Stories/i));
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(
      await screen.findByText("something went wrong...")
    ).toBeInTheDocument();
  });

  it("should match snapshot", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        hits: [
          {
            created_at: "2017-09-22T21:51:56.000Z",
            title: "Relicensing React, Jest, Flow, and Immutable.js",
            url: "https://code.facebook.com/posts/300798627056246",
            author: "dwwoelfel",
            points: 2280,
            story_text: null,
            comment_text: null,
            num_comments: 498,
            story_id: null,
            story_title: null,
            story_url: null,
            parent_id: null,
            created_at_i: 1506117116,
            relevancy_score: 7675,
            _tags: ["story", "author_dwwoelfel", "story_15316175"],
            objectID: "15316175",
            _highlightResult: {
              title: {
                value:
                  "Relicensing <em>React</em>, Jest, Flow, and Immutable.js",
                matchLevel: "full",
                fullyHighlighted: false,
                matchedWords: ["react"],
              },
              url: {
                value: "https://code.facebook.com/posts/300798627056246",
                matchLevel: "none",
                matchedWords: [],
              },
              author: {
                value: "dwwoelfel",
                matchLevel: "none",
                matchedWords: [],
              },
            },
          },
          {
            created_at: "2019-11-14T16:35:38.000Z",
            title: "Build Your Own React",
            url: "https://pomb.us/build-your-own-react/",
            author: "pomber",
            points: 1478,
            story_text: null,
            comment_text: null,
            num_comments: 108,
            story_id: null,
            story_title: null,
            story_url: null,
            parent_id: null,
            created_at_i: 1573749338,
            _tags: ["story", "author_pomber", "story_21536789"],
            objectID: "21536789",
            _highlightResult: {
              title: {
                value: "Build Your Own <em>React</em>",
                matchLevel: "full",
                fullyHighlighted: false,
                matchedWords: ["react"],
              },
              url: {
                value: "https://pomb.us/build-your-own-<em>react</em>/",
                matchLevel: "full",
                fullyHighlighted: false,
                matchedWords: ["react"],
              },
              author: {
                value: "pomber",
                matchLevel: "none",
                matchedWords: [],
              },
            },
          },
          {
            created_at: "2015-03-26T17:08:54.000Z",
            title: "React Native is now open source",
            url: "https://github.com/facebook/react-native",
            author: "peterhunt",
            points: 1039,
            story_text: null,
            comment_text: null,
            num_comments: 287,
            story_id: null,
            story_title: null,
            story_url: null,
            parent_id: null,
            created_at_i: 1427389734,
            relevancy_score: 5928,
            _tags: ["story", "author_peterhunt", "story_9271246"],
            objectID: "9271246",
            _highlightResult: {
              title: {
                value: "<em>React</em> Native is now open source",
                matchLevel: "full",
                fullyHighlighted: false,
                matchedWords: ["react"],
              },
              url: {
                value: "https://github.com/facebook/<em>react</em>-native",
                matchLevel: "full",
                fullyHighlighted: false,
                matchedWords: ["react"],
              },
              author: {
                value: "peterhunt",
                matchLevel: "none",
                matchedWords: [],
              },
            },
          },
          {
            created_at: "2017-08-19T00:35:34.000Z",
            title: "Explaining React's license",
            url: "https://code.facebook.com/posts/112130496157735/explaining-react-s-license/",
            author: "y4m4b4",
            points: 978,
            story_text: null,
            comment_text: null,
            num_comments: 425,
            story_id: null,
            story_title: null,
            story_url: null,
            parent_id: null,
            created_at_i: 1503102934,
            relevancy_score: 7608,
            _tags: ["story", "author_y4m4b4", "story_15050841"],
            objectID: "15050841",
            _highlightResult: {
              title: {
                value: "Explaining <em>React</em>'s license",
                matchLevel: "full",
                fullyHighlighted: false,
                matchedWords: ["react"],
              },
              url: {
                value:
                  "https://code.facebook.com/posts/112130496157735/explaining-<em>react</em>-s-license/",
                matchLevel: "full",
                fullyHighlighted: false,
                matchedWords: ["react"],
              },
              author: {
                value: "y4m4b4",
                matchLevel: "none",
                matchedWords: [],
              },
            },
          },
        ],
      },
    });
    renderWithProviders(<App />);
    fireEvent.click(screen.getByText(/Fetch Stories/i));
    screen.getByText(/loading.../i);

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    expect(
      await screen.findByText("Relicensing React, Jest, Flow, and Immutable.js")
    ).toBeInTheDocument();
    expect(await screen.findByText("Build Your Own React")).toBeInTheDocument();
    expect(
      await screen.findByText("React Native is now open source")
    ).toBeInTheDocument();

    fireEvent.click(screen.getAllByText(/See more info/i).at(0));

    expect(await screen.findByText(/Title/i)).toBeInTheDocument();
    expect(
      await screen.findByText(
        /Relicensing React, Jest, Flow, and Immutable.js/i
      )
    ).toBeInTheDocument();
    expect(await screen.findByText(/Author:/i)).toBeInTheDocument();
    expect(await screen.findByText(/dwwoelfel/i)).toBeInTheDocument();
  });
});
