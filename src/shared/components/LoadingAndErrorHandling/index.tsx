import { Alert, AlertTitle } from "@mui/material";

import Loader, { TLoader } from "../Loader";

type TLoadingAndErrorHandling = TLoader & {
  errorMessage: string;
  children: React.ReactNode;
};

const LoadingAndErrorHandling = ({
  errorMessage,
  children,
  ...loaderProps
}: TLoadingAndErrorHandling) => {
  if (loaderProps.isLoading) return <Loader {...loaderProps} />;

  if (!!errorMessage)
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {errorMessage}
      </Alert>
    );

  return <>{children}</>;
};

export default LoadingAndErrorHandling;
