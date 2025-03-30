interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  if (!errorMessage) return null;
  return <div className="text-red-500 test-sm mt-2"> {errorMessage}</div>;
};

export default ErrorMessage;
