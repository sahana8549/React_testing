import Card from "./Card";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
const appendData = async (gender1, place) => {
  const Url = `https://randomuser.me/api/?results=20&nat=${place}&inc=name,gender,email,nat,picture&gender=${gender1}`;
  const res = await axios.get(Url);
  return res.data;
};
const users = {
  results: [
    {
      name: { title: "Mrs", first: "Olivia", last: "Lee" },
      email: "olivia.lee@example.com",
      gender: "male",
      picture: {
        large: "https://randomuser.me/api/portraits/men/70.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg",
      },
    },
    {
      name: { title: "Mrs", first: "Buse", last: "Demirbaş" },
      email: "buse.demirbas@example.com",
      gender: "female",
      picture: {
        large: "https://randomuser.me/api/portraits/women/3.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
      },
    },
    {
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      email: "brad.gibson@example.com",
      gender: "male",
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
    },
  ],
};
const success = rest.get("https://randomuser.me/api/", (req, res, ctx) => {
  return res(ctx.json(users));
});

const server = setupServer(success);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("Display card", () => {
  it("renders card", () => {
    render(<Card />);
  });

  it("get users", async () => {
    const res = await appendData("male", "AU");
    expect(res).toStrictEqual(users);
  });
});
