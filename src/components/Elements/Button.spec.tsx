import { within } from "@storybook/testing-library";
import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "./Button.stories";

const { Click } = composeStories(stories);

describe("Button", () => {
  it(`${Click.storyName}`, async () => {
    const { container } = render(<Click />);
    await Click.play({ canvasElement: container });

    const canvas = within(container);
    expect(canvas.getByRole("button")).toBeInTheDocument();
  });
});
