import { CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

export type TLoader = {
  isLoading: boolean;
  fullscreen?: boolean;
  overlay?: boolean;
};

const Loader = ({
  isLoading,
  fullscreen = false,
  overlay = false,
}: TLoader) => {
  if (!isLoading) return null;

  return (
    <Container data-testid="loader" fullscreen={fullscreen} overlay={overlay}>
      <CircularProgress />
    </Container>
  );
};

export default Loader;

const Container = styled("div")(
  ({ fullscreen, overlay }: { fullscreen: boolean; overlay: boolean }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    ...(fullscreen && {
      height: "100vh",
      width: "100vw",
    }),

    ...(overlay && {
      background: "rgba(0, 0, 0, 0.5)",
    }),
  })
);
